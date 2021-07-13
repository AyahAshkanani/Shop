import { useState } from "react";
import SignupModal from "../modals/SignupModal"
import { AuthButtonStyled } from "../../styles";

const SignupButton = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

return(
    <>
      <AuthButtonStyled onClick={openModal}>Signup</AuthButtonStyled>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>

);
};
export default SignupButton;