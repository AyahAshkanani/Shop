import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
    }
`;

export const AuthButtonStyled = styled.button`
  font-size:1.2em;
  margin: 1.75em;
  padding-left:2%;
  padding-right:2.5%;
  border-radius: 30px;
  margin-left:3px;
  text-align: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
`;

export const AiFillPlusCircleStyled = styled(AiFillPlusCircle)`
color: ${(props) => props.theme.mainColor};
margin-left: 84%;
`;

export const BakeryItemImage = styled.img`
  width: 20em;
`;

export const CreateButtonStyled = styled.button`
color: ${(props) => props.theme.backgroundColor};
backgorund-color: ${(props) => props.theme.mainColor};
width:100px;
margin-top: 10px;
padding: 2px;
border-radius: 5px;
margin-top: 10px;
&:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const UpdateButtonStyled = styled.p`
color: ${(props) => props.theme.pink};
`;



export const NavStyled = styled.nav`
background-color: ${(props) => props.theme.backgroundColor};

`;


export const NavLinkStyled = styled(NavLink)`
 margin: 1em;
padding:1em ;
padding-left:3%;
padding-right:3%;
border-radius: 30px;
font-size:130%;
text-align: center;
${'' /* margin-left: 1600px; */}
border: 3px solid #808080;
.ml-0 {
    margin-left: auto;
  }
background-color:${(props) => props.theme.mainColor} ;
&.active{
  color: ${(props) => props.theme.red};
}
`;

export const Logo = styled(Link)`
padding: 0.75em;
img{
  width:8rem;
  
}
`;


export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-style:italic;
  font-size:75px;
  margin-top: -25px;
  padding-top: 4%;
`;


export const Description = styled.h4`
  font-style:italic;
  text-align: center;
  margin-top: -30px;
  margin-bottom:30px;
  padding-top:3%;
`;


export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:350px;
  margin-bottom:40px;
  border: 3px solid #808080;
  border-radius: 30px;
`;


export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;


export const CakeWrapper = styled.div`
  margin: 20px;
  padding-left:30px;
  img {
    border: 3px solid #000000;
    width: 220px;
    height: 250px;
    border-radius: 10px;
    margin-left:-20px;
  }
  p {
    text-align: center;
    font-weight: bold;
    font-style: oblique;
    g
    &.cookie-price {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;


export const ThemeButton = styled.button`
padding-left: 30px;
font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
font-size:1em;
margin: 1em;
padding-left:5%;
padding-right:5%;
border-radius: 30px;
background-color:${(props) => props.theme.mainColor} ;
color:${(props) => props.theme.backgroundColor} ;
margin-left:200%;
`;


export const SearchBarStyled = styled.input`
margin: 1rem auto;
padding:0.5rem auto;
display:block;
width: 40%;
`;


export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 35%;
    float: left;
    margin-right: 210px;
  }
  p {
    vertical-align: middle;
  }
`;


export const DeleteButtonStyled = styled.p`
color:${(props) => props.theme.red};
`;
