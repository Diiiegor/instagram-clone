import React from 'react';
import {Button, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ImagePicker} from 'expo';

const SeleccionarImagen = (props) => {

    const seleccionarImagen = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            props.cargar(result)
        }
    };

    return (
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={seleccionarImagen}>
                {
                    props.imagen ?
                        <Image source={{uri: props.imagen.uri}} style={styles.imagen}/> :
                        <Image source={require('../assets/imagen_defecto.jpg')} style={styles.imagen}/>
                }
            </TouchableOpacity>
        </View>
    );
};

export default SeleccionarImagen

const styles = StyleSheet.create({
    imagen: {
        width: 160,
        height: 160,
        borderRadius: 80
    },
});