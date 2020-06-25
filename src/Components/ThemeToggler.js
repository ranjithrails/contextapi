import React,{useContext} from "react";
import ThemeContext from '../context/ThemeContext'

const themeTogglerStyle = {
  cursor: "pointer"
}

const ThemeToggler = () => {
  console.log("testing");
  const[themeMode, setThemeMode] = useContext(ThemeContext);
    return(
        <div style = {themeTogglerStyle} onClick = {() => {setThemeMode(themeMode === "light"? "dark": "light")}}>
            <span title = "switch theme">
                {themeMode === "light" ? "Dark" : "Light"}
            </span>
        </div>
    );
}

export default ThemeToggler;