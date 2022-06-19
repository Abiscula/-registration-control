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
    position: relative;

    h1 {
        font-size: 2.5rem;
    }

    .doc {
        color: var(--color-danger);
        position: absolute;
        top: 70px;
        left: 50px;
    }

    .doc-title {
        color: var(--color-danger);
        position: absolute;
        top: 70px;
        left: 100px;
    }

    .gear {
        color: var(--color-gray);
        position: absolute;
        bottom: 70px;
        right: 50px;
        animation: is-rotating 4s linear infinite;

        @keyframes is-rotating {
          to {
            transform: rotate(1turn);
          }
        }

    }

`