// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppContent from './components/AppContent'; // Extracted for clarity

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [PopUpOpen, setPopupOpen] = useState(false);

  const popupHandler = (value) => {
    setPopupOpen(value);
  };

  return (
    <Router>
      <AppContent
        isLoggedIn={isLoggedIn}
        popupHandler={popupHandler}
        PopUpOpen={PopUpOpen}
        setPopupOpen={setPopupOpen}
      />
    </Router>
  );
}

export default App;
