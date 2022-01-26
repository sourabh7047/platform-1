import React from 'react'
import styled from 'styled-components'

export const FrontCard = ({ children }) => (
  <Div>
    <Card>{children}</Card>
  </Div>
)

const Div = styled.div``

const Card = styled.div`
  background-color: rgba(86, 194, 50, 0.8);
  height: auto !important;
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 30px !important;
  border-radius: 20px;
  backdrop-filter: blur(2px);
  background-color: rgba(200, 0, 255, 0.194);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 5px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 5px rgba(40, 40, 40, 0.35) solid;
  border-right: 5px rgba(40, 40, 40, 0.35) solid;

  display: block;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
