import {TabNavigator}  from 'react-navigation';
import Follow from "./Follow";

const TabFollow=TabNavigator(
    {
        Follow:{
            screen:Follow
        },
        Followers:{
            screen: Follow
        }
    },
    {
        navigationOptions:{
            header:null
        }
    }
);

export {TabFollow};