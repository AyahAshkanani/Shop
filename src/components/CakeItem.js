import { CakeWrapper } from "../styles";
  const CakeItem = (props) => {
    return (
      <CakeWrapper onClick={() => props.setCake(props.cake)}>
        <img src={props.image} alt={props.name}  />
        <p>{props.name}</p>
        <p className="cake-price">{props.price} KD</p>
      </CakeWrapper>
    );
  };

  // const CakeItem = (props) => {
//     return (
//       <CakeWrapper onClick={() => props.setCake(props.cake)}>
//         <img src={props.cake.image} alt={props.cake.name}  />
//         <p>{props.cake.name}</p>
//         <p className="cake-price">{props.cake.price} KD</p>
//       </CakeWrapper>
//     );
//   };

  
  export default CakeItem;