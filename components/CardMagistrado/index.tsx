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
export default function CardPerfilMagistrado(user: any) {
  //console.log(user.nome)
  //console.log(user.idade)
  return (
    <Container>
      <Title>
        <TitleText>PERFIL DO MAGISTRADO{user.idade}</TitleText>
      </Title>

      <CardBanner source={require("../../assets/images/background.png")} />
      <AvatarContainer>
        <Avatar source={require("../../assets/images/avatar.jpg")} />
      </AvatarContainer>

     <View>
      <Text>{user.idade}</Text>
      <Text>{user.name}</Text>
      </View>
      
    </Container>
  );
}
