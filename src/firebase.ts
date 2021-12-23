import * as firebase from 'firebase'
import config from './config'

const firebaseConfig = Object.freeze({
  apiKey: config.REACT_NATIVE_API_KEY as string || '',
  authDomain: config.REACT_NATIVE_AUTH_DOMAIN as string || '',
  projectId: config.REACT_NATIVE_PROJECT_ID as string || '',
  storageBucket: config.REACT_NATIVE_STORAGE_BUCKET as string || '',
  messagingSenderId: config.REACT_NATIVE_MESSAGING_SENDER_ID as string || '',
  appId: config.REACT_NATIVE_APP_ID as string || ''
});

let app;

if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

export const auth = firebase.auth()