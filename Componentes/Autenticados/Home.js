import React from 'react';
import {StyleSheet, Text, View, Button, FlatList, Image, Dimensions} from 'react-native';
import connect from "react-redux/es/connect/connect";
import {actionDescargarPublicaciones} from "../../Store/ACCIONES";
import Publicacion from "./Publicacion";

//export default
class Home extends React.Component {

    componentDidMount() {
        this.props.descargarPublicaciones();
    }

    render() {
        const {publicacionesDescargadas,autoresDescargados} = this.props;
        const {navigation} = this.props;
        return (
            <View>
                <FlatList
                    data={publicacionesDescargadas}
                    renderItem={({item,index}) =>
                        <Publicacion autor={autoresDescargados[index]} item={item}/>
                    }
                    ItemSeparatorComponent={()=><View style={styles.separador}></View>}
                />
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
    separador:{
        borderWidth: 1,
        borderColor:'lightgray'
    }
});

const mapStateToProps = (state) => {
    return {
        publicacionesDescargadas: state.reducerPublicacionesDescargadas,
        autoresDescargados: state.reducerAutoresDescargados,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        descargarPublicaciones: () => {
            dispatch(actionDescargarPublicaciones())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

