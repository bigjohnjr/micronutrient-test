import { combineReducers } from 'redux';

const activeResult = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_RESULT':
      return action.result;
    default:
      return state;
  }
};

const reducers = combineReducers({
  activeResult,
});

export default reducers;
