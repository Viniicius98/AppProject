import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import CourseInfo from "../components/ScreenComponents/CourseScreen/CourseScreenInfoComponents";
import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";

export default function Course({ route }: any) {
  const Container = styled.View`
    flex: 1;
    margin-top: -14%;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
  `;

  return (
    <Container>
      <CourseInfo nome={route.params.nome} />
    </Container>
  );
}
