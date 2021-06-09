import { CakeWrapper } from "../styles";
const CakeItem = (props)=>{
    return (
        <CakeWrapper>
            <img alt={props.name} className="cake-image" src={props.image}/>
            <p className="text">{props.name}</p>
            <p className="text">{props.price} KD</p>

        </CakeWrapper>
      );
};

export default CakeItem;