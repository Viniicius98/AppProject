import React from "react";
import styled from "styled-components/native";
import BackButton from "../BackButton";

const Container = styled.View`
  position: absolute;
  margin-left: -39%;
  width: 180%;
  height: 100%;
  display: flex;
  margin-top: -62%;
  margin-bottom: 50%;
`;
const AvatarContainer = styled.View`
  background: #c0ccda;
  width: 100%;
  align-items: center;
  margin-bottom: 58px;
  height: 14%;
  margin-left: 2.5%;
`;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 66%;
  max-width: 80%;
  max-height: 80%;
  margin-top: 1%;
  margin-bottom: 9px;
  display: flex;
`;

const TextOne = styled.Text`
  width: 10%;
  font-size: 17px;
  text-align: center;
  font-weight: bold;
  margin-left: 23%
  margin-top: -14%;

`;

const HomeTop = styled.View`
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: -17%;
  margin-left: -1%;
`;

export default function CardPoints() {
  return (
    <Container>
      <AvatarContainer>
        <Avatar source={require("../../assets/images/meusPontos.png")} />
      </AvatarContainer>
      <TextOne>PONTOS</TextOne>
      <HomeTop>
        <BackButton />
      </HomeTop>
    </Container>
  );
}
