//styles
import { CakeWrapper, } from "../styles";

// buttons
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

//libraries
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const CakeItem = (props) => {

  return (
    <CakeWrapper>
      <Link to={`/menu/${props.cake.slug}`}>
        <img src={props.cake.image} alt={props.cake.name} />
      </Link>
      <p>{props.cake.name}</p>
      <p className="cake-price">{props.cake.price} KD</p>
      <UpdateButton cake={props.cake} />
      <DeleteButton cakeId={props.cake.id} />
    </CakeWrapper>
  );
};

export default observer(CakeItem);