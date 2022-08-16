import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Navbar from './navbar';
const Editpoll = (props) => {

    const pollid = props.match.params.id;
    const pollListData = useSelector((state) => state.PollList.userdata);

    const listdata = pollListData.filter(val=> val._id === pollid);
    console.log(listdata);

    return (
        <>
          <Navbar/>
          <h2>Edit Poll</h2>
          {listdata.map(()=>{
            return (
              <>
                
              </>
            )
          })}

        </>
    )
}

export default Editpoll
