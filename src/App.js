import React from 'react'
import styled from 'styled-components'

import ScrollToTop from './hooks/ScrollToTop.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Community from './pages/Community.jsx'
import Post from './pages/Post.jsx'
import SavedPosts from './pages/SavedPosts.jsx'
import Profile from './pages/Profile.jsx'

export const DetailsContext = React.createContext(false);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
          <Routes>
            <Route path='/'>
                  <Route index element={<Signup />} />
                  <Route path='signin' element={<Signin />} />
                  <Route path='community' element={<Community />} />
                  <Route path='post' element={<Post />} />
                  <Route path='saves' element={<SavedPosts />} />
                  <Route path='profile' element={<Profile />} />
              </Route>
          </Routes>
  </BrowserRouter>
  );
}

export default App;
