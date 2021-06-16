import { CakeWrapper, DeleteButtonStyled } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
  const CakeItem = ({cake, setCake}) => {
    
    return (
      <CakeWrapper>
        <img  onClick={() => setCake(cake)}
         src={cake.image} alt={cake.name}  />
        <p>{cake.name}</p>
        <p className="cake-price">{cake.price} KD</p>
        <DeleteButton handleDelete = {cake.handleDelete} cakeId = {cake.id} setCake = {setCake} />
      </CakeWrapper>
      
    );
  };

  export default CakeItem;