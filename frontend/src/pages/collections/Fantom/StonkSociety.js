import React from 'react'
import styled from 'styled-components'
import { Jumbotron } from '../../../components/commons/Jumbotron'
import { Jumboproject } from '../../../components/commons/Jumboproject'
import { FrontCard } from '../../../components/commons/FrontCard'
import AboutCollectionCard from '../../../components/commons/AboutCollectionCard'
import MintCollectionCard from '../../../components/commons/MintCollectionCard'
import SocialStrip from '../../../components/commons/SocialStrip'

const StonkSociety = () => {
  return (
    <Wrapper>
      <Jumboproject
        title='The Stonk Society'
        text='A Hold2Earn NFT Project on the Fantom Blockchain'
      />

      <SocialsWrapper>
        <SocialStrip />
      </SocialsWrapper>

      <ContentWrapper>
        <MintCollectionCard />

        <AboutCollectionCard aboutContent='3,333 unique & randomly generated Stonks living on the Fantom Blockchain, looking to disrupt the NFT ecosystem with frequent airdrops for holding Stonks!' />
      </ContentWrapper>

      <Jumbotron
        title='Roadmap'
        text='Learn what the project is building for the community'
      />
    </Wrapper>
  )
}

export default StonkSociety

const Wrapper = styled.div`
  height: auto;
`
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`
const SocialsWrapper = styled.div`
  margin-top: 50px;

  @media (max-width: 1400px) {
    margin-top: 0;
  }
`
