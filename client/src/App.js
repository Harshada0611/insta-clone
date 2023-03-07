import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import PostView from './components/PostView';
import PostForm from './components/PostForm';

function App() {
  return (
    < BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
          <Route path='/postview' element={<PostView />}></Route>
          <Route path='/postfrom' element={<PostForm />}></Route>        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
