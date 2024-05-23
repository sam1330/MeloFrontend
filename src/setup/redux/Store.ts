import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, rootSaga } from './RootReducer';
import { persistStore } from 'redux-persist';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store with reducers and middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: false, // Disable thunk since we're using saga
  }).concat(sagaMiddleware),
});

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Persistor configuration
export const persistor = persistStore(store);

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
