import { CakeWrapper,} from "../styles";
// DeleteButtonStyled 
import DeleteButton from "./buttons/DeleteButton";
  const CakeItem = (props) => {
    
    return (
      <CakeWrapper>
        <img  onClick={() => props.setCake(props.cake)}
         src={props.cake.image} alt={props.cake.name}  />
        <p>{props.cake.name}</p>
        <p className="cake-price">{props.cake.price} KD</p>
        <DeleteButton handleDelete = {props.handleDelete} cakeId = {props.cake.id} setCake = {props.setCake} />
      </CakeWrapper>
      
    );
  };

  export default CakeItem;