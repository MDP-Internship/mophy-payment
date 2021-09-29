import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
    }
    
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #1EAAE7;
      border-radius: 30px;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #59C1EE;
    }
    ::-webkit-scrollbar-track {
      background: #F4F4F4;
      border: none;
      border-radius: 0;
    }
`;

export const Text = styled.h1`
  font-weight: ${(props) => props.weight || "normal"};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color || "#000000"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  opacity: ${(props) => props.opacity || "1"};
  text-align: ${(props) => props.align};
`;

export const PageStyle = styled.div`
  padding: 0 calc(100% / 30) 50px;
`;
