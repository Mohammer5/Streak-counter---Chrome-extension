import './App.scss'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'

import { Home } from './view/Home';
import { configureStore } from './redux/configureStore';

const { store, persistor } = configureStore()

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Home />
    </PersistGate>
  </Provider>
)

export default App
