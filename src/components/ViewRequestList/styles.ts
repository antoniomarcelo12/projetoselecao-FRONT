import styled from "styled-components";

export const ViewRequestListContainer = styled.table`
    
    width: 80%;
    overflow-x: scroll;

    text-align: center;

    position: relative;

    tr {
        line-height: 2rem;
    }
    td {
        border-bottom: 1px solid black;
    }

    .nothingToShow {
        position: absolute;
        top: 4rem;
        left: calc(50% - 40px);
    }

    @media (max-width: 768px) {
        font-size: .5rem;
    }
`