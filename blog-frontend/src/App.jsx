import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axiosInstance from './axios';

import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import NewPostForm from './components/NewPostForm';
import PostDetail from './components/PostDetail';

import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

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
  const [user, setUser] = useState(null);

  useEffect(() => {

    // const user = axiosInstance.get('/user')
    //   .then(response => setUser(response.data))
    //   .catch(() => setUser(null));
    // console.log("user = " , user);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/new-post" element={<NewPostForm />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;