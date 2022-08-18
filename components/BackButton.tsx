import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ImageBack = styled.Image`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  margin-top: 10%;
  margin-left: 70%;
  background: red;
`;
const ContainerBack = styled.View`
  position:relative;
  width:100%
  height:50%;
  margin-top: 25%;
  margin-left: -50%;
  
  
`;
const Container = styled.View`
  position:relative;
  width:100%
  height:50%;
  margin-top: 25%;
  margin-left: -50%;
  background:white;
  
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
