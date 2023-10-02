import styled from "styled-components";

export const ViewUsersListContainer = styled.table`
    
    overflow: scroll;
    position: relative;

    input {
        height: 2rem;
    }

    .nothingToShow {
        
        position: absolute;
        left: 35vw;
        top: 5rem;
        min-width: 720px;

    }
`

export const TablePageContainer = styled.div`
        height: 380px;
        max-width: 87%;
        overflow: auto;
`