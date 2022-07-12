import React from 'react';
import { Image, TextInputComponent } from 'react-native';
import { Text, View } from '../Themed';
import styled from 'styled-components/native';

const Container = styled.View`
    background: #c0ccda;
    margin-left: -45%;
    width: 150%;
    height: 70px;
    display: flex;

    
`

const Avatar = styled.Image`
    width: 60px;
    height: 70px;
    margin-right: 30%;
    margin-top: 4px; 
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
    position: absolute;
    text-align: center;
    font-weight: bold;
    margin-top:5%;
    margin-bottom:5%;
    margin-left:15%;



`

//*const TextDois = styled.Text`
//*text-align: center;
//*font-weight: bold;
//*margin-left: -12%;
//*margin-top: 0%;`

export default function Card() {
  return (
    <Container>
        
        
        
        <AvatarContainer>
            <Avatar source={require("../../assets/images/inserirTitulos.png")} />
        </AvatarContainer>
    
        <TextUm>INSERIR TÍTULOS</TextUm>
        
     
        
    </Container>
  )
}
