import React from 'react';
import { Image, TextInputComponent } from 'react-native';
import { Text, View } from '../Themed';
import styled from 'styled-components/native';

const Container = styled.View`
    background: #c0ccda;
    margin-left: -45%;
    width: 150%;
    display: flex;

    
`

const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    margin-left: 3%;
    max-width: 70%;
    max-height: 90%;


`
const AvatarContainer = styled.View`
    position: relative;
    width: 100%;
    align-items: center;
    margin-bottom: 70px;
    margin-left: -20%;
  
`
const TextUm = styled.Text`
text-align: center;
font-weight: bold;
margin-left: -20%;
margin-top: -19%;
`

const TextDois = styled.Text`
text-align: center;
font-weight: bold;
margin-left: -12%;
margin-top: 0%;
`
export default function Card() {
  return (
    <Container>
        
        
        
        <AvatarContainer>
            <Avatar source={require("../../assets/images/acoesEducacionais.png")} />
        </AvatarContainer>
    
        <TextUm >AÇÕES</TextUm>
        
        <TextDois>EDUCACIONAIS</TextDois>
        
    </Container>
  )
}
