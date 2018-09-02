import {createStore,combineReducers,applyMiddleware} from 'redux';
import {reducer as form} from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import funcionPrimaria from './Sagas/Sagas';
import CONSTANTES from "./CONSTANTES";

const reducerPrueba=(state=[0],action)=> {
    switch (action.type) {
        case 'AUMENTAR_REDUCER_PRUEBA':
            return [...state,1];
        default:
            return state;
    }
};

const reducerSesion=(state=null,action)=>{
    switch (action.type) {
        case CONSTANTES.ESTABLECER_SESION:
            return action.usuario;
        case CONSTANTES.CERRAR_SESION:
            return null;
        default:
            return state;
    }
};

const reducerImagenSignUp=(state={imagen:null},action)=>{
    switch (action.type) {
        case CONSTANTES.CARGAR_IMAGEN_SIGNUP:
            return {imagen:action.imagen};

        case CONSTANTES.LIMPIAR_IMAGEN_SIGNUP:
            return {imagen:null};

        default :
                return state;
    }
};


const sagaMiddleware=createSagaMiddleware();

const reducers=combineReducers({
    reducerPrueba,
    reducerSesion,
    form,
    reducerImagenSignUp
});
const store=createStore(reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);
export default store;