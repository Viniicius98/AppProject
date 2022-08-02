import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin-left: -65%;
  width: 180%;
  height: 70px;
  display: flex;
  margin-top: -7%;
  position: absolute;
`;

const Avatar = styled.Image`
  width: 60px;
  height: 70px;
  margin-left: -10%;
  max-width: 80%;
  max-height: 80%;
  margin-top: 4%;
  display: flex;
`;
const AvatarContainer = styled.View`
  background: #c0ccda;
  width: 100%;
  align-items: center;
  margin-bottom: 70px;
  margin-left: -20%;
`;
const TextUm = styled.Text`
  text-align: center;
  font-weight: bold;
  margin-left: -18%;
  margin-top: -17%;
`;

export default function CardAtividade() {
  return (
    <Container>
      <AvatarContainer>
        <Avatar source={require("../../assets/images/inserirTitulos.png")} />
      </AvatarContainer>

      <TextUm>INSERIR ATIVIDADES</TextUm>
    </Container>
  );
}
