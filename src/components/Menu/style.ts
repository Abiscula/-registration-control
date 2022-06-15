import styled from "styled-components";
import '../../variables.css'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    background-color: var(--background-menu);
    height: 100vh;
    width: 150px;
    min-width: 150px;
    
    nav {
        display: flex;
        flex-direction: column;
        margin: auto 0;
        align-items: center;
        gap: 4.2rem;

        .link {
            color: var(--color-white);
            text-decoration: none;
            width: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            gap: 2px;
            text-align: center;
  
        }

        .link:hover {
            color: var(--color-wheat);
            transform: scale(1.1);
        }

    }
`