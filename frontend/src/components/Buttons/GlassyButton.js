import React from "react";
import styled, { keyframes } from "styled-components";



const shine = keyframes`
10% {
  opacity: 1;
  top: -30%;
  left: -30%;
  transition-property: left, top, opacity;
  transition-duration: 0.7s, 0.7s, 0.15s;
  transition-timing-function: ease;
}
100% {
  opacity: 0;
  top: -30%;
  left: -30%;
  transition-property: left, top, opacity;
}
`;

const GlassButton = styled.button`
  position: relative;
  /* width: 80px; */
  width: ${(props) => props.width || "60px"};
  /* height: 80px; */
  height: ${(props) => props.height || "60px"};
  display: inline-block;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 2em;
  border: 1px solid rgba(184, 110, 110, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  transition: 0.5s;
  overflow: hidden;
  background: rgba(255, 255, 255, 0);
  margin: ${(props) => props.margin || "0px"};
  text-align: center;
  line-height: 50px;
  font-family: sans-serif;

  border: 2px solid #fff;
  border-radius: 5px !important;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.3) ,
    0 0 9px 3px rgba(255, 255, 255, 0.3) !important;

  &:after {
    animation: ${shine} 5s ease-in-out infinite;
    animation-fill-mode: forwards;
    content: "";
    position: absolute;
    top: -110%;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);

    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &:active:after {
    opacity: 0.1;
  }

  &:active {
    transform: scale(0.8);
  }
`;



export default GlassButton;
