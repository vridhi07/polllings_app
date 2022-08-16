import React ,{useState} from 'react'
import {registerRequest} from '../Redux/action/index'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

const Register = () => {

const [name,setName] = useState("");
const [password,setPassword] = useState("");
const [option, setOption] = useState("");  
const dispatch = useDispatch();

const registerState = useSelector((state) => state.SigninStatus)
console.log(registerState);

function submitForm(e)
{
 e.preventDefault();
 const userData = {
       name : name,
       password:password,
       role:option,
 }
 dispatch(registerRequest(userData))
}
// useEffect(() => {
//         if (registerState?.response?.toLowerCase() === "admin") {
//             history.push('/admindashboard');
//             localStorage.setItem("userType", registerState.response);
//         }  if (registerState?.response?.toLowerCase() === "guest") {
//             history.push('/guestdashboard');
//             localStorage.setItem("userType", registerState.response);
//         }
    
// })
    return (
        <div className="registration-form">
      
        <form>
            <div className="form-icon">
                <span><i className="icon icon-user"></i></span>
            </div>
            { 
                registerState.isSignIn ? (  <h6 style={{ color: "black" }}>
                                    Registration Successful. Please login to continue...
                                </h6>) : (
                                    <h6 className="text-danger">
                                    {registerState.error}
                                </h6> 
                                )
              
            }
            <div className="form-group">
                <input type="text" className="form-control item" id="username" placeholder="Username" value={name} onChange={((e)=>{setName(e.target.value)})}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control item" id="password" placeholder="Password"  value={password} onChange={((e)=>{setPassword(e.target.value)})}/>
            </div>
            <div className="form-group">
                {/* <input type="text" class="form-control item" id="email" placeholder="User Type"/> */}
                <select className="form-control item" id="ootions" placeholder="User Type" value={option} onChange={((e)=>{setOption(e.target.value)})}>
                    <option value="selecttype">Select User Type</option>
                    <option value="guest">Guest</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-block create-account" onClick={(e)=>{submitForm(e)}}>Create Account</button>
                <button type="button" className="btn btn-block create-account ml-4"><Link to="/" className="text-light">Login</Link></button>
            </div>
        </form>
        
    </div>
    )
}

export default Register
