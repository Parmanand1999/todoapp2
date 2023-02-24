import React from 'react'
import './todopage2.css';
import Todopage1 from './Todopage1';
import { useState } from 'react';
function Todopage2() {
    const [done, setDone] = useState(false)
    const [popup, setPopup] = useState(false)
    const [allTodos, setAllTodos] = useState([]);
    const [addelete, setAddelete] = useState(false)
    
    function handleDone() {
        setDone(pre => !pre)
    }
    function handalpopup() {
        setPopup(pre => !pre)
    }
    const todoHandler = (obj) => {
        function setTodo(p) {
            p.push(obj);
            return p;
        }
        setAllTodos(setTodo)
        setPopup(false)
    }

    function taskDone(id) {
        setAllTodos(p => {
            p[id].completed = !(p[id].completed);
            // console.log(p[id].completed)
            console.log(p)
            return p;
        })
    }

    console.log(allTodos)
    function adddelethandler() {
        setAddelete(pre => !pre)
    }

    return (
        <>

            {popup ? (<Todopage1 onClick1={handalpopup} addTodo={todoHandler} />) : !(<Todopage1 />)}

            <div className='todoapp2'>
                <div className='header d-flex justify-content-between '>
                    <h2 className='todo  mx-5 mt-5'>todo</h2>
                    <h2 className='pluse mx-5 mt-5' onClick={handalpopup}>+</h2>
                </div>
                <div className='page2 d-flex' >
                    <div className='header'>

                        <div className='dotbutton  align-items-start mx-5 mt-3 d-flex flex-column '>
                            <button className='workbtn mt-3'><span className="work "></span>work</button>
                            <button className='studybtn mt-3'><span className="study"></span>study</button>
                            <button className='entbtn mt-3'><span className="entertainment"></span>entertainment</button>
                            <button className='fambtn mt-3'><span className="family"></span>family</button>
                            <div className='chekbox d-flex mt-4'>
                                <input className="form-check-input  " type="checkbox" onClick={handleDone} value="" id="flexCheckDisabled" />
                                {done ? (<label className="form-check-label" htmlFor="flexCheckDisabled"> Hide Done Task</label>)
                                    : (<label className="form-check-label" htmlFor="flexCheckDisabled">
                                        <b> Hide Done Task</b>
                                    </label>)}
                            </div>

                        </div>
                    </div>
                    <div>
                        {allTodos.map((item, i) => (
                            <div className='divboxmain ' key={i}>
                                <div className='ghf d-flex'>
                                    <div className='divbox1'>
                                        <div className='divbox1line1 d-flex justify-content-between mt-3 mx-2'>
                                            {item.completed === true ? (<h4><del>{item.title}</del></h4>) : (<h4 >{item.title}</h4>)}
                                            <div>
                                                <div><h4 className='box1dot'  onClick={adddelethandler} >...</h4></div>
                                                {addelete ? (<div className='d-flex flex-column'>
                                                    <button className='b'>Edit</button>
                                                    <button className='b'>Delete</button></div>) : null}
                                            </div>
                                        </div>
                                        {item.completed === true ? (<p><del>{item.description}</del></p>) : (<p>{item.description}</p>)}
                                        <div className='divbox1padding d-flex justify-content-between'>
                                            <div className='dotp d-flex mb-3 mx-2 justify-content-around '>
                                                <span className="study "></span>
                                                <span className="entertainment "></span>
                                                <span className="work "></span>
                                            </div>
                                            <div className='mx-3'>
                                                <input type="checkbox" onClick={() => taskDone(i)} id="flexCheckDisabled" />
                                                <label>Done</label>
                                            </div>
                                        </div>
                                    </div >
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todopage2;