import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import SeleccionarImagen from "../SeleccionarImagen";
import {connect} from 'react-redux';
import {
    actionCargarImagenPublicacion,
    actionLimpiarImagenPublicacion,
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
    imagen: state.reducerImagenPublicacion
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);

