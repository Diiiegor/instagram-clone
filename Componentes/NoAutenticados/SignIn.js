import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import {connect} from 'react-redux';
import SignInForm from './Formas/SignInForm'

//export default
class SignIn extends React.Component {
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <SignInForm/>
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

export  default SignIn;

