import React from "react";
import styled from "styled-components/native";
import { RootTabScreenProps } from "../types";
import InserirAtividadeComponents from "../components/InserirTitulosComponents";
import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";

export default function Record({
  navigation,
}: RootTabScreenProps<"Record">) {
  const { state, dispatch } = useContext(InputValueContext);

  const Container = styled.View`
    height: 100%;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
  `;
  return (
    <Container>
      
    </Container>
  );
}
