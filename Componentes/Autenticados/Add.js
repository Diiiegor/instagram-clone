import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

//export default
class Add extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Button title={"Seleccionar de galeria"}
                        onPress={() => {
                            navigation.navigate('Seleccion')
                        }}/>
                <Text>Add</Text>
                <Button title={"Tomar foto"}
                        onPress={() => {
                            navigation.navigate('Seleccion')
                        }}/>

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
export default Add;
