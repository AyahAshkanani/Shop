import React from "react";
import shopImage from '../dp.png'
import {Title, Description, ShopImage } from "../styles";
const Home = () => {
return (
    <div>
   
    <Title className="text">Welcome to Sinful!!</Title>
      <Description className="text">A place where you can taste a piece of heaven</Description>
      <ShopImage
        id="shop-image"
        alt="shop"
        src={shopImage}
      />
  </div>

);
};

export default Home;