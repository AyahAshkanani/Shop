import './App.css';
// components
import Routes from './components/Routes';
import NavBar from "./components/NavBar"

// stores
import bakeryStore from "./stores/bakeryStore";
import cakeStore from "./stores/cakeStore";

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

//use state
import { useState } from "react";

//Libraries

import { observer } from 'mobx-react';

const theme = {
  light: {
    mainColor: "#006d77",
    backgroundColor: "#83c5be",
    red: "red",
  },
  dark: {
    mainColor: "#83c5be",
    backgroundColor: "#006d77",
    red: "red",
  },
};

function App() {

  const [currentTheme, setCurrentTheme] = useState("light");
  //detail
  const [cake, setCake] = useState(null);

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  }
  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        {bakeryStore.loading || cakeStore.loading ? (
          <h1>Loading...</h1>
        ) : (
          <Routes />
        )}
      </ThemeProvider>
    </div>
  );
}
export default observer(App);