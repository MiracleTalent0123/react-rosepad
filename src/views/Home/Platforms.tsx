import PlatformCard from "components/Platform";
import { PLATFORMS } from "mock";
import styled from "styled-components";
import rose1 from "../../assets/images/Roses/rose1.png";
import Slider from "react-slick";

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
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
  animation: rose 10s linear infinite;
`;

const SliderContainer = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const ItemsContainer = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const Platforms = () => {
  return (
    <Container>
      <Title>Innovative Platform</Title>
      <Image src={rose1} />
      <Items>
        <SliderContainer>
          <Slider
            {...{
              infinite: true,
              className: "center",
              centerMode: true,
              slidesToShow: 5,
              centerPadding: "0px",
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
              speed: 1000,
            }}
          >
            {PLATFORMS.map((i, index) => (
              <PlatformCard key={index} {...i} />
            ))}
            {PLATFORMS.map((i, index) => (
              <PlatformCard key={index} {...i} />
            ))}
            {PLATFORMS.map((i, index) => (
              <PlatformCard key={index} {...i} />
            ))}
            {PLATFORMS.map((i, index) => (
              <PlatformCard key={index} {...i} />
            ))}
            {PLATFORMS.map((i, index) => (
              <PlatformCard key={index} {...i} />
            ))}
          </Slider>
        </SliderContainer>
        <ItemsContainer>
          {PLATFORMS.map((i, index) => (
            <PlatformCard key={index} {...i} />
          ))}
        </ItemsContainer>
      </Items>
    </Container>
  );
};

export default Platforms;
