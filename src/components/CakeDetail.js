//MobX
import cakeStore from "../stores/cakeStore";
import { observer } from "mobx-react";
//styles
import { DetailWrapper } from "../styles";
//components
import DeleteButton from "./buttons/DeleteButton";
//libraries
import { useParams, Redirect } from "react-router-dom";

const CakeDetail = (props) => {
    const cakeSlug = useParams().cakeSlug;
    const cake = cakeStore.cakes.find(cake => cake.slug === cakeSlug);
    //+ is to convert from string to int

    //if cake undefined redirect to list page

    if (!cake) return <Redirect to="/menu" />
    return (
        <DetailWrapper>
            <img src={cake.image} alt={cake.name} />
            <p>{cake.name}</p>
            <p>{cake.description}</p>
            <p>{cake.price} KD</p>
            <DeleteButton cakeId={cake.id} setCake={props.setCake} />
            <button>Back</button>
        </DetailWrapper>
    );
};

export default observer(CakeDetail);