import CardSwiper from "components/CardSwiper";
import styled from "styled-components";
// import { TransitionGroup, Transition } from "react-transition-group";
// import TransitionGroup from 'react-transition-group';
// import Calculator from "./Calculator";
import rose3 from "../../assets/images/Roses/rose3.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 3rem 0 0 0;
  padding: 5rem 0 3rem 0;
  position: relative;
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  text-align: center;
`;

const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
    grid-auto-rows: 40rem;
  }
`;

const Column = styled.div`
  width: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 10;
  left: 0;
  width: 70px;
  height: 70px;
`;

// const defaultStyle = {
//   transition: `transform 500ms ease-in-out`,
//   transform: "translateX(-100%)",
// };

// const transitionStyles = styled.div`
//   transition: 'transform 1000ms ease-in-out',
//   transform: "translateX(-100%)"
//   entering: { transform: "translateX(0)" },
//   entered: { transform: "translateX(0)" },
//   exiting: { transform: "translateX(-100%)" },
//   exited: { transform: "translateX(-100%)" }
// `;

export default ({ scroll }: any) => {
  return (
    <Container>
      <Title>Tiers</Title>
      <Image src={rose3} />
      <Body>
        <Column>
          <CardSwiper />
        </Column>
        <Column>
          {/* {scroll > 7
            ? <TransitionGroup.Transition in={true} timeout={1000}>
              <Calculator />
            </TransitionGroup.Transition>
            : ''} */}
        </Column>
      </Body>
    </Container>
  );
};
