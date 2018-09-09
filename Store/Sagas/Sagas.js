import {takeEvery, call,select} from 'redux-saga/effects';
import CONSTANTES from "../CONSTANTES";
import {autenticacion, baseDeDatos} from '../Servicios/Firebase';

const registroEnFirebase = (values) =>
    autenticacion.createUserWithEmailAndPassword(values.correo, values.password)
        .then(success => success)


const registroEnBaseDeDatos = ({uid, email, nombre}) => {
    baseDeDatos.ref('usuarios/' + uid).set({
        nombre: nombre,
        email: email,
        urlPerfil: 'http://asdasd'
    });
};

//hace llamado al api de cloudinary para guardar imagen
const registroFotoEnCloudinary=({imagen})=>{
    const {uri,type}=imagen;
    const splitName=uri.split('/');
    const name=[...splitName].pop();
    const foto={
        uri,
        type:'auto',
        name
    };
    console.log(foto);
    const formImagen=new FormData();
    formImagen.append('upload_preset',CONSTANTES.CLOUDINARY_PRESET);
    formImagen.append('file',foto);
    console.log(formImagen);
    return fetch(CONSTANTES.CLOUDINARY_NAME,{
        method: 'POST',
        headers: {'Content-Type':'multipart/form-data'},
        body:formImagen
    })
        .then((response)=>response);
};

function* sagaRegistro(values) {
    try {
        //cargar foto
        const imagen=yield select((state)=>state.reducerImagenSignUp);
        //console.log(imagen);
        const urlFoto=yield call(registroFotoEnCloudinary,imagen);
        console.log(urlFoto)
        //const registro = yield call(registroEnFirebase, values.datos)
        //const {uid, email} = registro.user;
        //const {datos: {nombre}} = values;
        //uid,email.nombre
        //yield call(registroEnBaseDeDatos, {uid, email, nombre})
    } catch (error) {
        console.log(error)
    }


}

function* sagaLogin(values) {
    try {
        const resultado=yield call(loginEnFirebase,values.datos)
        console.log(resultado)
    }catch (error) {
        console.log(error)
    }
}

const loginEnFirebase = ({correo,password}) => autenticacion.signInWithEmailAndPassword(correo, password)
    .then((success)=>success);

export default function* funcionPrimaria() {
    yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
    yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
}