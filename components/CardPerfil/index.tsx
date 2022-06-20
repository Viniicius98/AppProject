import React from 'react';
import { Image } from 'react-native';
import { Text, View } from '../Themed';
import styled from 'styled-components/native';


const Container = styled.View`
    background: #fff;
    border-radius: 5px;
    height: 70%;
    width: 90%;
`
const Title = styled.View`
    background: #C0CCDA;
    align-items: left;
    justify-content: center;
    font-size: 20;
    height: 50px;
`
const TitleText = styled.Text`
    font-weight: bold;
    color: #343F4B;
    text-align: left;
    font-size: 22px;
`

const CardBanner = styled.Image`
    width: 100%;
    height: 190px;
`
const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 50;
    position: absolute;
    margin-top: -25px;
`
const AvatarContainer = styled.View`
    position: relative;
    width: 100%;
    align-items: center;
    margin-bottom: 40px;
`
const SubmitButton = styled.Button`
  width: 200px;
  height: 10px;
  margin-top: 80%
`

export default function Card() {
  return (
    <Container>
        <Title>
            <TitleText>Perfil do Magistrado</TitleText>
        </Title>
        
        <CardBanner source={require("../../assets/images/background.png")} />
        <AvatarContainer>
            <Avatar source={require("../../assets/images/avatar.jpg")} />
        </AvatarContainer>
        
        <Text style={{fontWeight: "bold", textAlign:"center", marginTop: 30}}>Dra. Helena Herth</Text>
        <Text style={{fontSize: 15, textAlign:"center", marginTop: 10 }}>Diretora do Departamento de Aperfeiçoamento de Magistrados (DEAMA)</Text>
        <SubmitButton title="Editar" color="#B8977E" />
    </Container>
  )
}
