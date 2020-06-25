import React from 'react';

// const ThemeContext = React.createContext("light");
const ThemeContext = React.createContext(["light", () => {}]);


export default ThemeContext;