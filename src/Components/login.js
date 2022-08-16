import React,{useState,useEffect} from 'react'
import {Link,useHistory} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {loginRequest} from '../Redux/action/index'

const Login = () => {
    const[name,setName] = useState("");
    const[password,setPassword] = useState("");
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.LoginStatus)
   
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        var useCredentials = {
            name : name,
            password : password
        }
        dispatch(loginRequest(useCredentials));
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            if (loginState?.response?.toLowerCase() === "admin") {
                history.push('/admindashboard');
                localStorage.setItem("userType", loginState.response);
            } else if (loginState?.response?.toLowerCase() === "guest") {
                history.push('/guestdashboard');
                localStorage.setItem("userType", loginState.response);
            } else {
                localStorage.clear();
                history.push('/');
            }
        }
    })
    // const submitForm = () => {
    //     event.preventDefault();
    // }
    return (
        <div className="container-fluid vh-100 mt-5">
        <div className="mt-5">
            <div className="rounded d-flex justify-content-center">
                <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                    <div className="text-center">
                        <h3 className="text-primary">Sign In</h3>
                        <h4 className="text-danger">{loginState.error}</h4>
                    </div>
                    <form>
                        <div className="p-4">
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-primary"><i
                                        className="bi bi-person-plus-fill text-white"></i></span>
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Username"
                                value={name}
                                onChange={(e)=>{setName(e.target.value)}}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-primary"><i
                                        className="bi bi-key-fill text-white"></i></span>
                                <input 
                                type="password" 
                                className="form-control" 
                                placeholder="password"
                                value={password}
                                onChange= {(e)=>{setPassword(e.target.value)}}
                                />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">
                                    Remember Me
                                </label>
                            </div>
                            <button className="btn btn-primary text-center mt-2" type="submit" onClick={(e)=>{handleSubmit(e)}}>
                                Login
                            </button>
                            <p className="text-center mt-5">Don't have an account?
                                 <Link to="/register" className="text-primary">Sign Up</Link>
                            </p>
                            <p className="text-center text-primary">Forgot your password?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Login
