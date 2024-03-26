import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext({
    theme: "dark",
    setTheme: (_theme = "light") => {},
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        /**
         * get theme from local storage, then check if the theme exists,
         * if exists then set the state and the body,
         * else set the state and the body to dark and also set the local storage to dark
         */
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
            document.body.className = `theme-${storedTheme}`;
            console.log("TRUE", storedTheme);
        } else {
            setTheme("dark");
            document.body.className = `theme-dark`;
            localStorage.setItem("theme", "dark");
            console.log("FALSE", storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const theme = prevTheme === "light" ? "dark" : "light";

            localStorage.setItem("theme", theme);
            document.body.className = `theme-${theme}`;
            return theme;
        });
        // Update the class in the body element based on the theme
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
