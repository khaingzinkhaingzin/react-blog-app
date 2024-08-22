import React from 'react';

import { useNavigate } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom';
import axiosInstance from '../axios';

const Header = ({ user }) => {
    let navigate = new useNavigate();
    let userName = user ? user.name : '';

    const logout = async () => {
        await axiosInstance.post('/logout')
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                
            });
    };
    
    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    My Blog
                </Typography>
                <Button color='inherit' component={Link} to="/">
                    Home
                </Button>
                <Button color='inherit' component={Link} to="/new-post">
                    New Post
                </Button>
                
                <Box sx={{marginLeft: 5}}>
                    {
                        userName
                        ?
                        userName.toUpperCase() 
                        :
                        <Button color='inherit' component={Link} to="/login"><AccountCircleIcon /></Button>
                    }
                    {
                        userName
                        ?
                        <Button color='inherit' onClick={logout}> <LogoutIcon /> </Button>
                        :
                        ''
                    }
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;