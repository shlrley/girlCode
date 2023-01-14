import React from 'react'
import styled from 'styled-components'

import ScrollToTop from './hooks/ScrollToTop.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Community from './pages/Community.jsx'
import Post from './pages/Post.jsx'
import Upload from './pages/Upload.jsx'
import SavedPosts from './pages/SavedPosts.jsx'

export const DetailsContext = React.createContext(false);

function App() {
  return (
    // <div className="App">
    //   <h1>HI</h1>
    // </div>
    <BrowserRouter>
    <ScrollToTop />
    {/* <Navbar /> */}
          <Routes>
            <Route path='/'>
                  <Route index element={<Signup />} />
                  <Route path='signin' element={<Signin />} />
                  <Route path='community' element={<Community />} />
                  <Route path='post' element={<Post />} />
                  <Route path='upload' element={<Upload />} />
                  <Route path='saves' element={<SavedPosts />} />
              </Route>
          </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
  );
}

export default App;
