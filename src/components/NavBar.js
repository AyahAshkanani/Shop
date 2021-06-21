import logo from "../logo.jpg";
import { ThemeButton,NavLinkStyled, Logo , NavStyled} from "../styles";

const NavBar = (props) => {
    return (
    <NavStyled className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Logo to ="/" classNameName="navbar-brand">
                <img alt="" src={logo} width="100"/>
                </Logo>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <ThemeButton onClick={props.toggleTheme} className="nav-item">
                {props.currentTheme === "light"? "Dark":"Light"} mode
                </ThemeButton>
                <NavLinkStyled to="/menu" className="nav-item">
                Menu
                </NavLinkStyled>
            </ul>
            </div>
        </div>
    </NavStyled>
);
};

export default NavBar
