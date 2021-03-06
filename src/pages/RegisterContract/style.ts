import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 800px;
    min-width: 600px;
    height: 80vh;
    background-color: var(--color-white);
    border-radius: 60px;
    margin: auto;
    padding: 5rem;
    justify-content: space-between;

    @media (max-width: 1360px) {
        width: 600px;
        min-width: 300px;
    }

    @media (max-width: 1024px) {
        width: 400px;
        min-width: 300px;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        span {
            display: flex;
            flex-direction: column;

            label {
                margin-bottom: 0.5rem;
                align-self: center;
                font-size: 1.2rem;

            }

            select {
                border-radius: 12px;

                @media (max-width: 1024px) {
                    width: 68%;
                    font-size: 0.9rem;
                }  

            }
        }

        aside   {
            display: flex;
            flex-direction: column;

            label {
                margin-bottom: 0.5rem;
                align-self: center;
                font-size: 1.2rem;
            }

            span {
                display: flex;
                flex-direction: row;
            }

            input {
                border-radius: 12px 0 0 10px;
                width: 100px;
                border-right: none;
                padding: 3.8px;
                border: 1px solid var(--background-menu);

                @media (max-width: 1024px) {
                    width: 40%;
                    font-size: 0.8rem;
                }  
            }

            button {
                border-radius: 0 12px 10px 0;
                width: 50px;
                border-left: none;
                background-color: var(--background-menu);
                color: var(--color-white);
                cursor: pointer;
            }
        }
    }



    section {
        align-self: center;

        .icon {
            color: var(--color-gray);
        }

        .icon:first-child {
            @media (max-width: 1024px) {
                display: none;
            }
        }

        .icon:last-child {
            @media (max-width: 1024px) {
                display: none;
            }
        }
    }


`