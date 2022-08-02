import React from "react";
import styled from "styled-components/native";

const ImageContainer = styled.View`
  width: 100%;
  height 820%;
  margin-left: -170%;
  margin-bottom: 750px;
`;
const LogoIcon = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 100%;
  margin-left: 70%;
  margin-bottom: 10%;
  position: absolute;
`;
export default function AppLogo(props: any) {
  return (
    <ImageContainer>
      <LogoIcon source={require("../../../assets/images/logoapp.png")} />
    </ImageContainer>
  );
}
