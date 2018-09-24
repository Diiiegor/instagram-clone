import {takeEvery, call, select,put,all} from 'redux-saga/effects';
import CONSTANTES from "../CONSTANTES";
import {autenticacion, baseDeDatos} from '../Servicios/Firebase';
import {actionAgregarPublicacionesStore,actionAgregarAutoresStore} from "../ACCIONES";

const registroEnFirebase = (values) =>
    autenticacion.createUserWithEmailAndPassword(values.correo, values.password)
        .then(success => success)


const registroEnBaseDeDatos = ({uid, email, nombre, urlPerfil}) => {
    baseDeDatos.ref('usuarios/' + uid).set({
        nombre: nombre,
        email: email,
        urlPerfil
    });
};

//hace llamado al api de cloudinary para guardar imagen
const registroFotoEnCloudinary = ({imagen}) => {
    const {uri} = imagen;
    const splitName = uri.split('/');
    const name = [...splitName].pop();
    const foto = {
        uri,
        type: 'image/png',
        name
    };

    const formImagen = new FormData();
    formImagen.append('upload_preset', CONSTANTES.CLOUDINARY_PRESET);
    formImagen.append('file', foto);
    return fetch(CONSTANTES.CLOUDINARY_NAME, {
        method: 'POST',
        body: formImagen
    })
        .then((response) => response.json());
};

function* sagaRegistro(values) {
    try {
        //traigo la foto del state
        const imagen = yield select((state) => state.reducerImagenSignUp);
        //hago el llamado a la funcion que hace el registro en cloudinary pasandole la imagel
        // y esperando que me regrese los datos de la imagen ya en el server
        const urlFoto = yield call(registroFotoEnCloudinary, imagen);
        const urlPerfil = urlFoto.secure_url;
        //hago el registro en firebase y en base de datos
        const registro = yield call(registroEnFirebase, values.datos);
        const {uid, email} = registro.user;
        const {datos: {nombre}} = values;
        yield call(registroEnBaseDeDatos, {uid, email, nombre, urlPerfil})
    } catch (error) {
        console.log(error)
    }


}

function* sagaLogin(values) {
    try {
        const resultado = yield call(loginEnFirebase, values.datos);
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

const loginEnFirebase = ({correo, password}) => autenticacion.signInWithEmailAndPassword(correo, password)
    .then((success) => success);

const escribirFirebase = ({width, height, secure_url, uid}, texto = "") => baseDeDatos
    .ref('publicaciones/')
    .push({
        width,
        height,
        secure_url,
        texto,
        uid
    })
    .then(response => response);

const escribirAutorPublicaciones = ({uid, key}) => baseDeDatos.ref(`autor-publicaciones/${uid}`)
    .update({[key]: true})
    .then(response => response);

function* sagaSubirPublicacion({values}) {
    try {
        const imagen = yield select(state => state.reducerImagenPublicacion);
        const usuario = yield select(state => state.reducerSesion);
        const {uid} = usuario;
        const resultadoImagen = yield call(registroFotoEnCloudinary, imagen);
        const {width, height, secure_url} = resultadoImagen;
        const parametrosImagen = {width, height, secure_url, uid};
        const escribirEnFirebase = yield call(escribirFirebase, parametrosImagen, values.texto);
        const {key} = escribirEnFirebase;
        const parametrosAutorPublicaciones = {key, uid}
        const resultadoEscribirAutorPublicaciones = yield call(escribirAutorPublicaciones, parametrosAutorPublicaciones);
    }
    catch (e) {
        console.log(e, 'sagaSubirPublicacion')
    }
}

const descargarPublicaciones = () => baseDeDatos
    .ref(`publicaciones/`)
    .once('value')
    .then(snapshot => {
        let publicaciones=[];
            snapshot.forEach((childSnapshot) => {
                const {key} = childSnapshot;
                let publicacion = childSnapshot.val();
                publicacion.key = key;
                publicaciones.push(publicacion)
            });
        return publicaciones;
        }
    );

const descargarAutor=(uid)=>baseDeDatos.ref(`usuarios/${uid}`)
    .once('value')
    .then(snapshot=>snapshot.val());

function* sagaDescargarPublicaciones() {
    try {
        const publicaciones = yield call(descargarPublicaciones);
        const autores= yield all(publicaciones.map(publicacion=>call(descargarAutor,publicacion.uid)));
        yield put(actionAgregarAutoresStore(autores))
        yield put(actionAgregarPublicacionesStore(publicaciones));
    }
    catch (e) {
        console.log(e)
    }
}

export default function* funcionPrimaria() {
    yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
    yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
    yield takeEvery(CONSTANTES.SUBIR_PUBLICACION, sagaSubirPublicacion);
    yield takeEvery(CONSTANTES.DESCARGAR_PUBLICACIONES, sagaDescargarPublicaciones)
}