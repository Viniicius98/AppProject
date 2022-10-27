import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styled from "styled-components/native";

const Container = styled.View`
  background: #fff;
`;
const Title = styled.View`
  background: #b8977e;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const TitleText = styled.Text`
  font-weight: bold;
  color: white;
  text-align: center;
  font-size: 12px;
`;

const CardBanner = styled.Image`
  width: 100%;
  height: 60px;
`;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  margin-top: -25px;
`;
const AvatarContainer = styled.View`
  position: relative;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;

export default function CardPerfilMagistrado(props: any) {
  const nome = props.nome.substring(1, props.nome.length - 1);
  const lotacao = props.lotacao.substring(1, props.lotacao.length - 1);

  // console.log(nome);
  console.log(lotacao);

  return (
    <Container>
      <Title>
        <TitleText>PERFIL DO MAGISTRADO</TitleText>
      </Title>

      <CardBanner source={require("../../assets/images/background.png")} />
      <AvatarContainer>
        <Avatar source={require("../../assets/images/avatar.jpg")} />
      </AvatarContainer>

      <Text style={{ fontWeight: "bold", textAlign: "center" }}>
        Dr(a) {nome}
      </Text>
      <Text style={{ fontSize: 9, textAlign: "center", marginBottom: 5 }}>
        {lotacao}
      </Text>
    </Container>
  );
}
