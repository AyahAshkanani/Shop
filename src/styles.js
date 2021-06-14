import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
    }
`;

export const Title = styled.h1`
  text-align: center;
  font-style:italic;
  font-size:75px;
  margin-top: -25px;
`;

export const Description = styled.h4`
  text-align: center;
  margin-top: -30px;
  margin-bottom:30px;
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
  img {
    border: 3px solid #000000;
    width: 220px;
    height: 200px;
    border-radius: 10px;
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
font-size:1em;
margin: 1.25em;
padding:1.25em 1em;
border-radius: 3px;
background-color:${(props) => props.theme.mainColor} ;
color:${(props) => props.theme.backgroundColor} ;
`;

export const SearchBarStyled = styled.input`
margin: 1rem auto;
padding:0.5rem;
display:block;
width: 40%;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
    margin-right: 20px;
  }
  p {
    vertical-align: middle;
  }
`;