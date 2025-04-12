// AppContent.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contacts from '../components/Contacts/Contacts';
import Signup from '../components/Login&Signup/Signup';
import Login from '../components/Login&Signup/Login';
import UserProfile from '../components/UserProfile/UserProfile';
import ProfilePopup from '../components/ProfilePopup/ProfilePopup';
import Footer from '../components/Footer/Footer';

function AppContent({ isLoggedIn, popupHandler, PopUpOpen, setPopupOpen }) {
  const location = useLocation();
  const knownPaths = ['/', '/About', '/Contacts', '/Signup', '/Login', '/UserProfile'];
  const isNotFound = !knownPaths.includes(location.pathname);

  return (
    <>
      {PopUpOpen && <div className='profilePopup'><ProfilePopup setPopupOpen={setPopupOpen} /></div>}
      {!isNotFound && <Navbar isLoggedIn={isLoggedIn} popupHandler={popupHandler} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      {!isNotFound && <Footer />}
    </>
  );
}

export default AppContent;
