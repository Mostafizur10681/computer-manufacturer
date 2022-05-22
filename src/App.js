import logo from './logo.svg';
import './App.css';
import Navbar from './components/Pages/Shared/Navbar';
import Footer from './components/Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
