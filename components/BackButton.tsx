import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ImageBack = styled.Image`
  position: absolute;
<<<<<<< HEAD
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  margin-top: 25%;
=======
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  margin-top: 17%;
>>>>>>> vinicius_branch
  margin-left: 25%;
`;
const ContainerBack = styled.View`
  position: relative;
  width: 100px;
  height: 66px;
  margin-top: 0%;
  margin-left: 0%;
`;
const Container = styled.View`
  position:relative;
  width:15%
  height:14%;
  margin-top: 10%;
  margin-left:3.4 %;

  
  
`;

export default function BackButton() {
  const navigation = useNavigation();
  const voltar = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => voltar()}>
        <ContainerBack>
          <ImageBack source={require("../assets/images/volta.png")} />
        </ContainerBack>
      </TouchableOpacity>
    </Container>
  );
}
