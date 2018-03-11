import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component { 
  state = {loggedIn: null};

  componentWillMount() { 
    firebase.initializeApp({
      apiKey: 'AIzaSyBnJqHgkbcIMjrJ2efH3vT9kukgLESIYoM',
      authDomain: 'authentication-cc2ce.firebaseapp.com',
      databaseURL: 'https://authentication-cc2ce.firebaseio.com',
      projectId: 'authentication-cc2ce',
      storageBucket: 'authentication-cc2ce.appspot.com',
      messagingSenderId: '1034019546322',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    }); 
  }

renderContent(){
  switch(this.state.loggedIn){
    case true:
      console.log('HALO');
      return <Button onPress={() => firebase.auth().signOut()}>Sing out </Button>;
    case false:
      console.log('TEST');
      return <LoginForm />; 
    default:
    return <Spinner size="large"/> ;
  }
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
