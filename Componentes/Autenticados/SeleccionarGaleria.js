import React from 'react';
import {StyleSheet, Text, View, Button,Alert} from 'react-native';
import SeleccionarImagen from "../SeleccionarImagen";
import {connect} from 'react-redux';
import {
    actionCargarImagenPublicacion,
    actionLimpiarImagenPublicacion, actionLimpiarSubirPublicacion,
    actionSubirPublicacion
} from "../../Store/ACCIONES";
import {blur} from 'redux-form';
import SeleccionarGaleriaForm from "./SeleccionarGaleriaForm";

//export default
class SeleccionarGaleria extends React.Component {
    static navigationOptions={
        tabBarVisible: false
    };
    componentWillUnmount(){
        this.props.limpiarImagen();
    };
    componentWillReceiveProps(nextProps){
        if (this.props.estadoSubirPublicacion!==nextProps.estadoSubirPublicacion) {
            switch (nextProps.estadoSubirPublicacion) {
                case 'EXITO':
                    Alert.alert('EXITO','La publicacion fue subida correctamente!',
                        [
                            {
                                'text': 'OK',
                                onPress: () => {
                                    this.props.limpiarEstadoPublicacion();
                                    this.props.navigation.goBack();
                                }
                            }
                        ]);
                    break;
                case 'ERROR':
                    Alert.alert('ERROR','Ocurrio un problema en la publicacion, intentelo de nuevo!',
                        [
                            {
                                'text': 'CONFIRMAR',
                                onPress: () => {
                                    this.props.limpiarEstadoPublicacion();
                                    this.props.navigation.goBack();
                                }
                            }
                        ]);
                    break;
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imagen}>
                    <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} radius/>
                </View>
                <View style={styles.texto}>
                    <SeleccionarGaleriaForm
                        imagen={this.props.imagen.imagen}
                        registro={(values)=>{this.props.subirPublicacion(values)}}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imagen: {
        flex: 2,
    },
    texto: {
        flex: 2
    },
});

const mapStateToProps = (state) => ({
    imagen: state.reducerImagenPublicacion,
    estadoSubirPublicacion:state.reducerExitoSubirPublicacion.estado
});

const mapDispatchToProps = dispatch => ({
    cargarImagen: (imagen) => {
        dispatch(actionCargarImagenPublicacion(imagen));
        dispatch(blur('SeleccionarGaleriaForm','imagen',Date.now()))
    },
    subirPublicacion:(values)=>{
        dispatch(actionSubirPublicacion(values))
    },
    limpiarImagen:()=>{
        dispatch(actionLimpiarImagenPublicacion())
    },
    limpiarEstadoPublicacion:()=>{
        dispatch(actionLimpiarSubirPublicacion())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);

