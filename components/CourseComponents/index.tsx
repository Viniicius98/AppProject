import React, { useState } from "react";
import styled from "styled-components/native";
import CardCourse from "../CardCourse";
import {  ScrollView } from "react-native";
import DropdownCourse from "../DropdownCourse/Dropdown";
import AppLogo from "../Header/Applogo";

const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  margin-top: -70.7%;
  background: #343F4B;
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
  height: 85%;
  margin-top: 68%;
  flex-direction: row;
  align-items: flex-end;
`;
const DropdownItems = styled.View`
  width: 100%;
  height: 350px;
  margin-bottom: 70%;
`;

const IconsItems = styled.View`
  width: 100%;
  height: 100%;
  margin-bottom: 49.9%;
  margin-left: -60%;
`;

const IconsApp = styled.View`
  width: 100%;
  height: 575px;
  margin-top: -90%;
  margin-bottom: 20%;
  margin-left: 80%;
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
