import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
        font-family: 'Inter', sans-serif
    }

    html {
        height: 100vh;
    }

    a {
        color: black;
    }
`