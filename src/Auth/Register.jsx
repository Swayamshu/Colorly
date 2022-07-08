import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import NoAuthRequired from '../middleware/noAuthRequired';

const Register = () => {
    let navigate = useNavigate();
    const { setToken } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const validFieldValues = (name, email, password) => {
        if (name === "" || email === "" || password === "")
            return false;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            return false;
        return true;
    }

    const register = () => {
        if (validFieldValues(name, email, password)) {
            const registerData = {
                name: name,
                email: email,
                password: password
            }

            axios.post("/auth/register", registerData)
                .then((res) => {
                    setToken(res.data.token);
                    toast.success("Successfully registered...")
                    navigate("/");
                })
                .catch((err) => {
                    toast.error(err.response.data);
                });
        } else {
            toast.error("Invalid input fields!");
        }
    }
    
    return (
        <NoAuthRequired>
            <div>
                <h1>Register</h1>
                <input 
                    type="text"
                    placeholder="name"
                    onChange={handleNameChange}
                    value={name}
                />
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
                    onClick={register}
                >
                    Register
                </button>

                <div>Already registered? <a onClick={() => navigate("/login")}>Login</a></div>
            </div>
        </NoAuthRequired>
 )
}

export default Register
