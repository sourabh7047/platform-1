import React from "react";
import styled from "styled-components";


const GlassDiv = styled.div`
  position: relative;
  /* width: 80px; */
  width: ${(props) => props.width || "50px"};
  /* height: 80px; */
  height: ${(props) => props.height || "50px"};
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

  @media (max-width: 475px) {
    height: 6.8rem !important;
    width: 6.8rem !important;
    font-size: 1.8rem;
  }

  border: 2px solid #fff;
  border-radius: 5px;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2),
    0 0 9px 3px rgba(255, 255, 255, 0.2);

`;

export default GlassDiv;