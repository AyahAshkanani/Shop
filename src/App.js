import './App.css';
import CakeList from "./components/CakeList";
import { GlobalStyle, Title, Description, ShopImage } from "./styles";
import { ThemeProvider } from "styled-components";
import shopImage from './dp.png'

const theme = {
  mainColor:"#4d516d",
  backgroundColor:"lavender", 
};
function App() {
  return(
    <div>
      <ThemeProvider theme ={theme}>
        <GlobalStyle />
        <div>
          <Title>Welcome to Sinful!!</Title>
          <Description>A place where you can taste a piece of heaven</Description>
          <ShopImage alt="shop" src={shopImage}/>
        </div>
        <CakeList />
      </ThemeProvider>   
    </div>
  );
 
}

export default App;
