import PlatformCard from "components/Platform";
import { PLATFORMS } from "mock";
import styled from "styled-components";
import rose1 from "../../assets/images/Roses/rose1.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  align-self: center;
  text-transform: uppercase;
  margin-bottom: 5rem;
`;

const Items = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1.5rem;
  grid-auto-rows: 15.5rem;

  @media (max-width: 1024px) {
    grid-auto-rows: 14rem;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
  animation: rose 10s linear infinite;
`;

const Platforms = () => {
  return (
    <Container>
      <Title>Innovative Platform</Title>
      <Image src={rose1} />
      <Items>
        {PLATFORMS.map((i, index) => (
          <PlatformCard key={index} {...i} />
        ))}
      </Items>
    </Container>
  );
};

export default Platforms;
