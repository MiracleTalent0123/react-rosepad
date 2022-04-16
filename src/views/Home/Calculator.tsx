import GlowContainer from "components/GlowContainer";
// import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  padding: 5rem 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 1.7rem 1.7rem 0 1.7rem;
`;

const Body = styled.div`
  padding: 0 1.7rem;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;

const Title = styled.h1.attrs({ id: "scroller" })`
  font-family: "Nasalization";
  font-weight: 300;
  line-height: 45px;
`;

const Subtitle = styled.p`
  font-family: "Nasalization";
  opacity: 0.36;
`;

const Description = styled.h3`
  line-height: 30px;
  font-size: 18px;
  font-weight: 100;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #fff;
  padding: 0.5rem 1.5rem;
  color: #ff0089;
  font-size: 12px;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
`;

export default () => {
  return (
    <Container>
      <GlowContainer>
        <Header>
          <Title>EARLY PROJECT BACKING FRO EVERYONE</Title>
        </Header>
        <Body>
          <Description>
            The highest tier stacker of the RosePad RPAD token and liquidity
            providers receive the highest level of benefits. This mechanism
            combined with RoseApes NFTs and time-based staking makes our Rosepad
            platform innovative, liquid and easily accessible to everyone.
          </Description>
          <Button>Read More</Button>
        </Body>
      </GlowContainer>
    </Container>
  );
};
