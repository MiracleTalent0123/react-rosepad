// import caret from "assets/icons/caret.svg";
import { T_APE_NFTS } from "mock";
import { useState } from "react";
import styled from "styled-components";
import { getMiddleIndex } from "utils/functions";
import NFTCard from "./NFTCard";
const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const Items = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardSwiper = () => {
  const items = T_APE_NFTS.slice(0, 50);

  const [onFocus] = useState(getMiddleIndex(items));
  const middle = {
    zIndex: items.length,
    transform: "translate(-50%, -50%) scale(1)",
  };

  const left = {
    zIndex: items.length - 1,
    opacity: 0.4,
    transform: `
    translate(calc(-50% - 6rem), -50%) 
    scale(0.9)
    perspective(16em)
    rotateY(0deg);`,
  };

  const right = {
    zIndex: items.length - 1,
    opacity: 0.4,
    transform: `  
    translate(calc(-50% + 6rem), -50%) 
    scale(0.9)
    perspective(16em)
    rotateY(0deg);`,
  };

  const base = {
    width: "16rem",
    height: "20rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0.6)",
  };

  return (
    <Container>
      <Items>
        {items.map((e, i) => (
          <NFTCard
            key={e?.id}
            item={e}
            styles={{
              ...base,
              ...(i === onFocus
                ? middle
                : i === onFocus - 1
                ? left
                : i === onFocus + 1
                ? right
                : null),
            }}
          />
        ))}
      </Items>
    </Container>
  );
};

export default CardSwiper;
