import React, { useEffect, useState, useTransition } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axiosInstance from '../axios';

import Post from './Post';

const PostList = () => {
    const [ posts, setPosts ] = useState([]);
    // const [ isPending, startTransition ] = useTransition();
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        // startTransition(() => {
        //     setTimeout(() => {
        //         axiosInstance.get('/posts')
        //             .then(response => {
        //                 setPosts(response.data);
        //             })
        //             .catch(error => console.error(error));
        //     }, 5000);
        // });

        setIsLoading(true);
        setTimeout(() => {
            axiosInstance.get('/posts')
                .then(response => {
                    setPosts(response.data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setIsLoading(false);
                });
        }, 1000);

    }, []);

    return (
        <section>
            { 
                isLoading 
                && 
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            }
            
            { posts.map(post => (
                <Post key={post.id} post={post} />
            )) }
        </section>
    );
};

export default PostList;