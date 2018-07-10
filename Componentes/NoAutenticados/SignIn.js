import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import {connect} from 'react-redux';

//export default
class SignIn extends React.Component {
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text>SignIn</Text>
                <Button title="SignUp" onPress={()=>{navigation.navigate('SignUp')}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export  default SignIn;

