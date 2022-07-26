import { Text } from "react-native";
import React from "react";
import io from "socket.io-client";
import styled from "styled-components/native";
import { RootTabScreenProps } from "../types";
import AcoeseduComponents from "../components/AcoeseduComponents";
import { useContext, useEffect } from "react";
import { InputValueContext } from "../context/InputValueContext";

export default function Chat({ navigation }: RootTabScreenProps<"Chat">) {
  const { state, dispatch } = useContext(InputValueContext);

  const Container = styled.View`
    height: 100%;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
  `;
  return (
    <Container>
      <AcoeseduComponents />
    </Container>
  );
}
