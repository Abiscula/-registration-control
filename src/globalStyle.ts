import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    body {
        background-color: var(--background);
        font-family: 'Poppins', sans-serif;
        font-weight: var(--font-normal);
        box-sizing: border-box;
        min-width: 800px;
    }
    
    
    #root > main.container {
        display: flex;
    }
    
`
