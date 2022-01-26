import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SubMenu = ({ item, closeSidebar }) => {

  /*
    subMenu component renders the collapsable subnav on any nested nav item
  */

  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={(item.subNav ? showSubnav : closeSidebar)}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>


        {/* This div is rendering the collapse and expand arrow icons on a nested nav item */}
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>

      {/* Rendering the submenu list for any expandable menu item */}
      {
        subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} onClick={closeSidebar}>
              {item.icon}
              <SidebarLabel >{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })
      }
    </>

  );
};

export default SubMenu;


const SidebarLink = styled(Link)`
  display: flex;
  color: #170E3E;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;


  &:hover{
      background-color: rgba(255,255,255,0.4);
      color: white;
      box-shadow: #4AF1F2 0px 2px 4px, #4AF1F2 0px 7px 13px -3px, #4AF1F2 0px -3px 0px inset;
      transition: transformY(10px);
	-webkit-transition: all 0.3s ease-in-out;
	   -moz-transition: all 0.3s ease-in-out;
	        transition: all 0.3s ease-in-out;
    }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  /* background: #414757; */
  background-color: rgba(28,28,28, 0.2);

  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #170E3E;
  font-weight: bold;

  &:hover {
    background-color: rgba(255,255,255,0.2);
    box-shadow: #966fd6 0px 2px 4px, #966fd6 0px 7px 13px -3px, #966fd6 0px -3px 0px inset;
    -webkit-transition: all 0.3s ease-in-out;
	   -moz-transition: all 0.3s ease-in-out;
	    transition: all 0.3s ease-in-out;

    color: white;
    cursor: pointer;

  }
`;
