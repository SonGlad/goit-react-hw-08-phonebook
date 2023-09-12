import { styled } from "styled-components";


export const CountrySearchStyled = styled.div`

.icon-cont{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: -15px;
}
.icon{
    fill: #fff;
    /* stroke: #fff; */
}
.text-search{
  font-size: 20px;
}
.custom-select {
  position: relative;
  display: inline-block;

}
.country-form{
    width: 340px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
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
  overflow-y:auto;
  position: absolute;
  top: 80%;
  left: 0;
  z-index: 9;
  height: 190px;
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
    display: block;
    width: 100%;
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