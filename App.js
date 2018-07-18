import React from 'C:/Users/Admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login/Main'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Login></Login>
       
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
