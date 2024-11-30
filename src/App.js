import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Groups from "./pages/groups"
import Profile from "./pages/profile"
import AdminHome  from './admin/home';
import AdminGroup  from './admin/group';
import AdminProfile from "./admin/profile"
import SignUp from "./auth/signup"
import SignIn from "./auth/signin"
import Footer from "./components/footer"
import Header from './components/header';
import Files from './pages/Files';
import FileInfo from './pages/FileInfo';
import GroupFiles from './pages/groupFiles';

function App() {
  const mode = "dark";
  return (
    <div className={`App + ${mode}`}>
      <Header/>
      {/* <Loading/> */}
      <div className='padding-top'>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="group" element={<Groups/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="files" element={<Files/>} />
          <Route path="fileInfo/:id" element={<FileInfo/>}/>
          <Route path="groupFiles/:id" element={<GroupFiles/>}/>
        </Route>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
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
