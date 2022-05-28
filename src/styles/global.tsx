import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline:0; 
        font-family: 'Noto Serif', serif;
    } 

    html{
        scroll-behavior: smooth;
    }

    :root {
        --primary-color: #21262D;
        --primary-color-50: #485D5E;
        --secondary-color: #DDBC8B;
        --secondary-color-50: #B89664;
        --terciary-color: #FFFFFF;
        --terciary-color-50: #E5E5E5;
    }
`;
