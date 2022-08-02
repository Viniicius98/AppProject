import React, { useState } from "react";
import styled from "styled-components/native";
import CardAtividade from "../CardInserirAtividade";
import Dropdown from "../Dropdown";

const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  background: #1e2d3eee;
  position: relative;
`;

const ImageBackground = styled.Image`
  height: 24%;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
`;

const ContentItems = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;
const DropdownItems = styled.View`
  width: 100%;
  height: 450px;
`;

const IconsItems = styled.View`
  width: 100%;
  height: 575px;
  margin-left: -68%;
`;

export default function InserirAtividadeComponents() {
  return (
    <>
      <BackgroundContainer>
        <ImageBackground
          source={require("../../assets/images/background.png")}
        />
        <ContentItems>
          <DropdownItems>
            <Dropdown />
          </DropdownItems>

          <IconsItems>
            <CardAtividade />
          </IconsItems>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
