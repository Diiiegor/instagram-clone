import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import {connect} from 'react-redux';
import {actionLogin} from '../../Store/ACCIONES';
import SignInForm from './Formas/SignInForm';

//export default
class SignIn extends React.Component {
    signinDeUsiario=(values)=>{
        this.props.login(values)
    };
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <SignInForm login={this.signinDeUsiario} />
                <Button title="SignUp" onPress={()=>{navigation.navigate('SignUp')}}/>
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
        prop:state.prop
    }
};

const mapDispatchToProps=dispatch=>({
    login:(datos)=>{
        dispatch(actionLogin(datos))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);

