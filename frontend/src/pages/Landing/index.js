import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import PlainLogo from "../../assets/nftg-plain.svg";
import LandingNav from "../../components/nav/LandingNav";
import "./landing.css";
import { ShineButton } from "../../components/Buttons/ShineButton";
import {
  GlassyIcons,
  GlassyIconsStrip,
} from "../../components/Buttons/GlassyIcons";
import {
  faFacebook,
  faTwitter,
  faDiscord,
  faMediumM,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Landing() {
  return (
    <Div>
      <LandingNav />
      <CenterContainer>
        <Row lg={2} md={1} sm={1} xs={1} xxs={1}>
          <Col>
            <BiggerText>NFTs Simplified</BiggerText>
            <hr />
            <br />
            <SmallerText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SmallerText>
            <br />

            <GlassyIconsStrip style={{ padding: "0px", margin: "0px" }}>
              <GlassyIcons routepath="/test" color="#fff" icon={faTwitter} />
              <GlassyIcons routepath="/test" color="#fff" icon={faFacebook} />
              <GlassyIcons routepath="/test" color="#fff" icon={faDiscord} />
              <GlassyIcons routepath="/test" color="#fff" icon={faMediumM} />
              <GlassyIcons routepath="/test" color="#fff" icon={faYoutube} />
            </GlassyIconsStrip>
          </Col>

          <Col>
            <FloatingLogo src={PlainLogo} />
          </Col>
        </Row>
      </CenterContainer>
    </Div>
  );
}

export default Landing;

const Div = styled.div`
  align-items: center;
  width: 100%;
`;

const rotate = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0px, 30px); }
    100%   { transform: translate(0, -0px); }  
`;

const BiggerText = styled.h2`
  font-family: "Montserrat", sans-serif !important;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 92px;
  color: #170e3e;
  text-align: left;
  width: auto;
  margin-top: 5rem;
`;

const SmallerText = styled.h3`
  font-family: Lato, sans-serif;
  font-size: 1.2em;
  font-style: normal;
  line-height: 30px;
  color: #170e3e;
  text-align: left;
  width: 100%;
`;

const FloatingLogo = styled.img`
  margin-top: 7rem;
  margin-left: 12rem;
  width: 17rem !important;
  height: 17rem !important;
  display: flex !important;
  align-items: center;
  animation: ${rotate} 6s infinite;

  @media (max-width: 990px) {
    display: none !important;
  }
`;

const CenterContainer = styled(Container)`
  max-width: 1280px;
  margin: 0 auto;
`;

const ButtonRoute = styled(Link)``;

const TextContent = styled.div`
  height: 85vh;
  width: 60%;
`;

const Image = styled.div`
  display: flex !important;
  height: auto;
  width: 40%;
  margin-left: 100px;
  align-items: center;
`;
