import styled from "styled-components";


export const UpdateFromStyles = styled.form`
    height: auto;
    padding: 30px;
    padding-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.6);
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.6);
    .descr-div{
        position: absolute;
        transform: translateY(-30px);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .form-icon{
        fill: transparent;
        stroke: #fff;
    }
    .input-title{
        font-size: 20px;
    }
    .input{
        width: 340px; 
        height: 40px;
        margin-bottom: 40px; 
        background: rgba(0,0,0,0.3);
        border: none;
        outline: none;
        padding: 5px;
        font-size: 20px;
        color: #fff;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 4px;
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
        -webkit-transition: box-shadow .5s ease;
        -moz-transition: box-shadow .5s ease;
        -o-transition: box-shadow .5s ease;
        -ms-transition: box-shadow .5s ease;
        transition: box-shadow .5s ease;
    }

    .top-input{
        margin-bottom: 10px;
        position: relative;
    }

    .input-below{
        margin-bottom: 10px;
    }

    .input:focus { 
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); 
    }

    .btn-f { 
        display: inline-block;
        zoom: 1; 
        padding: 4px 10px 4px; 
        margin-bottom: 0; 
        font-size: 13px; 
        line-height: 18px; 
        color: #333333; 
        text-align: center;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); 
        vertical-align: middle; 
        background-color: #f5f5f5; 
        background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); 
        background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); 
        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); 
        background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
        background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); 
        background-image: linear-gradient(top, #ffffff, #e6e6e6); 
        background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0);
        border-color: #e6e6e6 #e6e6e6 #e6e6e6; 
        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); 
        border: 1px solid #e6e6e6; 
        -webkit-border-radius: 4px; 
        -moz-border-radius: 4px; 
        border-radius: 4px; 
        -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); 
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; 
        *margin-left: .3em; 
    }
    .btn-large-f { 
        padding: 9px 14px; 
        font-size: 15px; 
        line-height: normal; 
        -webkit-border-radius: 5px; 
        -moz-border-radius: 5px; 
        border-radius: 5px; 
    }
    .btn-f:hover { 
        color: #333333;
        text-decoration: none;  
        background-color: #e6e6e6; 
        background-position: 0 -15px; 
        -webkit-transition: background-position 0.1s linear; 
        -moz-transition: background-position 0.1s linear; 
        -ms-transition: background-position 0.1s linear; 
        -o-transition: background-position 0.1s linear; 
        transition: background-position 0.1s linear;
    }
    .btn-primary-f, .btn-primary-f:hover { 
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); 
        color: #ffffff; 
    }
    .btn-primary-f { 
        background-color: #4a77d4; 
        background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); 
        background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); 
        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); 
        background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); 
        background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); 
        background-image: linear-gradient(top, #6eb6de, #4a77d4); 
        background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);  
        border: 1px solid #3762bc; 
        text-shadow: 1px 1px 1px rgba(0,0,0,0.4); 
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); 
    }
    .btn-primary-f:hover, .btn-primary-f:active, .btn-primary-f.active{ 
        filter: none; 
        background-color: #4a77d4;
    }
    .btn-block-f { 
        width: 200px; 
        height: 40px;
        display:block; 
    }

* { -webkit-box-sizing:border-box; 
    -moz-box-sizing:border-box; 
    -ms-box-sizing:border-box;
    -o-box-sizing:border-box; 
    box-sizing:border-box; 
    }

    .descr-text-cont{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
    }

    .descr-text{
        font-weight: 400;
        font-size: 13px;
        color: #9BB537;
        margin: 0;
    }

    .below{
        margin-bottom: 40px;
        margin-left: 10px;
    }

    .descr-text-lower{
        margin-bottom: 30px;
    }









    .options-list{
        width: calc(100% - 60px);
        /* margin-left: 30px; */
        overflow-y:auto;
        position: absolute;
        padding-top: 2px;
        padding-left: 5px;
        padding-bottom: 6px;
        border-radius: 14px;
        box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
        background: rgba(0,0,0,0.4);
        backdrop-filter: blur(20px);
        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
        -webkit-transition: box-shadow .5s ease;
        -moz-transition: box-shadow .5s ease;
        -o-transition: box-shadow .5s ease;
        -ms-transition: box-shadow .5s ease;
        transition: box-shadow .5s ease;
        -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.6);
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.6);
    }
    .options-list {
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 2px solid transparent;
        left: 30px;
        top: 17%;
        height: 0px;
        z-index: -1;
        visibility: hidden;
        opacity: 0;
        transition: 
        height 0.25s ease-in-out, 
        visibility 0s ease-in-out 0.25s, 
        opacity 0s ease-in-out 0.20s, 
        z-index 0s ease-in-out 0.25s,
        top 0s ease-in-out 0.25s;
    }

    .options-list-active{
        height: 235px;
        top: 24%;
        z-index: 1;
        visibility: visible;
        opacity: 1;
        transition: 
        height 0.25s ease-in-out, 
        visibility 0s ease-in-out, 
        opacity 0.1s ease-in-out, 
        z-index 0s ease-in-out,
        top 0s ease-in-out;
    }


    .options-list .option {
        text-align: left;
        font-size: 20px;
        margin-bottom: 5px;
    }

    .option-item{
        width: 100%;
        background-color: transparent;
        text-align: left;
        color: #fff;
        font-size: 20px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 5px;
        transition: color 0.25s;

        &:hover, &:focus {
        color: #f21331;
        }
    }

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background-color: #fff;
    }

`

