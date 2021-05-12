import { createStore, combineReducers } from 'redux';
import reducerTicker from "./ticker/reducer";

const rootReducer = combineReducers({
  ticket: reducerTicker
});

const store = createStore(
    rootReducer,
);

export default store
