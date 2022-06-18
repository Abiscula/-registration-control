import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 150px;
    align-items: center;
    justify-content: center;

    span {
        font-size: 1.3rem;
    }

    .btn-close {
            position: absolute;
            top: 0.8rem;
            right: 0.8rem;
            cursor: pointer;
        }

    .btn-close:hover {
        transform: scale(1.1);
        color: var(--color-danger);
    }

    .msg-success {
        color: #5cb85c;
    }

    .msg-error {
        color: #d9534f;
    }

    .msg-warning {
        color: #f0ad4e;
    }

`