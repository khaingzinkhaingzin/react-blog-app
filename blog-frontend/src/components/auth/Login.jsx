import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

// import {getCsrfToken, loginUser, getUser} from './auth';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const login = async (e) => {
        e.preventDefault();
        
        await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
            withCredentials: true,
        });

        await axios.post('http://localhost:8000/api/login', credentials,
            {
                headers: {
                    Accept: 'application/json'
                },
                withCredentials: true,
                withXSRFToken: true,
            }
        )
        .then(() => {
            navigate('/');
        })
        .catch((error) => {
            setError(error.message);
        });
        
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Login</Typography>
            {error ? <Typography sx={{margin: 1, color: 'red'}}>Login failed: credentials is not defined</Typography> : ''}
            <form onSubmit={login}>
                <TextField 
                    label="Email"
                    name="email"
                    margin="normal"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField 
                    label="Password"
                    name="password"
                    type="password"
                    margin="normal"
                    fullWidth
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{px: 10, my: 2}}
                >
                    Login
                </Button>
            </form>
            Don't have an account yet? <Typography component={Link} to="/register" sx={{color: 'blue'}}>Create an account</Typography>
        </Container>
    );
};

export default Login;