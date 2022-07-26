import React from 'react';
import { Image } from 'react-native';
// import { View } from '../../Themed';
import styled from 'styled-components/native';

const ImageContainer = styled.View`
    width: 30%;
    height: 60px;
    align-items: center;
    justify-content: center;
    background: #1E2D3E;
`
const ImageIcon = styled.Image`
    width: 150px;
    height: 150px;
    margin-top: 90%;
    margin-left: -60%;
   
`
export default function AppLogo(props:any){

    return (
        <ImageContainer>
            <ImageIcon source={require("../../../assets/images/logoapp.png")}/>
        </ImageContainer>
    )
}
