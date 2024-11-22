import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Group from "./pages/group"
import Profile from "./pages/profile"
import AdminHome  from './admin/home';
import AdminGroup  from './admin/group';
import AdminProfile from "./admin/profile"
import Login from "./auth/login"
import Register from "./auth/register"
import Footer from "./components/footer"
import Header from './components/header';
//import Loading from './components/louding';

function App() {
  const mode = "dark";
  return (
    <div className={`App + ${mode}`}>
      <Header/>
      {/* <Loading/> */}
      <div className='padding-top'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/group" element={<Group/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="admin">
          <Route path="" element={<AdminHome/>} />
          <Route path="group" element={<AdminGroup/>}/>
          <Route path="profile" element={<AdminProfile/>}/>
        </Route>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
