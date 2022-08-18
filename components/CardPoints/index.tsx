import React from "react";
import styled from "styled-components/native";
import AppLogo from "../Header/Applogo";
import HomeIcon from "../HomeIcon";
import { Link } from "@react-navigation/native";

const Container = styled.View`
  margin-left: -39%;
  width: 180%;
  height: 100%;
  display: flex;
  margin-top: -62%;
  position: absolute;
`;
const AvatarContainer = styled.View`
  background: #c0ccda;
  width: 100%;
  align-items: center;
  margin-bottom: 58px;
  height: 14%;
`;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 66%;
  max-width: 80%;
  max-height: 80%;
  margin-top: 2%;
  margin-bottom: 9px;
  display: flex;
`;

const TextOne = styled.Text`
  font-size: 17px;
  text-align: center;
  font-weight: bold;
  margin-right: 45%;
  margin-top: -15%;
`;

const HomeTop = styled.View`
  height: 24%;
  width: 100%;
  margin-top: -7%;
  position: absolute;
  margin-left: -16%;
`;

export default function CardPoints() {
  return (
    <Container>
      <AvatarContainer>
        <Avatar source={require("../../assets/images/meusPontos.png")} />
      </AvatarContainer>

      <HomeTop>
        <HomeIcon />
      </HomeTop>

      <TextOne>PONTOS</TextOne>
    </Container>
  );
}
