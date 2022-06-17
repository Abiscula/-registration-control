import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 800px;
    min-width: 600px;
    height: 80vh;
    background-color: var(--color-white);
    border-radius: 60px;
    margin: auto;
    padding: 5rem;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 300px;
            height: 250px;
            border-radius: 40px 15px 40px 15px;
            border: 2px solid var(--background-menu);
            background-color: var(--background);
            box-shadow: 0px 1px 5px 0px #606060;
            box-shadow:inset 0px 1px 8px 0px #606060;

            h4 {
                width: 90%;
                text-align: center;
                font-size: 1.2rem;
                color: var(--color-gray);
            }

            span {
                width: 80%;
                text-align: center;
                font-size: 7rem;
            }
        }
    }
    
`