import logo from './logo.svg';
import './App.css';
import {Header} from './Header'
import {Footer} from './Footer';
import {Content} from './Content';
import Login from './Login';
import Main from './Main';
import Credit from './Credit';
import { Routes, Route } from 'react-router-dom'
import Register from './register';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="login" element={<Login/>} />
      <Route path="main" element={<Main/>} />
      <Route path="credit" element={<Credit/>} />
      {/* <Route path="register" element={<Register/>}/> */}
    </Routes>
  );
}

export default App;
