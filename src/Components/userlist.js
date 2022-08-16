import React , {useEffect} from 'react'
import Navbar from './navbar';
import { useSelector , useDispatch } from 'react-redux';
import {listuserRequest} from '../Redux/action/index';

const Userlist = () => {
    const dispatch = useDispatch();
    const userListData = useSelector((state) => state.UserList)
    console.log(userListData.isUserfetched);
    
    useEffect(()=>{
        dispatch(listuserRequest());
    },[])
    return (
        <>
        <Navbar/>
        {
            userListData.isUserfetched === false ? (
                <center><div class="spinner-border" role="status"></div></center>
            ) : ''
        }
       
       
        <div className="container">
        <div className="row col-md-6 col-md-offset-2 custyle">
       
            {
                userListData.userdata.map((val,index)=>{
                    console.log(val);
                    return (
                    <>
                    <table className="table table-striped custab">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                       <tbody>
                            <tr>
                                <td>{val._id}</td>
                                <td>{val.username}</td>
                            </tr>
                       </tbody>
                    </table>
                        </>
                    )
                })
            }
               
           
    </div>
</div>  
        </>
    )
}

export default Userlist
