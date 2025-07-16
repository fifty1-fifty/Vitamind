import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import TestPage from './pages/TestPage';
import ForgotPassPage from './pages/ForgotPassPage';
import './App.css';

function App() : any {
  return (
     <Router>
        <Routes>


        <Route path="/login" element={<LoginPage />} />
		<Route path="/register" element={<RegisterPage />} />
		<Route path="/forgotpassword" element={<ForgotPassPage />} />
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="*" element={<Navigate to="/login" />} /> 
		<Route path='/test' element={<TestPage />} />

        <Route path="/home" element={<HomePage />} />
		
	<Route path="product" element={<ProductPage />} />













        </Routes>
      </Router>
  );
}

export default App
