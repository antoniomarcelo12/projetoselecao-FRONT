import styled from "styled-components";

export const CreateRequestFormContainer = styled.form`
    width: 22rem;
    height: 36rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: lightgray;
    margin-bottom: 5rem;

    label {
        margin-top: 1.5rem;
    }

    .otherInput {
        height: 2rem;
        width: 70%;
        padding: 1rem;

        margin-top: 1.5rem;

        &::placeholder {
            text-align: center;
        }
    }

    button {
        width: 50%;
        height: 2rem;
        margin-top: 1rem;
    }

`