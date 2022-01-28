import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import GlassyButton from "../Buttons/GlassyButton";
import GlassyStrip from "../Buttons/GlassyStrips";
import GlassyDiv from "../Buttons/GlassyDiv";
import { Container } from "react-bootstrap";

const MintCollectionCard = ({}) => {
  const [counter, setCounter] = useState(0);
  

  return (
    <Div>
      <Card>
        <Wrapper>
          <h2>Mint Now</h2>
          <GlassyStrip>
            <GlassyDiv
              style={{ flex: "1", marginLeft: "21px" }}
              height="9rem"
              width="10rem"
            ></GlassyDiv>
            <GlassyStrip>
              <GlassyDiv height="9rem" width="9rem">
                {counter}
              </GlassyDiv>
              <GlassyStrip
                styled={{ flex: "1" }}
                flexDirection={"column"}
                padding="5px"
              >
                <GlassyButton
                  margin="5px"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </GlassyButton>
                <GlassyButton
                  margin="5px"
                  disabled={counter === 0}
                  onClick={() => setCounter(counter - 1)}
                >
                  -
                </GlassyButton>
              </GlassyStrip>
            </GlassyStrip>
          </GlassyStrip>
        </Wrapper>
      </Card>
    </Div>
  );
};

export default MintCollectionCard;

const Div = styled.div``;

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1400px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 775px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Card = styled.div`
  height: 300px;
  width: 500px;
  border-radius: 20px;
  border: 2px solid black;

  display: block;
  padding: 30px;

  color: black;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  gap: 20px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  background-color: rgba(200, 0, 255, 0.194);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 5px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 5px rgba(40, 40, 40, 0.35) solid;
  border-right: 5px rgba(40, 40, 40, 0.35) solid;

  box-shadow: 0 0 20px #fff, -5px 0 10px #0ff, 5px 0 10px #0ff;

  @media (max-width: 1400px) {
    width: 100%;
    margin-bottom: 50px;
    flex-direction: row;
  }
`;