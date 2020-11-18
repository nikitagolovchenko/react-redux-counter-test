import { DECREASE, FETCH_DECREASE, FETCH_INCREASE, INCREASE, RESET } from "../actions/counterAction";

const initialState = {
  value: 0
};

const counterReducer = (state = initialState, action) => {

  switch(action.type) {
    case INCREASE:
      return {...state, value: state.value + 1 };

    case DECREASE:
      return {...state, value: state.value - 1 };
      
    case RESET:
      return {...state, value: 0 };
      
    case FETCH_INCREASE:
      return {...state, value: state.value + action.payload };
      
    case FETCH_DECREASE:
      return {...state, value: state.value - action.payload };

    default:
      return state;
  }
}

export default counterReducer;