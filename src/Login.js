import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import './App.css'
import Axios from 'axios';

const api_url = "http://localhost:38080/"
var datap

async function getapi(api_url) {
    const response = await fetch(api_url)
    var data = await response.json()
    showdata(data)
}

function showdata(data) {
    console.log(data.data)
    datap = data.username
}

getapi(api_url)

function Login() {
    let navigate = useNavigate()

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const register = () => {
        Axios.post(api_url + "register", {
            username: usernameReg,
            password: passwordReg
        }).then((response) => {
            console.log(response)
        })
    }

    const login = () => {
        Axios.post(api_url + "login", {
            username: usernameLogin,
            password: passwordLogin
        }).then((response) => {
            if (response.data.count == 0) {
                alert("no use found")
            }
            if (response.data.count == 1) {
                navigate('/main')
            }
        })
    }

    return (

        <div className='body1'>
            <h1 className='header'>Login</h1><br></br>
            <h3>Login</h3>
            <input type={"text"} value={usernameLogin} placeholder="enter text" onChange={(e) => setUsernameLogin(e.target.value)} ></input><br></br><br></br>
            <input type={"text"} value={passwordLogin} placeholder="enter text" onChange={(e) => setPasswordLogin(e.target.value)}></input><br></br><br></br>
            <button onClick={(login)}>login</button><br></br><br></br>
            <h3>Register</h3>
            <input type={"text"} value={usernameReg} placeholder="enter text" onChange={(e) => setUsernameReg(e.target.value)} ></input><br></br><br></br>
            <input type={"text"} value={passwordReg} placeholder="enter text" onChange={(e) => setPasswordReg(e.target.value)}></input><br></br><br></br>
            <button className='' onClick={(register)}>register</button>

        </div>

    );
}

export default Login;