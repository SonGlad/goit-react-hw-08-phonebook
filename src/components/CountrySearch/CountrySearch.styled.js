import { styled } from "styled-components";


export const CountrySearchStyled = styled.div`

.icon-cont{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: -10px;
}
.icon{
    fill: #fff;
}
.text-search{
  font-size: 20px;
}
.custom-select {
  position: relative;
  display: inline-block;
  max-width: 340px;
}
.descr-text{
    font-weight: 400;
    font-size: 13px;
    color: #9BB537;
}
.below{
    margin-bottom: 20px;
    margin-left: 10px;
}

.country-form{
    width: 340px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5px;
}
.input{
    width: 340px; 
    height: 40px;
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
.input:focus { 
    box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); 
}
.options-list{
    width: 100%;
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
.custom-select .options-list {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 2px solid transparent;
    left: 0;
    height: 0px;
    top: 25%;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
    /* scale: 0; */
    transition: 
    height 0.25s ease-in-out, 
    visibility 0s ease-in-out 0.25s, 
    opacity 0s ease-in-out 0.20s, 
    z-index 0s ease-in-out 0.25s,
    /* scale 0s ease-in-out 0.25s, */
    top 0s ease-in-out 0.25s;
}

.custom-select .options-list-active{
    height: 230px;
    top: 50%;
    z-index: 1;
    visibility: visible;
    opacity: 1;
    /* scale: 1; */
    transition: 
    height 0.25s ease-in-out, 
    visibility 0s ease-in-out, 
    opacity 0.1s ease-in-out, 
    z-index 0s ease-in-out,
    /* scale 0s ease-in-out, */
    top 0s ease-in-out;
}


.custom-select .options-list .option {
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