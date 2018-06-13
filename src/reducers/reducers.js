import { combineReducers } from 'redux';

import {
  RECEIVE_VITAMINS
} from '../actions/actions';

function micros(state = [], action) {
  switch(action.type) {
    case RECEIVE_VITAMINS:
    const vitaminObject = {}
    Object.keys(action.payload).forEach(vitamin => {
      vitaminObject[vitamin] = action.payload[vitamin]
    })
      return vitaminObject
    default:
      return state;
  }
}

const activeResultView = (state = 'Intro', action) => {
  switch (action.type) {
    case 'UPDATE_RESULT_VIEW':
      return action.view;
    default:
      return state;
  }
};

const reducers = combineReducers({
  micros,
  activeResultView,
});

export default reducers;
