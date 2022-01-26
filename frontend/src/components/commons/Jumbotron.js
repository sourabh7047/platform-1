import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const Jumbotron = ({ title, text, image }) => (
  <Div>
    <Jumbo bg={image}>
      <InnerDiv class='p-5'>
        <h1
          class='display-4 fw-bold'
          style={{ animation: 'float infinite 1.5s' }}
        >
          {title}
        </h1>
        <hr />
        <p>{text}</p>
      </InnerDiv>
    </Jumbo>
  </Div>
)

const Div = styled.div``

const Jumbo = styled.div`
  margin-top: 40px;
  color: black;
  display: flex;
  /* justify-content: center;
    align-items: center; */
  gap: 20px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  ${(props) =>
    props.bg
      ? `background-image: url(${props.bg}); background-size: 100% 100%;
      background-repeat: no-repeat; color: white;`
      : ''};

  background-color: rgba(200, 0, 255, 0.194);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 5px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 5px rgba(40, 40, 40, 0.35) solid;
  border-right: 5px rgba(40, 40, 40, 0.35) solid;

  margin-bottom: 50px !important;
  /* display: block; */
  padding: 30px;
  box-shadow: 0 0 20px #fff, -5px 0 10px #0ff, 5px 0 10px #0ff;
`

const InnerDiv = styled.div`
  padding: 50px;
`
