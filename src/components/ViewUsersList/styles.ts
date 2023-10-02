import styled from "styled-components";

export const ViewUsersListContainer = styled.table`
    
    width: 80%;
    overflow-x: scroll;
    text-align: center;
    position: relative;

    tr {
        line-height: 1.5rem;
        
    }

    td {
        border-bottom: 1px solid black;
    }

    .tableItem {
        display: flex;
    }

    @media (max-width: 768px) {
        font-size: .5rem;
    }


`