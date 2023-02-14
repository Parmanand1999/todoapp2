import React, { useState } from 'react';
import './App.css';
const todo = {
  title: "",
  description: "",
  tags: []
}
function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  const [hover4, setHover4] = useState(false)

  function changeVal1(e) {
    setValue1(e.target.value)

  }
  function changeValu2(e) {
    setValue2(e.target.value)

  }
  function handler(e) {
    e.preventDefault();
    console.log(value2)
    console.log(todo)
  }
  function addbtn() {
    console.log(value1)
  }
  return (
    <>
      <form className='container' onSubmit={handler}>
        <div className='line1'>
          <button className='btncancel'>Cancel</button>
          <button className='btnedit' onClick={() => addbtn()} >Add</button>
        </div>
        <div className='title'>
          <h3>Title</h3>
          <div className='ptext1'>
            <input id="text1" rows="1" cols="2" placeholder="add a title" value={value1} onChange={changeVal1} />
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
            <div className={hover1 ? 'btn11' : "btn1"} onClick={() => setHover1((s) => !s)} ><span className="dot"> </span>  <button>work</button></div>

            <div className={hover2 ? 'btn22' : "btn2"} onClick={() => setHover2((s) => !s)} ><span className="dot1"> </span><button>study</button></div>

            <div className={hover3 ? 'btn33' : "btn3"} onClick={() => setHover3((s) => !s)} ><span className="dot2"> </span><button>entertainment</button></div>

            <div className={hover4 ? 'btn44' : "btn4"} onClick={() => setHover4((s) => !s)} ><span className="dot3"> </span><button>family</button></div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;

