import cakes from "../cakes";

const CakeList =() => {

    const cakeList = cakes.map((cake) => (
        <div>
            <img src={cake.image} className="cake-image"/>
            <p>{cake.name}</p>
            <p>{cake.price}</p>
        </div>

    ));
    return <div>{cakeList}</div>
    
};


export default CakeList;

