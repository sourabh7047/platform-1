import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import mainLogo from "../../assets/nftg-logo.svg";
import * as AiIcons from "react-icons/ai";

/* 
  Sidebar component renders a fixed sidebar on medium and large devices
  Sidebar component renders a toggleable sidebar which cover the entire screem on small and extra small edvices
*/
const Sidebar = ({ showSidebar, closeSidebar, sidebarToggle }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={showSidebar}>
          <SidebarWrap>
            <NavIcon to="/">
              <img
                src={mainLogo}
                alt="main logo"
                style={{
                  height: "150px",
                }}
              />
            </NavIcon>

            <HR />
            <Wrapper>
              {SidebarData.map((item, index) => {
                return (
                  <SubMenu
                    item={item}
                    key={index}
                    closeSidebar={closeSidebar}
                  />
                );
              })}
            </Wrapper>
          </SidebarWrap>

          <CLoseIcon onClick={sidebarToggle} />
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;

const SidebarNav = styled.nav`
  /* border-radius: 10px; */
  backdrop-filter: blur(0px);
  background-color: rgba(66, 79, 255, 0.407);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 2px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;
  box-shadow: 0 0 20px #fff, -5px 0 10px #0ff, 5px 0 10px #0ff;

  width: 250px;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  transition: 150ms;

  @media (max-width: 992px) {
    width: 100vw;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    background-color: rgba(66, 79, 255, 1) !important;
    z-index: 100;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const NavIcon = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* margin-left: 2rem; */
  font-size: 2rem;
  align-items: center;
`;

const CLoseIcon = styled(AiIcons.AiOutlineClose)`
  cursor: pointer;
  height: 35px;
  width: 35px;
  margin-top: 25px;
  margin-right: 10px;
  display: none;

  @media (max-width: 992px) {
    display: inline;
  }
`;

const HR = styled.hr`
  border-top: 10px solid #170e3e;
`;

const Wrapper = styled.div`
  overflow: auto;
  max-height: calc(100vh - 220px);
`;
