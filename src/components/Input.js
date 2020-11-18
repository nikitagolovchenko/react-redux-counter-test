import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchDecrease, fetchIncrease } from '../actions/counterAction';

export default function Input() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    if(!isNaN(e.target.value)) {
      setValue(e.target.value);
    }
  }

  const increase = () => {
    if (value !== '') {
      dispatch(fetchIncrease(+value));
      setValue('');
    }
  }

  const decrease = () => {
    if (value !== '') {
      dispatch(fetchDecrease(+value));
      setValue('');
    }
  }

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button" onClick={decrease}>Decrease</button>
        <button className="btn btn-outline-secondary" type="button" onClick={increase}>Increase</button>
      </div>
      <input type="text" className="form-control" onChange={changeHandler} value={value}/>
    </div>
  )
}
