import React from "react";
import styled from "styled-components/native";
import AppLogo from "../Header/Applogo";
import HomeIcon from "../HomeIcon";

const Container = styled.View`
  margin-left: -45.2%;
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
  height: 15%;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 50px;
  margin-right: 66%;
  max-width: 80%;
  max-height: 80%;
  margin-top: 2%;
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
  margin-right: 49%;
  margin-top: -17%;
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
  margin-left: -4%;

`;

export default function PointsReportComponents() {
  return (
    <Container>
      <AvatarContainer>
        <Avatar source={require("../../assets/images/inserirTitulos.png")} />
      </AvatarContainer>
          <HomeTop>
                  <HomeIcon />
              </HomeTop>
      <TextOne>INSERIR</TextOne>
      <TextTwo>ATIVIDADES</TextTwo>
    </Container>
  );
}
