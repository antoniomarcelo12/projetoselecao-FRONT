import styled from "styled-components";

export const CreateUserInputStyle = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    .inputFieldContainer {
        display: flex;
        flex-direction: column;
    }

    input {
        height: 1.5rem;
        margin: .5rem 0 1rem 0;
    }

    button {
        height: 2rem;
        width: 15rem;
    }
`