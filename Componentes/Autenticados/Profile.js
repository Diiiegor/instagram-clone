import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

//export default
class Profile extends React.Component {
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button title="Publicacion" onPress={()=>{navigation.navigate('Publicacion')}}/>
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
export default Profile;
