import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

//export default
class Comentarios extends React.Component {
    static navigationOptions = {
        tabBarVisible:false
    };
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text>Comentarios</Text>
                <Button title="Autor" onPress={()=>{navigation.navigate('Autor')}}/>
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
export default Comentarios;
