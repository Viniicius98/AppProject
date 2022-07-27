import React from "react";
import styled from "styled-components/native";

const ImageContainer = styled.View`
  width: 30%;
  height: 60px;
  align-items: center;
  justify-content: center;
  background: #1e2d3e;
`;
const EmerjImage = styled.Image`
  width: 72px;
  height: 65px;
  border-width: 1px;
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
