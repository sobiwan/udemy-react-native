import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import { config } from './config';

export default () =>
  firebase.initializeApp(config);
