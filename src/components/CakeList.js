import cakes from "../cakes";
import CakeItem from "./CakeItem"


const CakeList =() => {

    const cakeList = cakes.map((cake) => (
        <CakeItem name= {cake.name} price={cake.price} image={cake.image}  />  

    ));
    return <div>{cakeList}</div>
};
export default CakeList;

