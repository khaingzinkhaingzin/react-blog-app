import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

const Header = () => (
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
        </Toolbar>
    </AppBar>
);

export default Header;