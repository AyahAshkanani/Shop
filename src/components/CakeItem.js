//styles
import { CakeWrapper, } from "../styles";
// buttons
import DeleteButton from "./buttons/DeleteButton";
//libraries
import { Link } from "react-router-dom";

const CakeItem = (props) => {

  return (
    <CakeWrapper>
      <Link to={`/menu/${props.cake.slug}`}>
        <img src={props.cake.image} alt={props.cake.name} />
      </Link>
      <p>{props.cake.name}</p>
      <p className="cake-price">{props.cake.price} KD</p>
      <DeleteButton cakeId={props.cake.id} />
    </CakeWrapper>
  );
};

export default CakeItem;