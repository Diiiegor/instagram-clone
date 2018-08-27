import {takeEvery, call} from 'redux-saga/effects';
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
}

function* sagaRegistro(values) {
    try {
        const registro = yield call(registroEnFirebase, values.datos)
        const {uid, email} = registro.user;
        const {datos: {nombre}} = values;
        //uid,email.nombre
        yield call(registroEnBaseDeDatos, {uid, email, nombre})
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