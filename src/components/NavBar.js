import whisk from "../whisk.jpeg";
import { observer } from "mobx-react";
import { ThemeButton, NavLinkStyled, Logo, NavStyled } from "../styles";
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";
import authStore from "../stores/authStore";

const NavBar = (props) => {
    return (
    <NavStyled className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Logo to="/" classNameName="navbar-brand">
                    <img alt="" src={whisk} width="100" />
                </Logo>
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                
                {authStore.user? (<p>hello {authStore.user.username}</p> ):(
                <>
                <SigninButton/>
                 <SignupButton/> </>)}
                 <ThemeButton onClick={props.toggleTheme} className="nav-item">
                   {props.currentTheme === "light" ? "Dark" : "Light"} mode
                </ThemeButton>
                <NavLinkStyled to="/cakes" className="nav-item"> Cakes 
                 </NavLinkStyled>
                 <NavLinkStyled to="/bakeries" className="nav-item">Bakeries
                 </NavLinkStyled>
                </ul>
            </div>
         </div>
    </NavStyled>
    );
};

export default observer(NavBar);
