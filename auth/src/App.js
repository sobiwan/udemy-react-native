import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component { 

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCdNX_KUsz_5lK7BRNjhZnkLBQL_ciiMxc",
            authDomain: "auth-384b4.firebaseapp.com",
            databaseURL: "https://auth-384b4.firebaseio.com",
            projectId: "auth-384b4",
            storageBucket: "auth-384b4.appspot.com",
            messagingSenderId: "1034747444918"
          });
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App; 
