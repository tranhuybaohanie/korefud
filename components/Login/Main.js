import React, { Component } from 'C:/Users/Admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import secondScreen from '../Home/SecondScreen';

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
				<Scene key="secondScreen"
	          component={secondScreen}
//animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	       
	      </Scene>
	    </Router>
	  );
	}
}