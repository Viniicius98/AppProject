import React from "react";
import styled from "styled-components/native";

const ImageContainer = styled.View`
  width: 100%;
  height 100%;
  margin-left: -60%;
  margin-bottom: 280%;
`;
const LogoIcon = styled.Image`
  

  width: 125px;
  height: 125px;
  margin-top: -38%;
  
`;
export default function AppLogo(props: any) {
  return (
    <ImageContainer>
      <LogoIcon source={require("../../../assets/images/logoapp.png")} />
    </ImageContainer>
  );
}
