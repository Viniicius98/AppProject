import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin-left: -45.2%;
  width: 180%;
  height: 80%;
  display: flex;
  margin-top: -21%;
  position: absolute;
`;
const AvatarContainer = styled.View`
  background: #c0ccda;
  width: 100%;
  align-items: center;
  margin-bottom: 58px;
  
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 50%;
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
`;

export default function CardAtividade() {
  return (
    <Container>
      
      <AvatarContainer>
      <Logo source={require("../../assets/images/logoapp.png")} />
        <Avatar source={require("../../assets/images/inserirTitulos.png")} />
        
        </AvatarContainer>
        
      <TextOne>INSERIR</TextOne>
      <TextTwo>ATIVIDADES</TextTwo>
      
    </Container>
  );
}
