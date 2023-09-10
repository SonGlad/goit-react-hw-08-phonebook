import { styled } from "styled-components";


export const HomeStyledContainer = styled.div`
    min-height: calc(100vh - 500px);
    display: flex;
    align-items: center;
    justify-content: center;

    .home-title{
        font-weight: 700;
        color: #fff; 
        text-shadow: 0 0 10px rgba(0,0,0,0.3); 
        letter-spacing:1px; 
        text-align:center;
        font-size: 60px;
        margin-top: 0;
        /* margin-bottom: 40px; */
    }
`