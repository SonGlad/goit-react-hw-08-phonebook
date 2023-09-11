import { styled } from "styled-components";


export const HomeStyledContainer = styled.div`
    color: #fff; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: 0 0 10px rgba(0,0,0,0.3); 
    letter-spacing: 1px; 
    text-align:center;   

    .title-container{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: auto;
        margin-bottom: 20px;
    }
    .home-title{
        font-weight: 700;
        font-size: 45px;
    }
    .greeting-picture{
        margin-bottom: -18px;
    }
    .descr-container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .descr-title, .descr-key, .nav-descr{
        font-weight: 500;
        font-size: 30px;
        margin-bottom: 20px;
    }
    .descr-title-text{
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 35px;
    }
    .descr-list{
        text-align: left;
        list-style: disc;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 35px;
    }
    .descr-text{
        font-weight: 400;
        font-size: 30px;
        margin-bottom: 30px;
    }
    .nav-container{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 550px;
    }
    .register-container, .login-container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .link-picture{
        width: 250px;
        transition: transform 0.3s;

        &:hover, &:focus {
        transform: scale(1.15);
        }
    }
`