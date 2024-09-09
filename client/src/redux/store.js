import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

// Combine the reducers (more can be added here)
const rootReducer = combineReducers({
  user: userReducer,
});

// Persist configuration for Redux
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create the persistor to persist the store
export const persistor = persistStore(store);
