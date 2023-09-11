import { styled } from "styled-components";


export const LoginHomeStyledContainer = styled.div`
    color: #fff; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: 0 0 10px rgba(0,0,0,0.3); 
    letter-spacing:1px; 
    text-align:center;
    
    .login-page-picture{
        width: 300px;
    }
    .login-page-title{
        margin-top: -45px;
        font-weight: 700;
        font-size: 35px;
        margin-bottom: 5px;
    }
    .login-page-text{
        font-weight: 600;
        font-size: 30px;
        margin-bottom: 30px;
    }
    .lower{
        margin-bottom: 10px;
    }
    .login-descr-container{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 60px;
    }
    .action-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        min-height: 250px;
    }
    .action-text{
        font-weight: 600;
        font-size: 30px;
    }
    .action-picture-contact{
        width: 200px;
        transition: transform 0.3s;

        &:hover, &:focus {
        transform: scale(1.15);
        }
    }
    .action-picture-logout{
        width: 160px;
        transition: transform 0.3s;

        &:hover, &:focus {
        transform: scale(1.15);
        }
    }
    .action-button{
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
        margin-bottom: 10px;
    }
`