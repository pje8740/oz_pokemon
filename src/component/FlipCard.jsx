import { useState } from "react";
import styled from "styled-components";

const FlipImageContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: ${(props) =>
    props.flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const FrontImage = styled.img`
  width: 100px;
  height: 100px;
  backface-visibility: hidden;
  position: absolute;
`;

const BackImage = styled.img`
  width: 100px;
  height: 100px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <FlipImageContainer flipped={flipped}>
        <FrontImage src={front} />
        <BackImage src={back} />
      </FlipImageContainer>
      <button onClick={() => setFlipped((prev) => !prev)}>뒤집기</button>
    </>
  );
}
