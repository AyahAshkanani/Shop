import { CakeWrapper } from "../styles";

  const CakeItem = ({cake, setCake}) => {
    return (
      <CakeWrapper onClick={() => setCake(cake)}>
        <img src={cake.image} alt={cake.name}  />
        <p>{cake.name}</p>
        <p className="cake-price">{cake.price} KD</p>
      </CakeWrapper>
      
    );
  };

  export default CakeItem;