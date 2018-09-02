import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {blur,change} from 'redux-form';
import SignUpForm from './Formas/SignUpForm';
import {actionCargarImagenSignUp, actionRegistro,actionLimpiarImagenSignUp} from '../../Store/ACCIONES';
import SeleccionarImagen from '../SeleccionarImagen';
import CONSTANTES from "../../Store/CONSTANTES";

//export default
class SignUp extends React.Component {
    registroDeUsuario = (values) => {
        this.props.registro(values)
    };

    componentWillUnmount=()=>{
        this.props.limpiarImagen()
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen}/>
                <SignUpForm registro={this.registroDeUsuario} imagen={this.props.imagen.imagen}/>
                <Button title="SignIn" onPress={() => {
                    navigation.goBack()
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 16
    },
});

const mapStateToProps = (state) => {
    return {
        numero: state.reducerPrueba,
        imagen: state.reducerImagenSignUp
    }
};

const mapDispatchToProps = dispatch => ({
    registro: (values) => {
        dispatch(actionRegistro(values))
    },
    cargarImagen: (imagen) => {
        dispatch(actionCargarImagenSignUp(imagen))
        dispatch(blur('SignUpForm','imagen',Date.now()))
    },
    limpiarImagen:()=>{
        dispatch(actionLimpiarImagenSignUp())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
