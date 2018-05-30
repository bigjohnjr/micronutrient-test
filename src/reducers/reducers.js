import { combineReducers } from 'redux';

import {
  RECEIVE_VITAMINS, RECEIVE_MINERALS,
  RECEIVE_AMINOS, RECEIVE_ANTIOXIDANTS,
  RECEIVE_OMEGAS
} from '../actions/actions';

const initialState = {
  vitamins: [],
  minerals: [],
  aminos: [],
  antioxidants: [],
  omegas: [],
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

function mineralReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_MINERALS:
      return {
        ...state,
        minerals: action.payload
      };
    default:
      return state;
  }
}

function aminosReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_AMINOS:
      return {
        ...state,
        aminos: action.payload
      };
    default:
      return state;
  }
}

function antioxidantsReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_ANTIOXIDANTS:
      return {
        ...state,
        antioxidants: action.payload
      };
    default:
      return state;
  }
}

function omegasReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_OMEGAS:
      return {
        ...state,
        omegas: action.payload
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  vitamins: vitaminReducer,
  minerals: mineralReducer,
  aminos: aminosReducer,
  antioxidants: antioxidantsReducer,
  omegas: omegasReducer,
});

export default reducers;
