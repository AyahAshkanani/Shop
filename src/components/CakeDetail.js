import {DetailWrapper} from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const CakeDetail = (props) => {
    return (
        <DetailWrapper>
            <img src ={props.cake.image} alt={props.cake.name}/>
            <p>{props.cake.name}</p>
            <p>{props.cake.description}</p>
            <p>{props.cake.price}KD</p>
            <DeleteButton handleDelete= {props.handleDelete} cakeId = {props.cake.id} setCake={props.setCake}/>
            <button onClick={()=> props.setCake(null)} >Back</button>
        </DetailWrapper>
    );
};

export default CakeDetail;