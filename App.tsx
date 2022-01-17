import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import * as Facebook from 'expo-facebook'
import config from './src/config'
import { StackNavigation } from './src/navigation/stackNavigation';
import * as Sentry from 'sentry-expo'

Sentry.init({
  dsn: "https://ee651ffee79a4b038f0cd87a13dbc49d@o1093126.ingest.sentry.io/6112253",
  enableInExpoDevelopment: true,
  debug: true
})

Facebook.initializeAsync({
  appId: config.REACT_NATIVE_FACEBOOK_APP_ID,
  appName: 'EXPO-BUDGET-TEST'
})

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
    
  );
} 