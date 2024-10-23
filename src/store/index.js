import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {MMKV} from 'react-native-mmkv';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import baseApi from '../services/api';
import genreReducer from './genreSlice/index';

const rootReducer = combineReducers({
  genre: genreReducer.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const storage = new MMKV();

export const reduxStorage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    storage.getString(key);
    return Promise.resolve(true);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve(true);
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whiteList: ['genre'],
  autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export {persistor, store};
