import axios from '../utils/axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import NoAuthRequired from '../middleware/noAuthRequired';

const Login = () => {
    let navigate = useNavigate();
    const { setToken } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const validFieldValues = (email, password) => {
        if (email === "" || password === "")
            return false;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            return false;
        return true;
    }

    const login = () => {
        if (validFieldValues(email, password)) {
            const loginData = {
                email: email,
                password: password
            };

            axios.post("/auth/login", loginData)
                .then((res) => {
                    setToken(res.data.token);
                    toast.success("Successfully logged in...");
                    navigate("/");
                })
                .catch((err) => {
                    toast.error(err.response.data);
                })
        } else {
            toast.error("Invalid input field values!");
        }
    }

    return (
        <NoAuthRequired>
            <div>
                <h1>Login</h1>
                <input 
                    type="email"
                    placeholder="email"
                    onChange={handleEmailChange}
                    value={email}
                />
                <input 
                    type="password"
                    placeholder="password"
                    onChange={handlePasswordChange}
                    value={password}
                />
                <button 
                    type="submit"
                    onClick={login}
                >
                    Login
                </button>
                    
                <div>Not registered yet? <a onClick={() => navigate("/register")}>Register</a></div>
            </div>
        </NoAuthRequired>
    )
}

export default Login
