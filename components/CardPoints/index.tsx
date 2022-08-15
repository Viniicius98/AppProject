import React from "react";
import styled from "styled-components/native";
import AppLogo from "../Header/Applogo";
import HomeIcon from "../HomeIcon";

const Container = styled.View`
  margin-left: -39%;
  width: 180%;
  height: 80%;
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
const Logo = styled.Image`
  width: 120px;
  height: 120px;
  max-width: 120%;
  max-height: 120%;
  margin-top: -65px;
  position: absolute;
`;

const TextOne = styled.Text`
  font-size: 17px;
  text-align: center;
  font-weight: bold;
  margin-right: 45%;
  margin-top: -15%;
`;
const TextTwo = styled.Text`
  text-align: center;
  font-weight: bold;
  margin-right: 46%;
  margin-top: 0%;
`;

const HomeTop = styled.View`

height: 24%;
  width: 100%;
  margin-top: -8%;
  position: absolute;
  margin-left: -5%;

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
