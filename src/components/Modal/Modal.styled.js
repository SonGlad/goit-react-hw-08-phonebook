import styled from "styled-components";


export const BackdropModalStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.8);
    
    
    .modal{
        position: relative;
        padding: 20px;
        padding-top: 35px;
        border-radius: 20px;
        min-width: 600px;
        min-height: 150px;
        background: #092756;
        background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
        background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
        background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
        background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
        background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
        line-height: 1.5;
        transition: min-height 350ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .modal-open-for-form{
        min-height: 770px;
    }

    .info-container{
        display: flex;
        gap: 15px;
    }

    .close-btn{
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 0;
        outline: none;
        border: none;
        line-height: 0.7;
        background-color: transparent;
        cursor: pointer;
        stroke: #ffffff;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
        &:hover,
        &:focus{
        stroke:  #9BB537;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1.1) rotate(90deg);
        transform-origin: center;
        }
    }

    .user-container{
        margin-right: 10px;
        width: 295px;
        margin-right: auto;
        font-weight: 700;
        font-size: 30px;
    }
    .cont-sum{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .icon{
        fill: #ffffff;
        width: 45px;
        height: 40px;
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
    }
    .number-container{
        width: 295px;
        font-weight: 700;
        font-size: 30px;
    }
    .list-number-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .list-number{
        margin: 0;  
        margin-left: auto;
    }

    .btn-cont{
        width: 100%;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .update{
        justify-content: flex-end;
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
        height: 30px;
        display:block; 
    }

* { -webkit-box-sizing:border-box; 
    -moz-box-sizing:border-box; 
    -ms-box-sizing:border-box;
    -o-box-sizing:border-box; 
    box-sizing:border-box; 
    }

    .update-form{
        display: flex;
        align-items: flex-end;
        justify-content: center;
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
        height: 0;
        width: calc(100% - 40px);
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        padding-top: 0;
        padding-bottom: 0px;
        transition: height 350ms cubic-bezier(0.4, 0, 0.2, 1),
        padding-top 350ms cubic-bezier(0.4, 0, 0.2, 1),
        padding-bottom 350ms cubic-bezier(0.4, 0, 0.2, 1),
        visibility 350ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 350ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .update-form-visible{
        height: 550px;
        padding-top: 35px;
        padding-bottom: 75px;
        opacity: 1;
        visibility: visible;
    }
`