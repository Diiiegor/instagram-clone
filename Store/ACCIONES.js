import CONSTANTES from "./CONSTANTES";

export const actionRegistro = values => ({
    type: CONSTANTES.REGISTRO, datos: values
});
export const actionLogin = datos => ({
    type: CONSTANTES.LOGIN, datos
});
export const actionEstablecerSesion = usuario => ({
    type: CONSTANTES.ESTABLECER_SESION, usuario
});
export const actionCerrarSesion = datos => ({
    type: CONSTANTES.CERRAR_SESION
});
export const actionCargarImagenSignUp = (imagen) => ({
    type: CONSTANTES.CARGAR_IMAGEN_SIGNUP,
    imagen
});
export const actionLimpiarImagenSignUp=()=>({
    type:CONSTANTES.LIMPIAR_IMAGEN_SIGNUP
});
export const actionCargarImagenPublicacion = (imagen) => ({
    type: CONSTANTES.CARGAR_IMAGEN_PUBLICACION,
    imagen
});
export const actionLimpiarImagenPublicacion=()=>({
    type:CONSTANTES.LIMPIAR_IMAGEN_PUBLICACION
});
export const actionSubirPublicacion=(values)=>({
    type:CONSTANTES.SUBIR_PUBLICACION,
    values
});

export const actionDescargarPublicaciones=()=>({
    type:CONSTANTES.DESCARGAR_PUBLICACIONES
});

export const actionAgregarPublicacionesStore=(publicaciones)=>({
    type:CONSTANTES.AGREGAR_PUBLICACIONES_STORE,
    publicaciones
});
export const actionAgregarAutoresStore=(autores)=>({
    type:CONSTANTES.AGREGAR_AUTORES_STORE,
    autores
});
