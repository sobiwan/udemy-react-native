import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import initFirebase from './firebase/initFirebase';

class App extends Component { 
  componentWillMount(){
    initFirebase();
  }

  render () {
      return (
        <Provider store={createStore(reducers)}>
          <View>
            <Text>Hello World</Text>
          </View>
        </Provider>
      );
  }
}


export default App; 
