import { combineReducers } from 'redux';

import {
  RECEIVE_VITAMINS,
} from '../actions/actions';

const initialState = {
  vitamins: [],
}

function vitaminReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_VITAMINS:
      return {
        ...state,
        vitamins: action.payload
      };
    default:
      return state;
  }
}


const reducers = combineReducers({
  vitamins: vitaminReducer,
});

export default reducers;
