import brandIcon from "assets/icons/brand.svg";
import logoIcon from "assets/icons/logo.svg";
import menuIcon from "assets/icons/menu.svg";
import ROUTES from "constants/Routes";
import { useDispatch } from "react-redux";
import { toggleNavMenu } from "store/ui";
import styled from "styled-components";
import IconBtn from "./IconBtn";
import NavItem from "./NavItem";
import RedLogo from "../assets/images/launch.png";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1000;
  background: none !important;
`;

const Branding = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 0 1rem;
`;
const Brand = styled.img.attrs({ src: brandIcon })`
  width: 7rem;
  filter: invert(1);
`;

const Logo = styled.img.attrs({ src: logoIcon })`
  width: 2rem;
  filter: invert(1);
  &:hover {
    content: url(${RedLogo});
    filter: none;
  }
`;

const Routes = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1.6rem;
`;

const Options = styled.div`
  padding: 1rem;
  padding-top: 0;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  gap: 1.6rem;

  span {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    &:first-child {
      @media (max-width: 1024px) {
        display: none;
      }
    }

    &:last-child {
      display: none;
      z-index: 1;
      @media (max-width: 1024px) {
        display: block;
      }
    }
  }
`;

const Button = styled.button`
  background: none;
  outline: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 0.5rem 2rem;
  color: white;
  font-family: "Nasalization";
  cursor: pointer;

  &::before {
    content: "APP";
  }
  &:hover::before {
    content: "Coming soon";
  }
  &:hover {
    background: white;
    color: #ff0089;
  }
`;

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Branding>
        <Logo />
        <Brand />
      </Branding>

      <Options>
        <span>
          <Routes>
            {ROUTES.map((e) => (
              <NavItem key={e.id} {...e} />
            ))}
          </Routes>
          <Button></Button>
        </span>
        <span>
          <IconBtn icon={menuIcon} onClick={() => dispatch(toggleNavMenu())} />
        </span>
      </Options>
    </Container>
  );
};

export default Header;
