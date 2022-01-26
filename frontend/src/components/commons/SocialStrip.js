import React from 'react'
import styled from 'styled-components'
import { GlassyIcons, GlassyIconsStrip } from '../Buttons/GlassyIcons'
import {
  faFacebook,
  faTwitter,
  faDiscord,
  faGithub,
  faMediumM,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

const SocialStrip = () => {
  return (
    <Div>
      <Strip>
        <GlassyIcons routepath='/test' color='#fff' icon={faTwitter} />
        {/* <GlassyIcons routepath='/test' color='#fff' icon={faFacebook} /> */}
        <GlassyIcons routepath='/test' color='#fff' icon={faDiscord} />
        {/* <GlassyIcons routepath='/test' color='#fff' icon={faGithub} /> */}
        <GlassyIcons routepath='/test' color='#fff' icon={faMediumM} />
        {/* <GlassyIcons routepath='/test' color='#fff' icon={faLinkedinIn} /> */}
      </Strip>
    </Div>
  )
}

export default SocialStrip

const Div = styled.div``

const Strip = styled.div`
  height: auto;
  overflow: auto;
  border-radius: 20px;
  color: black;

  display: flex;
  justify-content: space-around;
  /* justify-content: center;
    align-items: center; */
  border-radius: 10px;
  backdrop-filter: blur(2px);
  background-color: rgba(200, 0, 255, 0.194);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 5px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 5px rgba(40, 40, 40, 0.35) solid;
  border-right: 5px rgba(40, 40, 40, 0.35) solid;

  margin-bottom: 50px !important;
  padding: 30px;
  box-shadow: 0 0 20px #fff, -5px 0 10px #0ff, 5px 0 10px #0ff;

  margin-bottom: 50px !important;
  padding: 30px;
`
