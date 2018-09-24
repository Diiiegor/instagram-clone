import React from 'react';
import {StyleSheet, Text, View,Button,Dimensions,Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

//export default
class Publicacion extends React.Component {
    render() {
        const {navigation,item,autor}=this.props;
        const {width} = Dimensions.get('window');
        const factor = item.width / width;
        const height = item.height / factor;
        console.log(autor);
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={{uri: autor.urlPerfil}} style={styles.imageAutor}/>
                    <Text>{autor.nombre}</Text>
                </View>
                <Image
                    source={{uri: item.secure_url}}
                    style={{width, height}}
                />
                <View style={styles.footer}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Ionicons style={styles.icons}  name="ios-heart-outline" color="#1b1b1c" size={30}/>
                        </View>
                        <View>
                            <Ionicons style={styles.icons}  name="ios-chatbubbles-outline" color="#1b1b1c" size={30}/>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.texto}>{item.texto}</Text>
                    </View>
                    <Text>Comentarios</Text>
                </View>
                {/*
                <Text>Publicacion</Text>
                <Button title="Comentarios" onPress={()=>{navigation.navigate('Comentarios')}}/>
                <Button title="Autor" onPress={()=>{navigation.navigate('Autor')}}/>
                */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        marginHorizontal: 8,
        marginVertical: 8
    },
    imageAutor:{
        width: 40,
        height: 40,
        borderRadius:80,
        marginRight: 8
    },
    footer:{
        marginHorizontal:8,
        marginVertical:5,
    },
    icons:{
        marginRight:10
    },
    texto:{

    }

});
export default Publicacion;
