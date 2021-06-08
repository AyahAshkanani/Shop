const CakeItem = (props)=>{
    return (
        <div className="cake" key ={props.id}>
            <img alt={props.name} className="cake-image" src={props.image}/>
            <p className="text">{props.name}</p>
            <p className="text">{props.price}</p>

        </div>
      );
};

export default CakeItem;