import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

//export default
class Follow extends React.Component {
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text>Follow</Text>
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
export default Follow;
