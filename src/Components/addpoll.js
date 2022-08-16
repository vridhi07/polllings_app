import React,{useState} from 'react'
import Navbar from './navbar';
import {addpollRequest} from '../Redux/action/index';

import { useDispatch ,useSelector } from 'react-redux';

const Addpoll = () => {
    const [title, settitle] = useState("");
    const [options, setoptions] = useState([]);
    const dispatch = useDispatch();
    
    const addoptions = () => {
        setoptions((prevstate)=> [...prevstate,'']);
    }

    const handleSubmit = (event,i) => {
          const data = [...options];
          data[i] = event.target.value;
          setoptions(data);
    }

    const removeOption = (i) =>{
        console.log(i)
        const data = [...options];
        data.splice(i,1);
        setoptions(data)

    }
    const submitpoll = () => {
        let poll = {
            question : title,
            options :options
        }
        dispatch(addpollRequest(poll));
    }
    return (
       
        <div>
             <Navbar/>
            <div className="container">
                <div className="row">
                    <h2 className="mt-4 mb-4">Add Poll</h2>
                    <div className="form-group w-50">
                        <label className="mb-2 fw-bold">Add Questions</label>
                        <input type="text" className="form-control" value={title} id="addquestion" onChange={(event)=>{settitle(event.target.value)}} placeholder="Enter Questions"/>
                    </div>
                </div>
                {
                    title ? 
                    <button className="btn btn-primary mt-4 mb-4" onClick={()=>{addoptions()}}>Add Options</button>
                    : null
                }

                { 
                options.map((option,i)=>{
                     return(
                         <>
                         <div className="form-group w-50">
                            <label className="mb-2 fw-bold">Options {i+1}</label>
                            <input type="text" className="form-control" id="addoptions" placeholder="Enter Questions"  value={options[i]}  onChange={(event) => handleSubmit(event, i)}/>
                        </div> 
                        <button onClick={()=>{removeOption(i)}} className="btn btn-danger">Delete</button>
                         </>
                        )
                })
                }
                {
                    options.length ? (
                        <button onClick={()=>{submitpoll()}} className="btn btn-success m-4">Submit Poll</button>
                    ):null
                }
            </div>
        </div>
    )
}

export default Addpoll
