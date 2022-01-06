import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { StackNavigation } from './src/navigation/stackNavigation';
import * as Sentry from 'sentry-expo'

Sentry.init({
  dsn: "https://ee651ffee79a4b038f0cd87a13dbc49d@o1093126.ingest.sentry.io/6112253",
  enableInExpoDevelopment: true,
  debug: true
})

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
    
  );
}