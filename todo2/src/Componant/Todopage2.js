import React from 'react'
import './todopage2.css';
import Todopage1 from './Todopage1';
import { useState } from 'react';
function Todopage2() {
    const [done, setDone] = useState(false)
    const [done2, setDone2] = useState(true)
    const [popup, setPopup] = useState(false)

    function handleDone() {
        setDone(pre => !pre) // not pre (true)
    }
    function handlerdone2() {
        setDone2(pre => !pre)
    }
    function handalpopup() {

        setPopup(pre => !pre)

    }
    return (
        <>
            {popup ? (<Todopage1 onClick={handalpopup} />) : false}

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
                                <input class="form-check-input  " type="checkbox" onClick={handleDone} value="" id="flexCheckDisabled" />
                                {done ? (<label className="form-check-label" htmlFor="flexCheckDisabled"> Hide Done Task</label>)
                                    : (<label className="form-check-label" htmlFor="flexCheckDisabled">
                                        <b> Hide Done Task</b>
                                    </label>)}
                            </div>

                        </div>
                    </div>
                    <div className='divboxmain '>
                        <div className='d-flex'>
                            <div className='divbox1'>
                                <div className='divbox1line1 d-flex justify-content-between mt-3 mx-2'>
                                    <h6>The first task title</h6><h4 className='box1dot '>...</h4>
                                </div>
                                <p>Lorem hnjbsd dscc vfv kjdck shdcuj ehfi weh hcuwhde jchwsjd </p>
                                <div className='divbox1padding d-flex justify-content-between'>
                                    <div className='dotp d-flex mb-3 mx-2 justify-content-around '>
                                        <span className="study "></span>
                                        <span className="entertainment "></span>
                                        <span className="work "></span>
                                    </div>
                                    <div className='mx-3'>
                                        <input type="checkbox" id="flexCheckDisabled" />
                                        <label>Done</label>
                                    </div>
                                </div>
                            </div >

                            <div className='divbox2'>
                                <div className='divbox2line1 d-flex justify-content-between mt-3 mx-2'>
                                    <h6>The second task title</h6><h6 className='box1dot '>...</h6>
                                </div>
                                <p>Lorem hnjbsd dscc vfv kjdck shdcuj ehfi weh hcuwhde jchwsjd hdcb dhdhj ydhcue dhjduwed hwejdiw ksdjckje dhebeew djehdbwjd  </p>
                                <div className='divbox2padd d-flex justify-content-end'>
                                    <div className='mx-2'>
                                        <input type="checkbox" id="flexCheckDisabled" />
                                        <label >Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='divbox3'>
                            <div className='divbox3line1 d-flex justify-content-between mt-3 mx-2'>
                                {done2 ? (<h6>The third task title</h6>) : (<h6><del>The third task title</del></h6>)}<h4 className='box1dot '>...</h4>
                            </div>
                            <p>Lorem hnjbsd dscc vfv kjdck shdcuj ehfi weh hcuwhde jchwsjd </p>
                            <div className='divbox3padd d-flex justify-content-between'>
                                <div className='dotp2 d-flex mb-3 mx-2 justify-content-around '>
                                    <span className="entertainment "></span>
                                    <span className="work "></span>
                                </div>
                                <div className='mx-2'>
                                    <input type="checkbox" id="flexCheckDisabled" onClick={handlerdone2} />
                                    <label >Done</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Todopage2;