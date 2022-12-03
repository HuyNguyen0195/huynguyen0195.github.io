
import { applyMiddleware, createStore } from 'redux';
import { carReducer } from './carReducer';
import thunk from 'redux-thunk';

export const store = createStore(
    carReducer,
    applyMiddleware(thunk)
    )
