import React, {useState} from 'react';
import ThemeContext from './context/ThemeContext'
import './App.css';
import Header from './Components/Header';
import MainWithClass from './Components/MainWithClass';

function App() {
  const themeHook = useState("light");
  return (
    <div className="App">
     <ThemeContext.Provider value = {themeHook}>
     <Header />
     <MainWithClass />
     </ThemeContext.Provider>
    </div>
  );
}

export default App;
