import React, {Component} from 'C:/Users/Admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
// import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../Images/logo.png';
// import Font, { Fonts } from '../../utlils/fonts';
import {Font} from 'C:/Users/Admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/expo';
import PoiretOneRegular from '../../assets/fonts/PoiretOne-Regular.ttf'

export default class Logo extends Component {

constructor(props){
  super(props);
  this.state={
    isLoad:false
  }
}
 componentDidMount(){
  setTimeout(()=>{
     Font.loadAsync({
      PoiretOneRegular
  //  'Prata':require
  }).then(()=>{
    // console.log(Font.processFontFamily);
this.setState({
  isLoad:true
})  })
alert("ok"+this.state.isLoad)

},0)
}

  render() {
   
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
        <Text  style={[styles.text,this.state.isLoad?{fontFamily:'AmericanTypewriter-Light'}:{} ] }>Korefud</Text>
        <Text  style={styles.textCap}>Delicous food and cool drinking</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: this.isLoad?40:100,
    backgroundColor: 'transparent',
    marginTop: 20,
    fontFamily:"AvenirNext-Heavy"
  },
  textCap:{
    color: 'gray',
    fontWeight: 'bold',
    fontFamily:'AvenirNext-Heavy',
    fontSize: 20,
    
    backgroundColor: 'transparent',
    
  }
});
