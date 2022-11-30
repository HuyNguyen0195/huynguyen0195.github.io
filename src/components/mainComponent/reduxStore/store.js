
import { createStore } from 'redux';
import { carReducer } from './reducer';

export const store = createStore(carReducer)
