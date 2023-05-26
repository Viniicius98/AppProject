import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import CardCourse from "../../../Cards/CardCourse";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, FlatList, ScrollView, StyleSheet, Text } from "react-native";
import apiTokenQuery from "../../../../services/apiTokenQuery";

import { useNavigation } from "@react-navigation/native";


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
  align-items: center;
`;

const ContainerTitleCourse = styled.View`
  background: #c0ccda;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  width: 100%;
  height: 40px;
  margin-top: 0%;
  align-items: flex-start;
`;
const TextCourse = styled.Text`
  font-size: 17px;
  font-weight: bold;
  padding-top: 1%;
  padding-left: 5%;
  color: #343f4b;
`;
const ContainerCourse = styled.View`
  width: 100%;
  height: 90%;
  justify-content: center;
  align-items: center;
  margin-left: 0%;
`;

const Course = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ButtonCustom = styled.TouchableOpacity`
  background: #d9d9d9;
  margin-top: 5%;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

export default function CourseComponents() {
  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const [cursos, setCursos] = useState([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const avaibleCourses = async (token: any) => {
    try {
      const course = await apiTokenQuery.get(`/evento/lista/78749395734`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const list = course.data;

      setCursos(list);
    } catch (error) {
      console.log("catch acessar cursos");
      Alert.alert(
        "Erro",
        "Não foi possível acessar os cursos Cursos Disponivéis"
      );
    }
  };

  // const Item = ({ item }: any) => (

  // );

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

  const renderItem = ({ item, index }: any) => {
    return (
      <ScrollView style={styles.container}>
        <ButtonCustom
          onPress={() => {
            navigation.navigate("CourseInfo", {
              nome: item,
            });
          }}
        >
          <Course>{item.titEven}</Course>
        </ButtonCustom>
      </ScrollView>
    );
  };

  useEffect(() => {
    getToken();
    if (token) {
      avaibleCourses(token);

      //registeredCourse(token);
    }
  }, [avaibleCourses]);

  // const registeredCourse = async (token: any) => {
  //   try {
  //     const courseCad = await apiTokenQuery.get(
  //       `/magistrado/inscricoes/77359194768`,
  //       {
  //         method: "GET",
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     // const list = lista.data[0].descricao;
  //     const curso = courseCad.data;
  //     setCursosCad(curso);

  //     // console.log(curso);
  //   } catch (error) {
  //     console.log("catch acessar cursos");
  //     Alert.alert("Erro", "Não foi possível acessar os Cadastrados");
  //   }
  // };

  return (
    <>
      <BackgroundContainer>
        <CardCourse />
        <ImageBackground
          source={require("../../../../assets/images/background.png")}
        />

        <ContentItems>
          <ContainerList>
            <ContainerTitleCourse>
              <TextCourse>CURSOS DISPONÍVEIS</TextCourse>
            </ContainerTitleCourse>
            <ContainerCourse>
              <FlatList
                data={cursos}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                extraData={selectedId}
              />
            </ContainerCourse>
            {/* <Text>{cursos}Disponiveis</Text> */}
          </ContainerList>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
