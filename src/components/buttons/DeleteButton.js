import cakeStore from "../../stores/cakeStore";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
    const handleDelete = () => {
        cakeStore.handleDelete(props.cakeId);
    };
    return (
        <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    );
};

export default DeleteButton;