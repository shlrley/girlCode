import React from 'react'
import styled from 'styled-components'

import ScrollToTop from './hooks/ScrollToTop.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>HI</h1>
    </div>
  //   <BrowserRouter>
  //   <ScrollToTop />
  //   <Navbar />
  //         <Routes>
  //           <Route path='/'>
  //                 <Route index element={<Home />} />
  //                 <Route path='about' element={<About />} />
  //             </Route>
  //         </Routes>
  //   <Footer />
  // </BrowserRouter>
  );
}

export default App;
