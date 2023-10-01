import styled from "styled-components";

export const UserPageContainer = styled.div`
    
    margin-top: 2rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    position: relative;

    h3 {
        font-weight: lighter;
        margin-bottom: 6rem;
    }
`

export const UserPageContent = styled.div`
    display: flex;
    gap: 5rem;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const LogoutButton = styled.button`
    height: 2rem;
    width: 4rem;
    position: absolute;
    top: 2rem;
    right: 2rem;

    @media (max-width: 768px) {
        height: 1rem;
        width: 2rem;
        font-size: .5rem;

        top: -.5rem;
        right: 1rem;
        
    }
`