/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './Redux/store';

AppRegistry.registerComponent(appName, () => (
  <Provider store={store}>
    <App />
  </Provider>
));
