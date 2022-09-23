import React, { useState } from "react";
import styled from "styled-components/native";
import CardAtividade from "../CardInserirAtividade";
import Dropdown from "../Dropdown";
import AppLogo from "../Header/Applogo";

const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  margin-top: -66.7%;
  background: #1e2d3eee;
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
  width: 100%;
  height: 100%;
  margin-top: 49%;
  flex-direction: row;
  align-items: flex-end;
`;
const DropdownItems = styled.View`
  width: 100%;
  height: 380px;
  margin-bottom: 71.5%;
`;

const IconsItems = styled.View`
  width: 100%;
  height: 575px;
  margin-bottom: 45.4%;
  margin-left: -60%;
`;

const IconsApp = styled.View`
  width: 100%;
  height: 575px;
  margin-top: -90%;
  margin-bottom: 20%;
  margin-left: 67%;
`;

export default function InserirTitulosComponents() {
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

            <IconsApp>
              <AppLogo />
            </IconsApp>
          </IconsItems>
        </ContentItems>

      </BackgroundContainer>
    </>
  );
}
