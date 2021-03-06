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

    @media (max-width: 1360px) {
        width: 600px;
        min-width: 300px;
    }

    @media (max-width: 1024px) {
        width: 400px;
        min-width: 300px;
    }

    select {
        align-self: flex-end;
        width: 15%;
        border-radius: 10px;

        @media (max-width: 1024px) {
            width: 20%;
        }   
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 1rem;
        

        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: 1rem;
            
            span {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 130px;
                width: 350px;

                @media (max-width: 1360px) {
                    width: 250px;
                }

                @media (max-width: 1024px) {
                    width: 150px;
                }   

                .contract-icon {
                    cursor: pointer;
                    color: var(--color-gray);
                }

                .contract-icon:hover {
                    transform: scale(1.2);
                    color: var(--background-menu);
                }

            }

            .paginationBtn {
                width: 80%;
                height: 40px;
                list-style: none;
                display: flex;
                justify-content: center;

                @media (max-width: 1024px) {
                    width: 60%;
                } 
            }

            .paginationBtn a {
                padding: 8px;
                margin: 8px;
                border-radius: 5px;
                color: var(--color-white);
                background-color: var(--background-menu);
                cursor: pointer;
            }

            .paginationBtn a:hover {
                opacity: 0.8;
            }
            
            .paginationActive {
                opacity: 0.8;
            }
        }
    }
`


export const Modal = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    
    background-color: rgba(49, 99, 228, 0.5);

    display: grid;
    justify-content: center;
    align-items: center;
    z-index: 109;

    div {
        width: 800px;
        min-width: 600px;
        height: 80vh;
        background-color: var(--color-white);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 60px;
        position: relative;

        .btn-close {
            position: absolute;
            top: 1.5rem;
            right: 2rem;
            cursor: pointer;
        }

        .btn-close:hover {
            transform: scale(1.1);
            color: var(--color-danger);
        }
    }

    .btn-print {
        width: 100px;
        padding: 8px;
        margin: auto;
        border-radius: 15px;
        border: none;
        cursor: pointer;
        background-color: var(--color-danger);
        color: var(--color-white);
    }

    .btn-print:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

`