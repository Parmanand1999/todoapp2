import React, { useState } from 'react';

function Todopage1({ onClick1, addTodo }) {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)

    function addbtn() {

        addTodo({
            title: value1,
            description: value2,
            completed:false,
            tags: ""
        })
    }
    return (
        <>

            <div className='bgcolor'>
                <form className='container' onSubmit={(e)=>(e.preventDefault())}>
                    <div className='line1'>
                        <button className='btncancel' onClick={onClick1}>Cancel</button>
                        <button className='btnedit' onClick={addbtn}   >Add</button>
                    </div>
                    <div className='title'>
                        <h5>Title</h5>
                        <div className='ptext1'>
                            <input id="text1" rows="1" cols="2" placeholder="add a title" value={value1} onChange={(e) => setValue1(e.target.value)} />
                        </div>
                    </div>
                    <div className='description'>
                        <h5>Description</h5>
                        <div className='ptext2'>
                            <textarea id="text2" rows="1" placeholder="add a title" onChange={(e) => setValue2(e.target.value)} ></textarea>
                        </div>

                    </div>
                    <div className='tags'>
                        <h5>Tags</h5>
                        <div className='buttons'>
                            <div className={hover1 ? 'btn11' : "btn1"} onClick={() => setHover1((s) => !s)} ><span className="dot"> </span><button>work</button></div>

                            <div className={hover2 ? 'btn22' : "btn2"} onClick={() => setHover2((s) => !s)} ><span className="dot1"> </span><button>study</button></div>

                            <div className={hover3 ? 'btn33' : "btn3"} onClick={() => setHover3((s) => !s)} ><span className="dot2"> </span><button>entertainment</button></div>

                            <div className={hover4 ? 'btn44' : "btn4"} onClick={() => setHover4((s) => !s)} ><span className="dot3"> </span><button>family</button></div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Todopage1;

