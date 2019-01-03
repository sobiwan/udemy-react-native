import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './state/reducers';
import initFirebase from './firebase/initFirebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    return (
      <Provider
        store={createStore(reducers)}
      >
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
