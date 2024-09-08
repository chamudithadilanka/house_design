import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';
import SignIn from './pages/SingIn';
import SignUp from './pages/SingUp';
import Profile from './pages/Profile';
import Header from "./components/header";

export default function App() {
  return (
    <BrowserRouter>
    <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SingIn/" element={<SignIn />} />
        <Route path="/SingUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/Profile" element={<Profile />} /> 
      </Routes>
    </BrowserRouter>
  );
}
