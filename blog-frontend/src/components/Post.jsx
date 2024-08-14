import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Post = ({ post }) => (
    <Card sx={{ marginBottom: 2 }}>
        <CardContent>
            <Typography variant='h5' component='div'>
                {post.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                {post.content.slice(0, 100)}...
            </Typography>
            <Button size='small' component={Link} to={`/post/${post.id}`}>Read More</Button>
        </CardContent>
    </Card>
);

export default Post;    