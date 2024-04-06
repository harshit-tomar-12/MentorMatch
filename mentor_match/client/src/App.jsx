
import './App.css';
import HomePage from './components/homepage';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import About from "./components/About";
import Feed from "./components/Feed";
import MentorProfile from "./components/MentorProfile";
import AdminProfile from "./components/AdminProfile";
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className="Appp" style={{ margin: "-8px" }}>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/adminprofile" element={<AdminProfile />} />
      <Route path="/profile" element={<MentorProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/create-post" element ={<CreatePost/>}/>
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
