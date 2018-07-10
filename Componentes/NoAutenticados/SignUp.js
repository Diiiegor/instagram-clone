import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import {connect} from 'react-redux';

//export default
class SignUp extends React.Component {
    render() {
        console.log(this.props.numero)
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text>SignUp</Text>
                <Button
                    title="Aumentar"
                    onPress={this.props.aumentar}
                />
                <Button title="SignIn" onPress={()=>{navigation.goBack()}}/>
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
