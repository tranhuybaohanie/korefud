import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  FlatList
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import arrowImg from '../Images/left-arrow.png';
import { black } from 'ansi-colors';
import FoodList from '../../Mock/FoodList';
import FoodItem from './FoodItem'
import Header from '../Shared/Header';
import {GetAllFood} from '../../Networking/FetchApi'
const SIZE = 80;

export default class SecondScreen extends Component {

  constructor() {
    super();

    this.state = {
      isLoading: false,
      foodListFromServer:[]
    };

  
    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }


componentDidMount(){

}
refreshDataFromServer =()=>{
  GetAllFood('hotel','GET', null).then((res)=>{

   alert(res.data);
   
});
  // GetAllFood().then((foods)=>{
  
  //   this.setState({
  //     foodListFromServer:foods
  //   }).catch((e)=>{
  //     alert("fail load foods"+e)
  //   })
  // })
}

  static navigationOptions = {
    activeTintColor:'blue',
    tabBarIcon: ({tintColor,focused}) => (

      <Image
        source={require('../Images/menu.png')}
        style={{width:26, height:26,
        tintColor:focused ? 'green' : 'gray',
        }}
      
      />
    )
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.quad,
    }).start();

    setTimeout(() => {
      Actions.pop();
    }, 500);
  }

  render() {
    this.refreshDataFromServer();
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    return (

      <View style={styles.container}>
    <Header></Header>
      <FlatList
      data ={this.state.foodListFromServer}
      keyExtractor={(item, index) => item.key}
      renderItem ={(item,index)=>{
        console.log(item)
        return (<FoodItem key={index} item={item} />)
      }}
      ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor:'#b5b7bd'
    //alignItems: 'flex-end',
    //justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    marginTop: -SIZE,
    borderRadius: 100,
    backgroundColor: '#F035E0',
  },
  image: {
    width: 24,
    height: 24,
  },
});
