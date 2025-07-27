import React from 'react';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';



function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={< LandingPage/>}/>
    <Route path='/profile' element={< Profile/>}/>
    <Route path='*' element={< PageNotFound/>}/>
   </Routes>
   </>
  )
}

export default App
