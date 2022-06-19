import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    body {
        background-color: var(--background);
        font-family: 'Poppins', sans-serif;
        font-weight: var(--font-normal);
        box-sizing: border-box;
        min-width: 800px;
    }
    

    .btn-div {
        margin: 0 auto;
        display: flex;
        width: 110px;
        height: 110px;
        font-size: 1.1rem;
        background-color: var(--background-menu);
        border-radius: 150px;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 -7px 0 rgba(0, 0, 0, 0.3), 0 5px 0 rgba(0, 0, 0, 0.15);

        @media (max-width: 1024px) {
            width: 90px;
            height: 90px;
            min-height: 90px;
            font-size: 1rem;
        }

    }


    .btn-register {
        border: none;
        width: 90px;
        height: 90px;
        display: flex;
        background: #ededed;
        color: var(--color-gray);
        font-weight: bold;
        border-radius: 80px;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 5px 0 rgba(0, 0, 0, 0.15);
        cursor: pointer;
  
        &:hover {
          transform: scale(1.1);
        }

        @media (max-width: 1024px) {
            width: 70px;
            height: 70px;
            min-height: 70px;
        }

    }

    .colorTitle {
        background-size: 100%;
        background-color: var(--color--gray);
        background-image: linear-gradient(to right, #8360c3, #2ebf91);
        background-repeat: repeat;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }

    
    #root > main.container {
        display: flex;
    }
    
`
