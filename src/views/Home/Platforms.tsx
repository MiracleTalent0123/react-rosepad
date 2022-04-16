import ProjectCard from "components/ProjectCard";
import { PROJECT_STATUS } from "constants/consts";
import { omit } from "lodash";
import { T_PROJECTS } from "mock";
import styled from "styled-components";
import rose1 from '../../assets/images/Roses/rose1.png';

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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
  grid-auto-rows: 12rem;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
`

export default () => {
  return (
    <Container>
      <Title>Innovation Platforms</Title>
      <Image src={rose1} />
      <Items>
        {
          T_PROJECTS.map((e) => ({
            ...omit(e, ["deadline", "allocation"]),
            status: PROJECT_STATUS.soldout,
          }))
            .slice(0, 5)
            .map((i) => (
              <ProjectCard key={i.id} {...i} />
            ))
        }
      </Items>
    </Container>
  );
};
