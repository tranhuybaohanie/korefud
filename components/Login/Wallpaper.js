import React, {Component} from 'C:/Users/Admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import PropTypes from 'C:/Users/Admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, Image,ImageBackground} from 'react-native';

import bgSrc from '../Images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
   // resizeMode: 'cover',
  },
});
