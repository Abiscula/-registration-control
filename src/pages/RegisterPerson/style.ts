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

    @media (max-width: 1360px) {
        width: 600px;
        min-width: 300px;
    }

    @media (max-width: 1024px) {
        width: 400px;
        min-width: 300px;
        overflow-y: scroll;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        @media (max-width: 1024px) {
            flex-direction: column;
        }  

        span {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

            @media (max-width: 1024px) {
                flex-direction: row;
                justify-content: space-around;
                gap: 0px;
                margin-bottom: 1rem;

                label {
                    width: 100px;
                }
            }  

            input {
                width: 250px;
                border-radius: 10px;
                padding: 8px;        
            }

            section {
                .input-cep {
                    border-radius: 10px 0 0 10px;
                    width: 160px;
                    border-right: none;
                }

                .btn-cep {
                    border-radius: 0 10px 10px 0;
                    width: 90px;
                    padding: 8px;
                    border-left: none;
                    background-color: var(--background-menu);
                    color: var(--color-white);
                    cursor: pointer;
                }

                .btn-cep:hover {
                    opacity: 0.8;
                }
            }

        }
    }

    .msg-validation {
        color: var(--color-gray);
        text-align: center;

        @media (max-width: 1024px) {
            margin-top: 1rem;
        }  
    }

`