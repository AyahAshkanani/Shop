import cakes from "../cakes";
//components
import CakeItem from "./CakeItem"
import SearchBar from "./SearchBar";
//styles
import { ListWrapper } from "../styles";
//useState
import { useState } from "react";
const CakeList =(props) => {

    const[query, setQuery]= useState("");

    const cakeList= cakes.filter((cake)=> cake.name.toLowerCase().includes(query.toLowerCase()))
    .map((cake)=>(
    <CakeItem 
    name= {cake.name} 
    price={cake.price} 
    image={cake.image}
    key ={cake.id}
    setCake={props.setCake}
    />
    ));
        
    return(
        <div>
            <SearchBar setQuery={setQuery} />
            <ListWrapper>{cakeList}</ListWrapper>
        </div>
    );
  };
export default CakeList;

