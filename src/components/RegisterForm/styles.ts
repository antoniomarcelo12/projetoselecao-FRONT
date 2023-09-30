import styled from "styled-components";

export const RegisterFormContainer = styled.form`
    width: 22rem;
    height: 42rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: lightgray;
    border-radius: 6px;

    label {
        margin-bottom: 1rem;
    }

    input {
        height: 1.5rem;
        border: none;
        margin: 0 0 2rem 0;

        padding: 1rem;
        border-radius: 6px;

        &:focus {
            outline: 1px solid gray;
        }
    }

    button {
        height: 2rem;
        width: 4rem;
    }

    .spanRegister {
        margin-top: 4rem;
    }

    .errorMessage {
        color: red;
        margin-bottom: 1rem;
    }
    
    .successMessage {
        color: green;
        margin-bottom: 1rem;
    }
    
    .hintUnmatchedPasswords {
        color: red;
        margin: 1rem 0;
    }
`