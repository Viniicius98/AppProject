import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import CardCourse from "../../../Cards/CardCourse";
import { View, Text, Button, StyleSheet } from "react-native";
import ModalProgramation from "../CourseComponents/ModalProgramation";
import ModalSubscription from "../CourseComponents/ModalSubscription";

const BackgroundContainer = styled.SafeAreaView`
  flex: 1;
  background: #343f4b;
`;

const ImageBackground = styled.Image`
  height: 30%;
  width: 100%;
  margin-top: -0%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
`;

const ContentItems = styled.View`
  flex: 2;
  max-width: 100%;
  max-height: 72%;
  margin-top: 20%;
  flex-direction: row;
  align-items: flex-end;
`;
const ContainerList = styled.View`
  width: 90%;
  height: 100%;
  margin-left: 4%;
  margin-right: auto;
  margin-bottom: auto;
  margin-top: -10%;
  background: #fff;
  align-items: center;
`;

const ContainerTitleCourse = styled.View`
  background: #c0ccda;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  width: 100%;
  height: 40px;
  margin-top: 0%;
  align-items: flex-start;
`;
const TextCourse = styled.Text`
  font-size: 17px;
  font-weight: bold;
  padding-top: 1%;
  padding-left: 5%;
  color: #343f4b;
`;
const ContainerCourse = styled.TouchableOpacity`
  width: 80%;
  height: 10%;
  background: #d9d9d9;
  border-bottom-width: 10px;
  border-bottom-color: #fff;
  margin-top: 5%;
  align-items: center;
  justify-content: center;
`;

const Course = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export default function CourseInfo() {
  const navigation = useNavigation();

  return (
    <>
      <BackgroundContainer>
        <CardCourse />
        <ImageBackground
          source={require("../../../../assets/images/background.png")}
        />

        <ContentItems>
          <ContainerList>
            <ContainerTitleCourse>
              <TextCourse>Compliance</TextCourse>
            </ContainerTitleCourse>
            <ModalSubscription />
          </ContainerList>
          <ModalProgramation />
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
