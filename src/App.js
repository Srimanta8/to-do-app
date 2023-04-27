import React, { useState } from 'react';
import './App.css';

function App() {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <div className="App">
      <h1>my todos</h1>
      <div className='todo-wrapper'>
        <div className='input'>
          <div className='input-item'>
            <label>title</label>
            <input type='text' placeholder='task title' />
          </div>
          <div className='input-item'>
            <label>description</label>
            <input type='text' placeholder='task description' />
          </div>
          <div className='input-item'>
            <button type='button' className='btn'>Add</button>
          </div>
        </div>


        <div className='btn-area'>
          <button className={`secondaryBtn ${isComplete === false && 'active'}`}
            onclick={() => setIsComplete(false)}>todo
          </button>
          <button className={`secondaryBtn ${isComplete === true && 'active'}`}
            onClick ={() => setIsComplete(true)} >completed
          </button>
        </div>

        <div className='todo-list'>

          <div className='todo-list-item'>
            <h3>task 1</h3>
            <p>desription</p>
          </div>

          <div>
            <AiOutlineDelete className='icon'/>
          </div>

        </div>

      </div >
    </div >
  );
}

export default App;
