import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import TSS from '../../assets/tss.gif'
import FantomLogo from '../../assets/ftm.svg'

export const Jumboproject = ({ title, text, image }) => (
  <Div>
    <Jumbo bg={image}>
      <OuterDiv>
        <InnerDiv class='InnerDiv'>
          <h1
            class='display-4 fw-bold'
            style={{ animation: 'float infinite 1.5s' }}
          >
            {title}
          </h1>
          <hr />
          <br />
          <p>
            3333 unique Hold2Earn Stonks living on the Fantom Blockchain,
            looking to disrupt the Fantom NFT Ecosystem with frequent airdrops
            for holders!
          </p>
        </InnerDiv>

        <InnerDiv>
          <ProjectImage src={TSS} />
        </InnerDiv>
      </OuterDiv>

      <OuterDiv wrapit={true}>
        <P>
          <img
            src='https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-crypto-cryptocurrency-mining-soft-fill-soft-fill-juicy-fish-4.png'
            style={{ width: '30px', height: '30px' }}
          />
          &nbsp;Sold Out
        </P>

        <P>
          <img
            src={FantomLogo}
            style={{ display: 'inline', width: '30px', height: '30px' }}
          />
          &nbsp;23 FTM
        </P>

        <P>
          <img
            src='https://img.icons8.com/emoji/48/000000/calendar-emoji.png'
            style={{ display: 'inline', width: '30px', height: '30px' }}
          />
          &nbsp;18th December, 2021
        </P>
      </OuterDiv>
    </Jumbo>
  </Div>
)

const Div = styled.div``

const Jumbo = styled.div`
  /* @import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave&display=swap');

    font-family: 'Sedgwick Ave', cursive !important; */

  color: black;
  /* display: flex; */
  /* justify-content:space-between; */
  /* justify-content: center;
    align-items: center; */
  gap: 20px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
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

const OuterDiv = styled.div`
  padding: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => (props && props.wrapit ? 'flex-wrap:wrap;' : '')}
`
const InnerDiv = styled.div``

const P = styled.p`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`

const ProjectImage = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 100px;
  @media (max-width: 768px) {
    display: none;
  }
`
