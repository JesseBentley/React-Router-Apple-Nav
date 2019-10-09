import React from "react";
import AppleIcons from "../../AppleIcons";
import styled from "styled-components";

const Justify = styled.div`
  width: 70%;
  max-height: 600px
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.2rem;
  // background: black;
  padding: 0 5%;
  color: black;
`;

const ImgSize = styled.div`
  margin: 10% auto;
  height: 125px;
  width: 125px;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export default function MusicSubNavComponents(props) {
  return (
    <Justify>
      {AppleIcons.music.map(item => (
        <div>
          <ImgSize>
            <img src={item.url} alt={item.name} />
          </ImgSize>
          <p>{item.name}</p>
        </div>
      ))}
    </Justify>
  );
}
