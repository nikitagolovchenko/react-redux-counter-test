import React from 'react';
import {useSelector} from 'react-redux';
import Author from './components/Author';
import Buttons from './components/Buttons';
import Input from './components/Input';
import Value from './components/Value';

function App() {
  const value = useSelector(state => state.counter.value);

  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='container py-5'>
          <Buttons/>
          <Input/>
          <Value value={value}/>
          <Author />
        </div>
      </div>
    </div>
  );
}

export default App;
