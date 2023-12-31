import { styled } from "styled-components";


export const ContactsStyle = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-left: 30px;
    padding-right: 30px;
    .list{
        margin: 0 10px 30px 10px;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.6);
        box-shadow: 0 10px 20px 0 rgba(0,0,0,0.6);
        border-radius: 5px;
    }
    
    .checkbox-container{
        position: relative;
        margin-right: 10px;
    }
    .checkbox {
        width: 20px;
        height: 20px;
        outline: none;
        border: none;
        cursor: pointer;
        opacity: 0;
    }
    
    .custom-checkbox{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .custom-checkbox-before, .custom-checkbox-after{
        position: absolute;
        left: 0px;
        top: 2px;
        pointer-events: none;
    }
    .custom-checkbox-before{
        opacity: 1;
        transition: opacity 0.25s;
    }
    .custom-checkbox-after{
        opacity: 0;
        transition: opacity 0.25s;
    }
     .checkbox:focus + .custom-checkbox > .custom-checkbox-before{
        outline: 3px solid #9BB537;
        border-radius: 2px;
        outline-offset: -3px; 
    }

    .checkbox:checked + .custom-checkbox > .custom-checkbox-after{
        opacity: 1;
    }
    .checkbox:checked + .custom-checkbox > .custom-checkbox-before{
        opacity: 0;
    }

    .container-for-modal{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .user-container{
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 232px;
        margin-right: auto;
    }
    .cont-sum{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .icon{
        fill: #ffffff;
    }
    .list-name-container{
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .list-name{
        display: -webkit-box;
        margin: 0;
        max-width: 232px;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .number-container{
        width: 183px;
        margin-right: 10px;
    }
    .list-number-container{
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .list-number{
        max-width: 183px;
        margin: 0;  
        margin-left: auto;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    
    .button-container{
        height: 100%;
        margin-top: 30px;
    }

    .btn { 
        display: inline-block;
        display: inline;
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
    .btn-large { 
        padding: 5px; 
        font-size: 13px; 
        line-height: normal; 
        -webkit-border-radius: 5px; 
        -moz-border-radius: 5px; 
        border-radius: 5px; 
    }
    .btn:hover { 
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
    .btn-primary, .btn-primary:hover { 
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); 
        color: #ffffff; 
    }
    .btn-primary { 
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
    .btn-primary:hover, .btn-primary:active, .btn-primary.active{ 
        filter: none; 
        background-color: #4a77d4;
    }
    .btn-block { 
        width: 60px; 
        height: 25px;
        display:block; 
    }

* { -webkit-box-sizing:border-box; 
    -moz-box-sizing:border-box; 
    -ms-box-sizing:border-box;
    -o-box-sizing:border-box; 
    box-sizing:border-box; 
    }
`