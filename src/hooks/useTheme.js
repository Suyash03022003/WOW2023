import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext({
    theme: "dark",
    setTheme: (_theme = "light") => {},
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Get the theme from local storage if it exists
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? storedTheme : "light";
    });

    useEffect(() => {
        // Save the theme to local storage whenever it changes
        localStorage.setItem("theme", theme);
        // Update the class in the body element based on the theme
        document.body.className = `theme-${theme}`;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
