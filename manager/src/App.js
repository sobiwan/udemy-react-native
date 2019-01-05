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
import ReduxThunk from 'redux-thunk';
import Router from './Router';

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
        <Router />
      </Provider>
    );
  }
}

export default App;
