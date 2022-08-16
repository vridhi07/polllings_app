import React , {useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {listpollRequest,deletepollRequest} from '../Redux/action/index';
import Deletepoll from './deletepoll';


const Listpoll = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const pollListData = useSelector((state) => state.PollList)
    const [title , setTitle] = useState();
    const [showDeletePoll, setshowDeletePoll] = useState(false);
    const [deletePollid, setdeletePollid] = useState();
    console.log(pollListData);
    
    useEffect(()=>{
        dispatch(listpollRequest());
    },[])

    const deletePollHandler = (title,id)=>{
        console.log(id);
        setTitle(title);
        setdeletePollid(id);
        setshowDeletePoll(true);
    }
    const deletePoll = () => {
        let poll_ID = {
            id: deletePollid
        }
        console.log(poll_ID);
        dispatch(deletepollRequest(poll_ID))
    }
    const editPoll=(id)=>{
        history.push(`/editpoll/${id}`);
    }


    return (
        <>
        {
            pollListData.isPollfetched === false ? (
                <center><div class="spinner-border" role="status"></div></center>
            ) : ''
        }
            {
                pollListData.userdata.map((val,index)=>{
                    return (
                    <>
                    <div className="card w-50 mt-5 mb-3"  id={index}>
                        <div className="card-body">
                            <h5 className="card-title">Title:{val.title}</h5>
                        </div>
                        {
                            val.options.map((option,index) => {
                                return(
                                    <>
                                        <ul className="list-group list-group-flush" id={index}>
                                            <li className="list-group-item">{option.option}  
                                            <label className="ml-3"> Votes: {option.vote}</label></li>
                                        </ul>
                                    </>
                                )
                               
                            })
                        }
                        <div class="card-body">
                            <a class="card-link"  onClick={()=>{editPoll(val._id)}}>edit poll</a>
                            <a class="card-link" onClick={()=>{deletePollHandler(val.title,val._id)}}>delete poll</a>
                        </div>
                    </div>
                    </>
                    )
                })
                
            }
            <Deletepoll
                        show={showDeletePoll}
                        pollTitle={title}
                        onCloseOption={() => setshowDeletePoll(false)}
                        onDeletePoll={() => {
                            deletePoll();
                            setshowDeletePoll(false);
                        }}
                    /> 
            
        </>
    )
}

export default Listpoll
