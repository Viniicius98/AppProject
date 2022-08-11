import React from "react";
import styled from "styled-components/native";
import AppLogo from "../Header/Applogo";

const Container = styled.View`
  margin-left: -45.2%;
  width: 180%;
  height: 80%;
  display: flex;
  margin-top: -55.6%;
  position: absolute;
`;
const AvatarContainer = styled.View`
  background: #c0ccda;
  width: 100%;
  align-items: center;
  margin-bottom: 58px;
  height: 15%;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 60%;
  max-width: 80%;
  max-height: 80%;
  margin-top: 3%;
  margin-bottom: 9px;
  display: flex;
`;
const Logo = styled.Image`
  width: 100.9px;
  height: 171.9px;
  max-width: 100.9%;
  max-height: 100%;
  margin-top: -65px;
  position: absolute;
`;

const TextOne = styled.Text`
  text-align: center;
  font-weight: bold;
  margin-right: 44%;
  margin-top: -16%;
`;
const TextTwo = styled.Text`
  text-align: center;
  font-weight: bold;
  margin-right: 42%;
  margin-top: 0%;
`;

export default function CardAtividade() {
  return (
    <Container>
      <AvatarContainer>
        <Avatar source={require("../../assets/images/inserirTitulos.png")} />
      </AvatarContainer>

      <TextOne>INSERIR</TextOne>
      <TextTwo>ATIVIDADES</TextTwo>
    </Container>
  );
}
