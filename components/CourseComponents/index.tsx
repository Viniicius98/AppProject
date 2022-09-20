import React, { useState } from "react";
import styled from "styled-components/native";
import CardCourse from "../CardCourse";
import DropdownCourse from "../DropdownCourse/Dropdown";
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
  margin-top: 39%;
  flex-direction: row;
  align-items: flex-end;
`;
const DropdownItems = styled.View`
  width: 100%;
  height: 525px;
  margin-bottom: 32%;
`;

const IconsItems = styled.View`
  width: 100%;
  height: 575px;
  margin-bottom: 40.9%;
  margin-left: -60%;
`;

const IconsApp = styled.View`
  width: 100%;
  height: 575px;
  margin-top: -90%;
  margin-bottom: 20%;
  margin-left: 67%;
`;

export default function CourseComponents() {
  return (
    <>
      <BackgroundContainer>
        <ImageBackground
          source={require("../../assets/images/background.png")}
        />

        <ContentItems>
          <DropdownItems>
            <DropdownCourse />
          </DropdownItems>

          <IconsItems>
            <CardCourse />
            <IconsApp>
              <AppLogo />
            </IconsApp>
          </IconsItems>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
