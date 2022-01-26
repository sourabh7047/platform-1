import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import * as FaIcons from 'react-icons/fa'
import HorizontalIcon from '../../assets/nftg-horizontal-logo.svg'
import PlainLogo from '../../assets/nftg-plain.svg'

import { useDispatch, useSelector } from 'react-redux'
import { connect, disconnect } from '../../redux/blockchain/blockchainActions'
import { fetchData } from '../../redux/data/dataActions'

import twitterLogo from '../../assets/twitter.png'
import discordLogo from '../../assets/discord.png'

import { GlassyIcons, GlassyIconsStrip } from '../Buttons/GlassyIcons'
import {
  faFacebook,
  faTwitter,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'

const WalletCard = () => {
  // const [userBalance, setUserBalance] = useState(null)
  const [connButtonText, setConnButtonText] = useState('Connect')
  const dispatch = useDispatch()
  const blockchain = useSelector((state) => state.blockchain)
  // const data = useSelector(state => state.data)
  const account = blockchain.account
  useEffect(() => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account))

      if (account) {
        setConnButtonText(
          account.substring(0, 4) + '___' + account.substring(38, 42)
        )
      } else {
        setConnButtonText('Connect')
        dispatch(disconnect())
      }
    }
  }, [blockchain.smartContract, blockchain.account, dispatch, account])

  //setConnButtonText(data.name?.substring(0, 4) + "___" + data.name?.substring(38, 42));

  const handleConnectClick = (e) => {
    e.preventDefault()
    if (blockchain.account === '' || blockchain.smartContract === null) {
      dispatch(connect())
    } else {
      if (account) {
        alert(
          `You are already connected with wallet ${account}. If you wish to change it please use metamask.`
        )
      } else {
        dispatch(connect())
      }
    }
  }

  return (
    <ConnectButton
      isConnected={
        account &&
        (blockchain.account === '' || blockchain.smartContract !== null)
      }
      onClick={handleConnectClick}
    >
      {/* <img
        src={metaMaskLogo}
        alt="metamask"
        style={{ height: '50px', width: '30px' }}
      /> */}
      {connButtonText}
    </ConnectButton>
  )
}

const TopNav = ({ sidebarToggle, showSidebar }) => {
  /*
   TopNav component renders the top nav bar which holds the logo,
   social icons and burger/close icons on smaller devices and 
  */

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <HorizontalLogo src={PlainLogo} />
          </NavIcon>

          <RightPlacement>
            <SocialsWrapper>
              {/* <SocialAnchor href="#" target="_blank">
                <img
                  src={twitterLogo}
                  alt="twitter"
                  style={{
                    height: "40px",
                    width: "40px",
                    border: "2px solid black",
                    borderRadius: "20px",
                  }}
                />
              </SocialAnchor>
              <SocialAnchor href="#" target="_blank">
                <img
                  src={discordLogo}
                  alt="discord"
                  style={{
                    height: "40px",
                    width: "40px",
                    border: "2px solid black",
                    borderRadius: "20px",
                  }}
                />
              </SocialAnchor> */}

              <GlassyIconsStrip
                style={{
                  paddingTop: '1rem',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <GlassyIcons
                  routepath='/test'
                  color='#fff'
                  icon={faFacebook}
                  iconSize='xs'
                  height='50px'
                  width='50px'
                />
                <GlassyIcons
                  routepath='/test'
                  color='#fff'
                  icon={faTwitter}
                  iconSize='xs'
                  height='50px'
                  width='50px'
                />
                <GlassyIcons
                  routepath='/test'
                  color='#fff'
                  icon={faDiscord}
                  iconSize='xs'
                  height='50px'
                  width='50px'
                />
              </GlassyIconsStrip>
            </SocialsWrapper>
            <WalletCard />

            {/* only for small devices */}
            <NavIconCross to='#'>
              <FaIcons.FaBars onClick={sidebarToggle} />
            </NavIconCross>
          </RightPlacement>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default TopNav

const Nav = styled.div`
  background-color: transparent;
  position: sticky;
  top: 0;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  margin-bottom: 10px;

  @media (min-width: 992px) {
    width: 100vw;
  }
`

const NavIcon = styled(Link)`
  text-decoration: none;

  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const NavIconCross = styled(NavIcon)`
  margin-right: 10px;
  @media (min-width: 992px) {
    display: none;
  }
`

const SocialAnchor = styled.a`
  &:hover {
    opacity: 0.5;
  }
`
const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  @media (max-width: 850px) {
    display: none;
  }
`

const ConnectButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  border: ${(props) =>
    props.isConnected ? 'solid 1px #86dc3d;' : 'solid 1px red;'};
  height: 40px;
  width: 145px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: ${(props) => (!props.isConnected ? '20px;' : '15px;')};
  margin: 8px;

  &:hover {
    opacity: 0.65;
  }
`

const RightPlacement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  a {
    font-weight: 1000;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`

const HorizontalLogo = styled.img`
  height: 80px;
  display: none;

  @media (max-width: 992px) {
    display: inline;
  }
`
