import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 800px;
    min-width: 600px;
    height: 75vh;
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

    .btn-div {
        margin: 0 auto;
        display: flex;
        width: 115px;
        height: 115px;
        font-size: 1.1rem;
        background-color: var(--background-menu);
        border-radius: 150px;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 -7px 0 rgba(0, 0, 0, 0.3), 0 5px 0 rgba(0, 0, 0, 0.15);

    }


    .btn-register {
        border: none;
        width: 95px;
        height: 95px;
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

    }

`