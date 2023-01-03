import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducers/greetingsReducer';

const rootReducer = combineReducers({
  messages: greetingReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;