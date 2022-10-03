import React from "react";
import styled from "styled-components/native";

const ImageContainer = styled.View`
  width: 30%;
  height: 60%;
  align-items: center;
  justify-content: center;
  background: #1e2d3e;
`;
const EmerjImage = styled.Image`
  width: 67%;
  height: 135%;
  border-width: 2px;
`;

export default function EmerjLogo(props: any) {
  return (
    <ImageContainer>
      <EmerjImage
        source={require("../../../assets/images/logo_emerj_principal.png")}
      />
    </ImageContainer>
  );
}
