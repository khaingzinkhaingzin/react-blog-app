import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => (
    <Box 
        sx={{ bgcolor: 'primary.main', p: 2, textAlign: 'center', mt: 5 }}>
        <Typography variant='body2' color="white">
            © 2024 My Blog. All rights reserved.
        </Typography>
    </Box>
);

export default Footer;