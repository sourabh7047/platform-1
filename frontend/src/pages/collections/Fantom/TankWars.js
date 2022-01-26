import React from 'react'
import styled from 'styled-components'
import { Jumbotron } from '../../../components/commons/Jumbotron'
import { FrontCard } from '../../../components/commons/FrontCard'
import AboutCollectionCard from '../../../components/commons/AboutCollectionCard'
import MintCollectionCard from '../../../components/commons/MintCollectionCard'
import SocialStrip from '../../../components/commons/SocialStrip'

import { Container } from 'react-bootstrap'

const TankWars = () => {
  return (
    <Wrapper>
      <Jumbotron
        title="Tank Wars"
        text="Some description" />


      <ContentWrapper>
        <MintCollectionCard />

        <AboutCollectionCard
          aboutContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />

      </ContentWrapper>

      {/* <SocialsWrapper>
        <SocialStrip />


      </SocialsWrapper> */}


    </Wrapper >
  )
}

export default TankWars

const Wrapper = styled.div`
 height: auto;
`
const ContentWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 height: auto;

 @media (max-width: 1400px){
   flex-direction: column;
 }
`
const SocialsWrapper = styled.div`
margin-top: 50px;

@media (max-width: 1400px){
 margin-top: 0;
}
`