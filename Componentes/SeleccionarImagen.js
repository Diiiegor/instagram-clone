import React from 'react';
import {Button, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ImagePicker} from 'expo';

const SeleccionarImagen = (props) => {

    const seleccionarImagen = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            props.cargar(result)
        }
    };
    const radius={borderRadius: props.radius?0:80 };
    return (
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={seleccionarImagen}>
                {
                    props.imagen ?
                        <Image source={{uri: props.imagen.uri}} style={{ width: 160,height:160,...radius }}/> :
                        <Image source={require('../assets/imagen_defecto.jpg')} style={{ width: 160,height:160,...radius }}/>
                }
            </TouchableOpacity>
        </View>
    );
};

export default SeleccionarImagen
