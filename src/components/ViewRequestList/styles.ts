import styled from "styled-components";

export const ViewRequestListContainer = styled.table`
    
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


    .requestIdColumn, .userIdColumn {
        max-width: 200px;
        overflow-x: scroll;
        white-space: nowrap;
    }

    .requestIdColumn::-webkit-scrollbar, .userIdColumn::-webkit-scrollbar {
        height: 10px;
    } 
    .requestIdColumn::-webkit-scrollbar-track, .userIdColumn::-webkit-scrollbar-track {
        border-radius: 5px;
        background: gray;
    }
    .requestIdColumn::-webkit-scrollbar-thumb, .userIdColumn::-webkit-scrollbar-thumb {
        background-color: lightgray;
        border-radius: 20px;  
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

export const SeachField = styled.input`
    margin-bottom: 2rem;
`