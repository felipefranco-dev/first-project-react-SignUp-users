import styled from "styled-components";

import Background from "../../assets/bg-2.svg"

export const Conteiner = styled.div`  

background: url("${Background}");
background-size: cover;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;

min-height: 100vh;
height: 100%;
`

export const Image = styled.img`  

width: 414px;

margin-top: 50px;
`
export const ConteinerItens = styled.div`  

display: flex;
flex-direction: column;
justify-content: center;

background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
);
backdrop-filter: blur(45px);
border-radius: 61px 61px 0px 0px;

padding: 50px 36px;
height: 100%;
min-height: calc(100vh - 234.41px);
`

export const H1 = styled.h1`
    
    line-height: 40px;
    font-size: 34px;
    font-weight: bold;
    text-align: center;
    color: white;

    margin-bottom: 60px;
`

export const Button = styled.button`  

width: 342px;
height: 74px;
border-radius: 14px;

border: 1px solid #FFFFFF;
background: transparent;

font-weight: bold;
font-size: 17px;
line-height: 28px;

color: white;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

margin-top: 100px;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.6;
}

img {
    transform: rotateY(180deg);
}
`
export const User = styled.li `

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 342px;
    height: 58px;
    margin-top: 20px;

    border-radius: 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.25);

   p {
    font-size: 24px;
    line-height: 28px;
    font-weight: 100;
    color: white;
   }

   button{
    background: none;
    border: none;
    cursor: pointer;
   }

   img{

   }
    `
    
