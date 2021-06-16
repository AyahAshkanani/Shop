import {DeleteButtonStyled} from "../../styles";

const DeleteButton = (props)=> {
    const handleDelete = () =>{
        props.handleDelete(props.cakeId);
        props.setCake(null);
  
      };
    return(
        <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    );
};

export default DeleteButton;