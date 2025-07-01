import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() : any {
  return (
     <Router>
        <Routes>


        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="*" element={<Navigate to="/login" />} /> 

        <Route path="/home" element={<HomePage />} />
		
		<Route path="product" element={<ProductPage />} />













        </Routes>
      </Router>
  );
}

export default App
