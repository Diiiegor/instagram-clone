import React from 'react';
import {StyleSheet, Text, View,Button,TextInput} from 'react-native';
import {connect} from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import {actionRegistro} from '../../Store/ACCIONES';
import SeleccionarImagen from '../SeleccionarImagen';

//export default
class SignUp extends React.Component {
    registroDeUsuario=(values)=>{
        this.props.registro(values)
    };
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <SeleccionarImagen/>
                <SignUpForm registro={this.registroDeUsuario}/>
                <Button title="SignIn" onPress={()=>{navigation.goBack()}}/>
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

const mapStateToProps=(state)=>{
    return {
        numero:state.reducerPrueba
    }
};

const mapDispatchToProps=dispatch=>({
    registro:(values)=>{
        dispatch(actionRegistro(values))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
