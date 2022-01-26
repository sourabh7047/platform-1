import React from "react";
import styled from "styled-components";

// TO ARRANGE THE ICONS HORIZONTALLY ON A STRIP USE THIS COMPONENT
const GlassyIconsStrip = ({ children, flexDirection, padding }) => {
  return (
    <ListIcon>
      <WrapGlassyIcons flexDirection={flexDirection} padding={padding}>
        {children}
      </WrapGlassyIcons>
    </ListIcon>
  );
};

const Div = styled.div``;

const WrapGlassyIcons = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection || "row"};
  padding: ${(props) => props.padding || "16px"};
  z-index: 2;
`;

const ListIcon = styled.li`
  position: relative;
  list-style: none;
`;

export default GlassyIconsStrip;
