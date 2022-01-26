import React from 'react'
import styled from 'styled-components'

const AboutCollectionCard = ({ aboutContent }) => {
  return (
    <Div>
      <Card>
        <h2>About</h2>
        <p>{aboutContent}</p>
      </Card>
    </Div>
  )
}

export default AboutCollectionCard


const Div = styled.div`
`

const Card = styled.div`
 height: 300px;
 width: 500px;
  display: block;
  padding: 30px;
  /* font-size: 20px; */
  /* line-height: 30px; */

  color: black;
    // display: flex;
    // justify-content: center;
    // align-items: center;

    gap: 20px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    background-color: rgba(200,0,255, 0.194);
    border: 5px rgba(255,255,255,0.4) solid;
    border-bottom: 5px rgba(40,40,40,0.35) solid;
    border-right: 5px rgba(40,40,40,0.35) solid;



    box-shadow: 0 0 20px #fff, -5px 0 10px #0ff, 5px 0 10px #0ff;


  @media (max-width: 1400px){
   width: 100%;
   margin-bottom: 50px;
 }
  
  `
