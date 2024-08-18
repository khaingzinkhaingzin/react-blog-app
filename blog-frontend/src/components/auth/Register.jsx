import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axiosInstance from '../../axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        axiosInstance.post('/register', formData)
            .then(response => {
                console.log(response.data);
                alert('Registration successful!');
                formData.name = '';
                formData.email = '';
                formData.password = '';
                formData.password_confirmation = '';
            })
            .catch(error => console.error(error));
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Register</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                />

                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                />

                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                />

                <TextField
                    label="Confirm Password"
                    name="password_confirmation"
                    type="password"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                />

                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </Container>
    );
}

export default Register;