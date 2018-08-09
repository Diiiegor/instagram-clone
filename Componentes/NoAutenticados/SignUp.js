import React from 'react';
import {StyleSheet, Text, View,Button,TextInput} from 'react-native';
import {connect} from 'react-redux';
import SignUpForm from './Formas/SignUpForm';

//export default
class SignUp extends React.Component {
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <SignUpForm/>
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

mapDispatchToProps=dispatch=>({
    aumentar:()=>{
        dispatch({type:'AUMENTAR_REDUCER_PRUEBA'})
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
