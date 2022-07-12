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
const ImageSource = styled.Image`
    width: 72px;
    height: 65px;
    border-width: 1px;
`
export default function ImageLogo(props:any){

    return (
        <ImageContainer>
            <ImageSource source={require("../../../assets/images/logo_emerj_principal.png")}/>
        </ImageContainer>
    )
}
