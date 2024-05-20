import React from "react";

const ThemeContext = React.createContext(true);

const ContextoConsumer = () => {
    return (
        <ThemeContext.Consumer>
            {(isDarkMode) => (<p>Es Modo Oscuro? <b>{isDarkMode ? "Si" : "No"} </b> </p> )}
        </ThemeContext.Consumer>
    )
}

export default ContextoConsumer;