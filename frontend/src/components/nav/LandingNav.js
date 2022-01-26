import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoText from "../../assets/nftg-text.svg";
import NFTGLogo from "../../assets/nftg-horizontal-logo.svg";
import { ShineButton } from "../Buttons/ShineButton";

function LandingNav() {
  return (
    <NavWrap>
      <LogoName src={LogoText} />
      <HorizontalLogo src={NFTGLogo} />
      <ContentWrapper>
        <ContentList>
          <ContentItem>
            <Link to="/discover">
              {" "}
              <ShineButton> Discover</ShineButton>
            </Link>
          </ContentItem>

          <ContentItem showOnMedia={true}>
            <ShineButton>Enter App</ShineButton>{" "}
          </ContentItem>
        </ContentList>
      </ContentWrapper>
    </NavWrap>
  );
}

export default LandingNav;

const Div = styled.div``;

const NavWrap = styled.nav`
  height: 15vh;
  display: flex;
  justify-content: space-beyween;
`;

const LogoName = styled.img`
  margin: 10px;
  margin-left: 20px;
  width: 250px !important;
  height: 80px !important;

  @media (max-width: 990px) {
    display: none;
  }
`;

const HorizontalLogo = styled.img`
  display: none;

  @media (max-width: 990px) {
    display: flex !important;
    justify-content: center;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const ContentList = styled.ul`
  display: flex !important;
  /* flex-wrap: wrap !important; */
  align-items: center;
`;

const ContentItem = styled.li`
  list-style: none;
  padding: 0px 20px;

  @media (max-width: 832px) {
    display: none;
  }
`;
