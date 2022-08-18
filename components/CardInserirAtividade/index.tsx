import React from "react";
import styled from "styled-components/native";
import BackButton from "../BackButton";

const Container = styled.View`
  width: 180%;
  height: 80%;
  display: flex;
  margin-top: -55.6%;
  margin-left: -45.2%;
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

const TextOne = styled.Text`
  width: 13%;
  text-align: center;
  font-weight: bold;
  margin-left: 20%;
  margin-top: -62%;
`;
const TextTwo = styled.Text`
  width: 13%;
  text-align: center;
  font-weight: bold;
  margin-left: 21%;
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

      <TextOne>INSERIR</TextOne>
      <TextTwo>ATIVIDADES</TextTwo>
      <BackButton />
    </Container>
  );
}
