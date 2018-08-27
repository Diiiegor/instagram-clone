import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {autenticacion} from '../../Store/Servicios/Firebase';
import {RutasAutenticadas} from "../Autenticados/RutasAutenticadas";
import {RutasNoAutenticadas} from "./RutasNoAutenticadas";
import {actionCerrarSesion, actionEstablecerSesion} from "../../Store/ACCIONES";

//export default
class Seleccion extends React.Component {

    componentDidMount() {
        this.props.autenticacion();
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.usuario ? <RutasAutenticadas/> : <RutasNoAutenticadas/>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
const mapStateToProps = (state) => {
    return {
        usuario: state.reducerSesion
    }
};
const mapDispatchToProps = dispatch => {
    return {
        autenticacion: () => {
            autenticacion.onAuthStateChanged((usuario) => {
                if (usuario) {
                    console.log(usuario.toJSON());
                    dispatch(actionEstablecerSesion(usuario))
                }
                else {
                    console.log('sin sesion');
                    dispatch(actionCerrarSesion())
                }
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);
