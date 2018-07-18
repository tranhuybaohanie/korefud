import { AppRegistry } from 'react-native';
// import App from './App';
import {TabNavigator} from 'react-navigation';
import SecondScreen from './components/Home/SecondScreen';
import Cart from './components/Cart/Cart';
import Notification from './components/Notification/Notification';
import Info from './components/Info/Info';

let routeConfigs = {
    Home: SecondScreen,
    Cart:Cart,
    Notification:Notification,
    Info:Info
}

let tabNavigatorConfigs={
    tabBarPosition:'bottom',
    animationEnabled:true,
    swipeEnabled:true,
 tabBarOptions:{
    //activeBackgroundColor: 'gray',
    //inactiveBackgroundColor: '#EFEFEF',
    activeTintColor: '#ffffff',
    //inactiveTintColor: 'white',
   
     activeTintColor:'green',
     
     labelStyle:{fontSize:13,
    },
    style:{
        backgroundColor:'white',
        padding:-10
    },
    showLabel:false
 },
 //order:[]
}

const App =TabNavigator(routeConfigs,tabNavigatorConfigs);

AppRegistry.registerComponent('main', () => App);
