// import { useState } from 'react'

// import './App.css'
// import { Typography } from "@mui/material";
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import { Container, CssBaseline } from '@mui/material'; 
import Home from "./components/Home";
import Error from './components/Error';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import NewNote from './components/NewNote';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} errorElement={<Error/>}/>
    <Route path='new' element={<NewNote/>}/>
    <Route path=':id'>
      <Route index element/>
      <Route path='edit' element/>
    </Route>
    <Route path='*' element={<NotFound/>}/>
  </Route>
))

function App() {
  return (
    <>
    <CssBaseline/>
    <Container>
      <RouterProvider router={router} />
    </Container>
    </>
  )
}

export default App
