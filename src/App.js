import './App.css';
// components
import CakeList from "./components/CakeList";
import CakeDetail from "./components/CakeDetail";
import Home from "./components/Home"
import NavBar from "./components/NavBar"

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

//use state
import { useState } from "react";

//Libraries
import { Route, Switch } from "react-router";

const theme = {
  light: {
    mainColor: "#a5a58d",
    backgroundColor: "#e9edc9",
    red: "red",
  },
  dark: {
    mainColor: "#e9edc9",
    backgroundColor: "#a5a58d",
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
        <Switch>
          <Route path="/menu/:cakeSlug">
            <CakeDetail setCake={setCake} />
          </Route>
          <Route path="/menu">
            <CakeList setCake={setCake} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}
export default App;