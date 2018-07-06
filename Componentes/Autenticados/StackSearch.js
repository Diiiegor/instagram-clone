import {StackNavigator} from 'react-navigation';
import Search from "./Search";
import Publicacion from "./Publicacion";
import Comentarios from "./Comentarios";
import Autor from "./Profile";

const StackSearch=StackNavigator({
    Search: {
        screen:Search
    },
    Publicacion: {
        screen: Publicacion
    },
    Comentarios: {
        screen:Comentarios
    },
    Autor:{
        screen:Autor
    }
});

export {StackSearch};
