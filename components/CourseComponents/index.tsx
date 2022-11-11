import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import CardCourse from "../CardCourse";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLogo from "../Header/Applogo";
import { Alert, Text } from "react-native";
import DropdownCourse from "../DropdownCourse";

const BackgroundContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: 0%;
  background: #343f4b;
`;

const ImageBackground = styled.Image`
  height: 24%;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
`;

const ContentItems = styled.View`
  width: 100%;
  height: 85%;
  margin-top: 68%;
  flex-direction: row;
  align-items: flex-end;
`;
const DropdownItems = styled.View`
  width: 100%;
  height: 350px;
  margin-bottom: 70%;
`;

const IconsItems = styled.View`
  width: 100%;
  height: 100%;
  margin-bottom: 49.9%;
  margin-left: -60%;
`;

const IconsApp = styled.View`
  width: 100%;
  height: 575px;
  margin-top: -90%;
  margin-bottom: 20%;
  margin-left: 80%;
`;

export default function CourseComponents() {
  const [token, setToken] = useState("");
  const [curso, setCurso] = useState("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("@accessToken");
        if (accessToken) {
          setToken(accessToken);
          acessarCursos(token);
          console.log(token);
        }
      } catch (error) {
        Alert.alert("Erro", "Não foi possível acessar o token");
      }
    };

    getToken();

    // const acessarCursos = () => {
    //   useEffect(() => {
    //     fetch(
    //       `https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/evento/lista/28863720720`,
    //       {
    //         method: "GET",
    //         headers: { Authorization: `Bearer ${token}` },
    //       }
    //     )
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setCurso(data);
    //         console.log(curso);
    //       })
    //       .catch(() => {
    //         Alert.alert("Erro", "Não foi possível carregar os dados");
    //       });
    //   });
    // };

    const acessarCursos = async (token: any) => {
      try {
        const lista = await axios.get(
          `https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/evento/encontros/007397`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(token);
        const list = lista.data[0].descricao;

        console.log(list);
      } catch (error) {
        Alert.alert("Erro", "Não foi possível acessar os cursos");
        console.log(error);
      }
    };
  });

  return (
    <>
      <BackgroundContainer></BackgroundContainer>
    </>
  );
}
