import { createContext , useState } from "react";

export const themeContext = createContext(); 


const ThemeState = (props) => {

    const [theme, settheme] = useState("light");


    return(
        <themeContext.Provider value={{ theme, settheme }} >
            {props.children}
        </themeContext.Provider>
    )
}


export default ThemeState ;