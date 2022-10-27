import React from "react";
import styled from "styled-components/native";
import AppLogo from "./Applogo";
import EmerjLogo from "./EmerjLogo";

const HeaderContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 12%;
  background: #1e2d3e;
  border-top-width: 1px;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  margin-top: 18%;
`;

export default function Header(props: any) {
  return (
    <HeaderContainer>
      <EmerjLogo />
      
    </HeaderContainer>
  );
}
