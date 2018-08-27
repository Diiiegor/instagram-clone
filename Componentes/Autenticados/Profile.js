import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import {autenticacion} from "../../Store/Servicios/Firebase";

//export default
class Profile extends React.Component {
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button title="Publicacion" onPress={()=>{navigation.navigate('Publicacion')}}/>
                <Button title="Salir" onPress={()=>{
                    autenticacion.signOut();
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
export default Profile;
