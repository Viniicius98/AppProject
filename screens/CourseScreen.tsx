import React from "react";
import styled from "styled-components/native";
import { RootTabScreenProps } from "../types";
import CourseComponents from "../components/CourseComponents";
import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

export default function Course({ navigation }: RootTabScreenProps<"Course">) {
  const { state, dispatch } = useContext(InputValueContext);

  const Container = styled.View`
    height: 100%;
    margin-top: -5.9%;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
  `;

  const ConteinerHeader = styled.View`
    width: 100%;
    height: 20%;

    margin-top: 4%;

    margin-left: 0%;
  `;

  const ConteinerReport = styled.View`
    width: 100%;
    height: 90%;
    margin-top: 68.8%;
    margin-left: 0%;
  `;

  return (
    <Container>
      <ConteinerHeader>
        <Header />
      </ConteinerHeader>

      <ConteinerReport>
        <CourseComponents />
      </ConteinerReport>
    </Container>
  );
}
