import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import CardCourse from "../../../Cards/CardCourse";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Text } from "react-native";
import apiTokenQuery from "../../../../services/apiTokenQuery";

const BackgroundContainer = styled.SafeAreaView`
  flex: 1;
  background: #343f4b;
`;

const ImageBackground = styled.Image`
  height: 30%;
  width: 100%;
  margin-top: -0%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
`;

const ContentItems = styled.View`
  flex: 2;
  max-width: 100%;
  max-height: 72%;
  margin-top: 21%;
  flex-direction: row;
  align-items: flex-end;
`;
const ContainerList = styled.View`
  width: 90%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-top: auto;
  background: #fff;
`;
const ContainerAvaibleCourses = styled.View`
  width: 100%;
  height: 50%;
  margin-top: auto;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
`;
const TitleAvaibleCourses = styled.View`
  width: 50%;
  height: 50%;
  margin-top: auto;
  border-bottom-width: 5px;
  border-bottom-color: #b8977e;
`;
const ContainerRegisteredCourses = styled.View`
  width: 100%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-top: auto;
`;
const TitleRegisteredCourses = styled.View`
  width: 50%;
  height: 50%;
  margin-top: auto;
  border-bottom-width: 5px;
  border-bottom-color: #b8977e;
`;

export default function CourseComponents() {
  const [token, setToken] = useState("");
  const [cursos, setCursos] = useState("");
  const [cursosCad, setCursosCad] = useState("");

  const getToken = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("@accessToken");
      if (accessToken) {
        setToken(accessToken);
        // console.log(token);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível acessar o token");
    }
  };

  useEffect(() => {
    getToken();
    if (token) {
      avaibleCourses(token);
      registeredCourse(token);
    }
  }, [getToken]);

  const registeredCourse = async (token: any) => {
    try {
      const courseCad = await apiTokenQuery.get(
        `/magistrado/inscricoes/77359194768`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // const list = lista.data[0].descricao;
      const curso = courseCad.data;
      setCursosCad(curso);

      // console.log(curso);
    } catch (error) {
      console.log("catch acessar cursos");
      Alert.alert("Erro", "Não foi possível acessar os Cadastrados");
    }
  };

  const avaibleCourses = async (token: any) => {
    try {
      const course = await apiTokenQuery.get(`/evento/lista/77359194768`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      // const list = lista.data[0].descricao;
      const curso = course.data;
      setCursos(curso);

      // console.log(curso);
    } catch (error) {
      console.log("catch acessar cursos");
      Alert.alert(
        "Erro",
        "Não foi possível acessar os cursos Cursos Disponivéis"
      );
    }
  };

  return (
    <>
      <BackgroundContainer>
        <CardCourse />
        <ImageBackground
          source={require("../../../../assets/images/background.png")}
        />
        <ContentItems>
          <ContainerList>
            <TitleAvaibleCourses>Cursos Disponíveis</TitleAvaibleCourses>
            <ContainerAvaibleCourses>
              {/* <Text>{cursos}Disponiveis</Text> */}
            </ContainerAvaibleCourses>
            <TitleRegisteredCourses>Cursos Cadastrados</TitleRegisteredCourses>
            <ContainerRegisteredCourses>
              {/* <Text>{cursosCad}Cadastrados</Text> */}
            </ContainerRegisteredCourses>
          </ContainerList>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
