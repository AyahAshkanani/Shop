import cakes from "../cakes";
//components
import CakeItem from "./CakeItem"
import SearchBar from "./SearchBar";
//styles
import { ListWrapper } from "../styles";
//useState
import { useState } from "react";
const CakeList =({setCake}) => {

    const[query, setQuery]= useState("");

    const cakeList= cakes.filter((cake)=> cake.name.toLowerCase().includes(query.toLowerCase()))
    .map((cake)=>(
    <CakeItem 
    cake={cake}
    setCake={setCake}
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

