import {DetailWrapper} from "../styles";

const CakeDetail = (props) => {
    return (
        <DetailWrapper>
            <img src ={props.cake.image} alt={props.cake.name}/>
            <p>{props.cake.name}</p>
            <p>{props.cake.description}</p>
                <p>{props.cake.price}KD</p>
        </DetailWrapper>
    );
};

export default CakeDetail;