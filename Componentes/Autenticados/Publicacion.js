import React from 'react';
import {StyleSheet, Text, View,Button,Dimensions,Image} from 'react-native';

//export default
class Publicacion extends React.Component {
    render() {
        const {navigation,item}=this.props;
        const {width} = Dimensions.get('window');
        const factor = item.width / width;
        const height = item.height / factor;
        return (

            <View style={styles.container}>
                <View>
                    <Text>{item.uid}</Text>
                </View>
                <Image
                    source={{uri: item.secure_url}}
                    style={{
                        width,
                        height
                    }}
                />
                <View>
                    <Text>Likes</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Publicacion;
