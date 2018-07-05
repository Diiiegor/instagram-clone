import {createStackNavigator} from 'react-navigation';
import Home from './Home';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';


const StackHome=createStackNavigator(
     {
         Home:{
             screen:Home
         },
         Autor:{
             screen: Autor
         },
         Publicacion:{
             screen:Publicacion
         },
         Comentarios:{
             screen:Comentarios,
         }
     },
    {

    }
 );

StackHome.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    const { routes } = navigation.state;
    routes.forEach((route) => {
        if (route.routeName ==='Comentarios') {
            tabBarVisible = false;
        }
        else{
            tabBarVisible=true
        }
    });
    return {
        tabBarVisible,
    };
};

 export {StackHome};