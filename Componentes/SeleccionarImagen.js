import React from 'react';
import {Button, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ImagePicker} from 'expo';

export default class SeleccionarImagen extends React.Component {
    state = {
        image: null,
    };

    render() {
        let {image} = this.state;

        return (
            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={this.seleccionarImagen}>
                    {
                        this.state.image?
                            <Image source={{uri:this.state.image}} style={styles.imagen}/>:
                            <Image source={require('../assets/imagen_defecto.jpg')} style={styles.imagen}/>
                    }

                </TouchableOpacity>
            </View>
        );
    }

    seleccionarImagen = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({image: result.uri});
        }
    };
}

const styles = StyleSheet.create({
    imagen: {
        width:160,
        height:160,
        borderRadius:80
    },
});