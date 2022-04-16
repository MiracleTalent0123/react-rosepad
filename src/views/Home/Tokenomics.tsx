import tokenomicsHorizontal from "assets/images/tokenomics-horizontal.png";
import tokenomicsVertical from "assets/images/tokenomics-vertical.png";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 3rem 0;
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Chart = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  padding: 2rem;
`;

const Image: any = styled.img`
  content: ${() => `url(${tokenomicsHorizontal})`};
  width: 100%;
  height: 100%;
  object-fit: contain;
  font-family: "Nasalization";
  max-width: 1920px;
  min-width: 320px;

  @media (max-width: 1024px) {
    content: ${() => `url(${tokenomicsVertical})`};
  }
`;

const Tokenomics = () => {
  return (
    <Container>
      <Title>Tokenomics</Title>
      <Chart>
        <Image />
      </Chart>
    </Container>
  );
};

export default Tokenomics;
