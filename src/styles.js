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
`;

export const Description = styled.h4`
  text-align: center;
  
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:350px;
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CakeWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    font-weight: bold;
    font-style: oblique;
    &.cookie-price {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;