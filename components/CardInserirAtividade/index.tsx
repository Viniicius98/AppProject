import React from "react";
import styled from "styled-components/native";
import AppLogo from "../Header/Applogo";
import HomeIcon from "../HomeIcon";

const Container = styled.View`
  margin-left: -45.2%;
  width: 180%;
  height: 80%;
  display: flex;
<<<<<<< HEAD
  margin-top: -62%;
=======
  margin-top: -21%;
>>>>>>> vinicius_branch
  position: absolute;
`;
const AvatarContainer = styled.View`
  background: #c0ccda;
  width: 100%;
  align-items: center;
  margin-bottom: 58px;
<<<<<<< HEAD
  height: 15%;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 50px;
  margin-right: 66%;
=======
  
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 50%;
>>>>>>> vinicius_branch
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
<<<<<<< HEAD
  margin-top: -65px;
  position: absolute;
=======
  margin-top: -65.0px;
  position: absolute;
  
`;

const TextOne = styled.Text`
  text-align: center;
  font-weight: bold;
  margin-right: 35%;
  margin-top: -15%;
`;
const TextTwo = styled.Text`
  text-align: center;
  font-weight: bold;
  margin-right: 32%;
  margin-top: 0%;
>>>>>>> vinicius_branch
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
      <Logo source={require("../../assets/images/logoapp.png")} />
        <Avatar source={require("../../assets/images/inserirTitulos.png")} />
<<<<<<< HEAD
      </AvatarContainer>
          <HomeTop>
                  <HomeIcon />
              </HomeTop>
      <TextOne>INSERIR</TextOne>
      <TextTwo>ATIVIDADES</TextTwo>
=======
        
        </AvatarContainer>
        
      <TextOne>INSERIR</TextOne>
      <TextTwo>ATIVIDADES</TextTwo>
      
>>>>>>> vinicius_branch
    </Container>
  );
}
