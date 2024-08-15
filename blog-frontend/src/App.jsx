import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import NewPostForm from './components/NewPostForm';
import PostDetail from './components/PostDetail';

import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Register from './components/auth/Register';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

const App = () => {
  // const [posts, setPosts] = useState([]);

  // const addPost = (post) => {
  //   setPosts([...posts, { ...post, id: posts.length + 1 }]);
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/new-post" element={<NewPostForm />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;