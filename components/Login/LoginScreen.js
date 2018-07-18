import React, {Component} from 'C:/Users/Admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
// import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit />
      </Wallpaper>
    );
  }
}
