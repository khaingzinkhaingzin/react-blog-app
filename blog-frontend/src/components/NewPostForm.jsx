import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import axiosInstance from '../axios';

const NewPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault(); 

        axiosInstance.post('/posts', { title, content })
            .then(response => {
                alert('Post created successfully');
                setTitle('');
                setContent('');
            })
            .catch(error => console.error(error));

        navigate('/');
    }

    return (
        <Box
            component='form'
            sx={{ '& .MuiTextField-root': { mb: 2 }, maxWidth: '500px', mx: 'auto' }}
            onSubmit={handleSubmit}>
            <TextField
                fullWidth
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            <TextField 
                fullWidth
                label="Content"
                multiline
                row={4}
                variant='outlined'
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button variant='contained' color='primary' type='submit'>
                Add Post
            </Button>
        </Box>
    );
};

export default NewPostForm;