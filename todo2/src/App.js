import React, { useState } from 'react';
import './App.css';
function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  function changeVal1(e) {
    setValue1(e.target.value)

  }
  function changeValu2(e) {
    setValue2(e.target.value)

  }
  function handler(e) {
    e.preventDefault();
    console.log(value1)
    console.log(value2)
  }
  return (
    <>
      <form className='container' onSubmit={handler}>
        <div className='line1'>
          <button className='btncancel'>Cancel</button>
          <button className='btnedit' >Add</button>
        </div>
        <div className='title'>
          <h3>Title</h3>
          <div className='ptext1'>
            <input id="text1" rows="1" cols="2" placeholder="add a title" onChange={changeVal1} />
          </div>
        </div>
        <div className='description'>
          <h3>Description</h3>

          <div className='ptext2'>
            <textarea id="text2" rows="1" placeholder="add a title" onChange={changeValu2} ></textarea>
          </div>

        </div>
        <div className='tags'>
          <h3>Tags</h3>
          <div className='buttons'>
            <span className="dot"> </span>  <button>work</button>
            <span className="dot1"> </span><button>study</button>
            <span className="dot2"> </span><button>entertainment</button>
            <span className="dot3"> </span><button>family</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;

