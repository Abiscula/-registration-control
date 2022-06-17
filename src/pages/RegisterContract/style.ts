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

    span {
        display: flex;
        flex-direction: column;
        align-self: flex-end;

        label {
            margin-bottom: 0.5rem;
            align-self: center;
            font-size: 1.2rem;

        }

        select {
            border-radius: 12px;

        }
    }

    section {
        align-self: center;

        .icon {
            color: var(--color-gray);
        }
    }


`