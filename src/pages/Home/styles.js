import styled from "styled-components";

import Background from "../../assets/bg-1.svg"

export const Conteiner = styled.div`  

background: url("${Background}");
background-size: cover;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;

height: 100vh;

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
border-radius: 61px 61px 0px 0px;

padding: 50px 36px;
height: 100%;
`

export const H1 = styled.h1`
    
    line-height: 40px;
    font-size: 34px;
    font-weight: bold;
    text-align: center;
    color: white;

    margin-bottom: 60px;
`

export const InputLabel = styled.p`

    font-weight: bold;
    font-weight: 100;
    font-size: 18px;
    letter-spacing: -0.408px;
    line-height: 22px;
    color: white;

    margin-left: 25px;
    margin-bottom: 1px;
`
export const Input = styled.input`  

    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 35px;

    border-radius: 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.25);
    border: none;
    outline: none;

    font-size: 24px;
    line-height: 28px;
    font-weight: 100;
    color: white;

    &::placeholder{
        color: white;
        opacity: 0.5;
    }
`
export const Button = styled.button`  

width: 342px;
height: 74px;
border-radius: 14px;

border: none;
background: rgba(0, 0, 0, 0.8);

font-weight: bold;
font-size: 17px;
line-height: 28px;

color: white;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

margin-top: 50px;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.6;
}
`

    
