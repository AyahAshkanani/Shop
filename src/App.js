import './App.css';
// import cakes from "./cakes";
import CakeList from "./components/CakeList";
import CakeDetail from "./components/CakeDetail";
import { GlobalStyle, Title, Description, ShopImage,ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
import shopImage from './dp.png'
import { useState } from "react";

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
  const[cake, setCake]=useState(null);
  const[_cakes, setCakes]= useState("cakes");

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
        <div>
          <ThemeButton onClick={toggleTheme}> {currentTheme=== "light"? "Dark": "Light"} mode</ThemeButton>
          <Title>Welcome to Sinful!!</Title>
          <Description>A place where you can taste a piece of heaven</Description>
          <ShopImage alt="shop" src={shopImage}/>
        </div>
        {cake? <CakeDetail cake={cake} setCake={setCake} handleDelete={handleDelete} />: <CakeList setCake={setCake} cakes ={_cakes} handleDelete={handleDelete} />}
      </ThemeProvider>   
    </div>
  );
 
}

export default App;
