import styled from "styled-components"


const Button=styled.button `
margin: 15px;
background-color:${(props)=>props.theme==="light" ? "red":"blue"};
border-radius: 6px;
border:none;
box-sizing: border-box;
padding:10px;
color: #FFFFFF;
cursor: pointer;
&:hover{
    background-color:white;
    color:#FF4742;
}
`;

export  default Button