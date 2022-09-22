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
  margin-top: 13%;
  margin-left: 3%;
  display: flex;
  background: #c0ccda;
`;
const BackContainer = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 4%;
  margin-left: -41%;
 
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

export default function CardCourse() {
  return (
    <Container>
      <Container2>
        <Avatar source={require("../../assets/images/cursos.png")} />

        <TextOne>CURSOS</TextOne>
        <TextTwo>EMERJ</TextTwo>
      
      </Container2>
      <BackContainer>
      <BackButton />
      </BackContainer>
      
    </Container>
  );
}
