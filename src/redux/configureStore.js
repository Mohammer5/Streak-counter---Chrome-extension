import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { localStorage } from 'redux-persist-webextension-storage'
//import { syncStorage } from 'redux-persist-webextension-storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
//import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'

import { rootReducer } from './rootReducer'

const persistConfig = {
  key: 'streak',
  stateReconciler: autoMergeLevel2,
  storage: localStorage,
  //storage: syncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = (initialState, context = {}) => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

  const thunkMiddleware = thunk.withExtraArgument(context)
  const middleware = composeEnhancer(applyMiddleware(thunkMiddleware))
  const store = createStore(persistedReducer, initialState, middleware)
  const persistor = persistStore(store)

  return { store, persistor }
}
