import React, {
  Component
} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './state/reducers';
import initFirebase from './firebase/initFirebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    return (
      <Provider
        store={createStore(reducers)}
      >
        <Header headerText="Employer Portal" />
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
