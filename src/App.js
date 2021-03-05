import React from 'react';
import {increment,decrement} from './actions/action';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';

function App() {
  const dispatch=useDispatch();
  const count=useSelector(state=>state);
  return (
    <div className="App">
      <h1>counter {count} </h1>
     <button onClick={()=>dispatch(increment())}>+ </button> 
     <button onClick={()=>dispatch(decrement())}>- </button> 
    </div>
  );
}

export default App;
