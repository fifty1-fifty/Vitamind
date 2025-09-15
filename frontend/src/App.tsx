import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import Login from './pages/LoginPage/LoginPage';
import Test from './pages/TestPage/TestPage';
import Home from './pages/HomePage/HomePage';
import Product from './pages/ProductPage/ProductPage';

//import { useState } from 'react'

import './App.css'





const theme = createTheme({
  colors: {
    brand: [
      '#e9d985', // lightest (yellowish)
      '#f3eab7', // lighter
      '#bcd8c1', // pale green
      '#d3e6d8', // lighter green
      '#439A86', // green
      '#7fc7b5', // lighter teal
      '#007991', // teal
      '#005f6b', // darker teal
      '#222e50', // dark blue
      '#1a2238', // darkest
    ],
  },
  primaryColor: 'brand',
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '700',
  },
  radius: {
    md: '8',
    lg: '12',
  },
});



function App() 
{
  return (
    <MantineProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}
export default App