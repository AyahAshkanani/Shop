import './App.css';
// components
import CakeList from "./components/CakeList";
import CakeDetail from "./components/CakeDetail";
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import cakes from "./cakes";

//styles
import { GlobalStyle} from "./styles";
import { ThemeProvider } from "styled-components";

//use state
import { useState } from "react";

//Libraries
import {Route, Switch} from "react-router";


const theme = {
  light: {
    mainColor:"#4d516d",
    backgroundColor:"lavender",
    red:"red",
  },
  dark: {
    mainColor:"lavender",
    backgroundColor:"#4d516d", 
    red:"red",
  },

 
};
function App() {

  const[currentTheme, setCurrentTheme]= useState("light");
  //detail
  const[cake, setCake]=useState(null);
  //list
  const[_cakes, setCakes]= useState(cakes);

  const handleDelete =(cakeId) =>{
     const updatedCakes =_cakes.filter(cake => cake.id !== cakeId);
     setCakes(updatedCakes);

  };

  const toggleTheme=()=>{
    if(currentTheme === "light") setCurrentTheme("dark");
  else setCurrentTheme("light");
  }
  return(
    <div>
      <ThemeProvider theme ={theme[currentTheme]}>
        <GlobalStyle />

        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme}/>
        <Switch>
        <Route path="/menu/:cakeSlug">

          <CakeDetail cakes={_cakes} setCake={setCake} handleDelete={handleDelete}/>

        </Route>
          <Route path="/menu">
            <CakeList setCake={setCake} cakes ={_cakes} handleDelete={handleDelete} />
          </Route>

          <Route exact path ="/">
            <Home />
          </Route>

        </Switch>
      </ThemeProvider>   
    </div>
  );
 
}

export default App;
