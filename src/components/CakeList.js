import cakes from "../cakes";
import CakeItem from "./CakeItem"
import { ListWrapper } from "../styles";

const CakeList =() => {

    const cakeList = cakes.map((cake) => (
        <CakeItem name= {cake.name} price={cake.price} image={cake.image}  />  

    ));
    return <ListWrapper>{cakeList}</ListWrapper>
};
export default CakeList;

