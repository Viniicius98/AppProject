import React from "react";
import styled from "styled-components/native";

const ImageContainer = styled.View`
  width: 100%;
  height 820%;
  margin-left: -170%;
  margin-bottom: 750px;
`;
const LogoIcon = styled.Image`
  width: 125px;
  height: 125px;
  margin-top: -38%;
  margin-left: 126%;
  margin-bottom: 50%;
`;
export default function AppLogo(props: any) {
  return (
    <ImageContainer>
      <LogoIcon source={require("../../../assets/images/logoapp.png")} />
    </ImageContainer>
  );
}
