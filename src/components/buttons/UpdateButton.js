import { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import CakeModal from "../modals/CakeModal";

const UpdateButton = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div>
            <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
            <CakeModal isOpen={isOpen} closeModal={closeModal} oldCake={props.cake} />
        </div>
    );
};

export default UpdateButton;