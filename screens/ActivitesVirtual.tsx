import React from "react";
import styled from "styled-components/native";
import { RootTabScreenProps } from "../types";
import InserirTitulosComponents from "../components/ScreenComponents/InsertTitlesScreen/InserirTitulosComponents";
import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";
import Header from "../components/Header";
import ActivitesVirtual from "../components/ScreenComponents/ActivitesVirtual";

export default function Virtual({
  navigation,
}: RootTabScreenProps<"Virtual">) {
  const { state, dispatch } = useContext(InputValueContext);

  const Container = styled.View`
    flex: 1;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
    background: #1e2d3eee;
    margin-top: -50px;
  `;

  return (
    <Container>
      <ActivitesVirtual />
    </Container>
  );
}
