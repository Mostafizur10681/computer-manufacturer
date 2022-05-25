
import './App.css';
import Navbar from './components/Pages/Shared/Navbar';
import Footer from './components/Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Blogs from './components/Pages/Blogs/Blogs';
import NotFound from './components/Pages/NotFound/NotFound';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/Login/SignUp';
import RequireAuth from './components/Pages/Login/RequireAuth';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Orders from './components/Pages/Dashboard/Orders';
import AddReview from './components/Pages/Dashboard/AddReview';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import MyProtfolio from './components/Pages/MyProtfolio/MyProtfolio';
import PartsDetails from './components/Pages/PartsDetails/PartsDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myprotfolio' element={<MyProtfolio></MyProtfolio>}></Route>
        <Route path='/part/:id' element={<PartsDetails></PartsDetails>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<Orders></Orders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer>
      </Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
