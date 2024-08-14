import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios';

import Post from './Post';

const PostList = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        axiosInstance.get('/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <section>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </section>
    );
};

export default PostList;