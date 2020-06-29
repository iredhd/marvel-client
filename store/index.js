import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import createEncryptor from 'redux-persist-transform-encrypt'

import reducers from './reducers'

const encryptor = createEncryptor({
  secretKey: process.env.REACT_APP_SECRET_KEY
})

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptor]
}

const persistedReducer = persistReducer(persistConfig, combineReducers(reducers))

const store = createStore(persistedReducer, compose(applyMiddleware(
  thunk
)))

const persistor = persistStore(store)

export { store, persistor }
