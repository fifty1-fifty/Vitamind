import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Loginpage from './pages/Login-Page';
import Registerpage from './pages/Register-Page';
import Homepage from './pages/Home-Page';
import Productpage from './pages/Product-Page';
import EditPage from './pages/Edit-Page';
//import Testpage from './pages/TESTINGPAGE';
import Passwordpage from './pages/Password-Page';
import './App.css';

function App() : any {
  return (
     <Router>
        <Routes>


        <Route path="/login" element={<Loginpage />} />
		<Route path="/register" element={<Registerpage />} />
		<Route path="/forgotpassword" element={<Passwordpage />} />
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="*" element={<Navigate to="/login" />} /> 
		

        <Route path="/home" element={<Homepage />} />
		
	<Route path="product" element={<Productpage />} />
  <Route path='edit' element={<EditPage />} />













        </Routes>
      </Router>
  );
}

export default App
// <Route path='/test' element={<Testpage />} />
