import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import arrowImg from '../Images/left-arrow.png';
import { black } from 'ansi-colors';

const SIZE = 80;

export default class Header extends Component {

  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

  
    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

//   static navigationOptions =({navigation})=>{
//     let tabBarLabel='Cart';
//     let tabBarIcon=()=>{
//       <Image source={require('../Images/left-arrow.png')} style={{width:26, height:26,tintColor:'white'}}/>
//     }
//     return {tabBarLabel,tabBarIcon}
//   }
  static navigationOptions = {
    activeTintColor: '#81B247',
    tabBarIcon: () => (
      
      <Image
        source={require('../Images/bell.png')}
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
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    return (
      <View style={styles.container}>
      
      
      <Text>This is info</Text>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    margin: 5,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'green'
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
