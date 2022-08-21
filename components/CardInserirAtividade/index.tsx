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
const Container2 = styled.View`
  position: absolute;
  width: 55%;
  height: 9%;
  margin-top: 10%;
  margin-left: 3%;
  display: flex;
  background: #c0ccda;
`;
const AvatarContainer = styled.View`
  position: relative;
  width: 120px;
  height: 150px;
  align-items: center;
  margin-bottom: 58px;
  height: 15%;
  margin-top: 5%;
  margin-left: 12%;
`;
const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  margin-left: 24%;
  margin-top: 1%;
  margin-bottom: 9px;
  display: flex;
`;

const TextOne = styled.Text`
  position: absolute;
  text-align: center;
  font-weight: bold;
  margin-top: 4%;
  margin-left: 33%;
`;
const TextTwo = styled.Text`
  position: absolute;
  text-align: center;
  font-weight: bold;
  margin-left: 33%;
  margin-top: 10%;
`;

export default function PointsReportComponents() {
  return (
    <Container>
      <Container2>
        <Avatar source={require("../../assets/images/inserirTitulos.png")} />

        <TextOne>INSERIR</TextOne>
        <TextTwo>ATIVIDADES</TextTwo>
      </Container2>
      <BackButton />
    </Container>
  );
}
