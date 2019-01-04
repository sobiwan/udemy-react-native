import React, {
  Component
} from 'react';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware
} from 'redux';
import reducers from './state/reducers';
import initFirebase from './firebase/initFirebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';
import ReduxThunk from 'redux-thunk';

class App extends Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    const store = createStore(
      reducers,
      {},
      applyMiddleware(ReduxThunk)
    );

    return (
      <Provider store={store}>
        <Header headerText="Employer Portal" />
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
