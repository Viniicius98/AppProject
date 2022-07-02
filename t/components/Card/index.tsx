import React from 'react';
import { Image } from 'react-native';
import { Text, View } from '../Themed';
import styled from 'styled-components/native';

const Container = styled.View`
    background: #fff;
`
const Title = styled.View`
    background: #b8977e;
    align-items: center;
    justify-content: center;
    font-size: 20;
`
const TitleText = styled.Text`
    font-weight: bold;
    color: white;
    text-align: center;
    font-size: 12px;
`

const CardBanner = styled.Image`
    width: 100%;
    height: 90px;
`
const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50;
    position: absolute;
    margin-top: -25px;
`
const AvatarContainer = styled.View`
    position: relative;
    width: 100%;
    align-items: center;
    margin-bottom: 25px;
`
export default function Card() {
  return (
    <Container>
        <Title>
            <TitleText>PERFIL DO MAGISTRADO</TitleText>
        </Title>
        
        <CardBanner source={require("../../assets/images/background.png")} />
        <AvatarContainer>
            <Avatar source={require("../../assets/images/avatar.jpg")} />
        </AvatarContainer>
        
        <Text style={{fontWeight: "bold", textAlign:"center"}}>Dra. Helena Herth</Text>
        <Text style={{fontSize: 9, textAlign:"center", marginBottom: 5 }}>Diretora do Departamento de Aperfeiçoamento de Magistrados</Text>
    </Container>
  )
}
