import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import axiosInstance from '../axios';

const PostDetail = () => {
    const { id } = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        axiosInstance.get(`/posts/${id}`)
            .then(response => {
                console.log(response);
                setPost(response.data)
                
            })
            .catch(error => console.error(error));
    });

    if (!post) {
        return <Typography variant="h6">Post not found</Typography>;
    }

    return (
        <Card>
            <CardContent>
                <Typography variant='h5' component='div'>
                    {post.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {post.content}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PostDetail;