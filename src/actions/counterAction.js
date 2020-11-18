export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const RESET = 'RESET';
export const FETCH_INCREASE = 'FETCH_INCREASE';
export const FETCH_DECREASE = 'FETCH_DECREASE';

export const increase = () => {
  return {
    type: INCREASE,
  };
};

export const decrease = () => {
  return {
    type: DECREASE,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const fetchIncrease = (val) => {
  return dispatch => {
    setTimeout(function() {
      dispatch({
        type: FETCH_INCREASE,
        payload: val
      })
    }, 500);
  }
};

export const fetchDecrease = (val) => {
  return dispatch => {
    setTimeout(function() {
      dispatch({
        type: FETCH_DECREASE,
        payload: val
      })
    }, 500);
  }
};
