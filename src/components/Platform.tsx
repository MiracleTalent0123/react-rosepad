// import timeIcon from "assets/icons/time.svg";
// import { PROJECT_STATUS } from "constants/consts";
// import { startCase } from "lodash";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  -webkit-box-shadow: inset 0 0 1.5rem ${({ theme }) => theme.primary}80,
    0 1rem 3rem ${({ theme }) => theme.primary}50;
  -moz-box-shadow: inset 0 0 1.5rem ${({ theme }) => theme.primary}80,
    0 1rem 3rem ${({ theme }) => theme.primary}50;
  box-shadow: inset 0 0 1.5rem ${({ theme }) => theme.primary}80,
    0 1rem 3rem ${({ theme }) => theme.primary}50;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  cursor: pointer;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 3rem;
  padding: 1rem;
  padding-bottom: 0;
  background-color: black;

  &:hover {
    width: 105%;
    height: 105%;
    &.description {
      font-size: 14px;
    }
  }
`;

const Head = styled.div`
  height: 100%;
  min-height: 7rem;
  line-height: 18px;
`;

const Title = styled.h5`
  font-family: "Nasalization";
  color: #ff0089;
  margin-top: 1rem;
`;

const SubTitle = styled.p`
  font-family: "Nasalization";
  font-size: 12px;
`;

const Description = styled.p`
  font-family: "Nasalization";
  margin-top: 0.5rem;
  font-size: 12px;
  line-height: 20px;
  opacity: 0.5;
`;

const Img = styled.img`
  width: 30%;
  @media (max-width: 1024px) {
    width: 20%;
  }
`;

const PlatformCard = ({ img, title, subtitle, desc }: any) => {
  return (
    <Container>
      <Head>
        <Img src={img} />
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Description className="description">{desc}</Description>
      </Head>
    </Container>
  );
};

export default PlatformCard;
