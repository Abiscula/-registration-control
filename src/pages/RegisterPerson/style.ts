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

        span {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

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

`