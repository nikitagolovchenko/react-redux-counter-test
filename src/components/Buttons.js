import React from 'react';
import {useDispatch} from 'react-redux';
import { decrease, increase, reset } from '../actions/counterAction';

export default function Buttons() {
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(increase());
  }

  const decreaseHandler = () => {
    dispatch(decrease());
  }

  const resetHandler = () => {
    dispatch(reset());
  }

  return (
    <div className='btn-group mb-3'>
      <button className='btn btn-primary' type='button' onClick={decreaseHandler}>
        - 1
      </button>
      <button className='btn btn-primary' type='button' onClick={resetHandler}>
        Сбросить
      </button>
      <button className='btn btn-primary' type='button' onClick={increaseHandler}>
        + 1
      </button>
    </div>
  );
}
