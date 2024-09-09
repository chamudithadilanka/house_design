<<<<<<< HEAD
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import {persistReducer} from 'redux-persist';
import { version } from 'mongoose';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({user: userReducer})

const persistConfig = {
    key: 'root',
    storage,
    version:1,
    
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
=======
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: { user: userReducer},
>>>>>>> 9763cf008be67dbb49b2473639407388ecabb54f
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
<<<<<<< HEAD
export const persistor = persistStore(store);
=======
>>>>>>> 9763cf008be67dbb49b2473639407388ecabb54f
