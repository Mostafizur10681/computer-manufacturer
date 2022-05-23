
import './App.css';
import Navbar from './components/Pages/Shared/Navbar';
import Footer from './components/Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Blogs from './components/Pages/Blogs/Blogs';
import NotFound from './components/Pages/NotFound/NotFound';
import Login from './components/Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
