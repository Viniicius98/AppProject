import React, { useEffect, useState } from "react";
import { Alert, Button, Modal, StyleSheet } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiTokenQuery from "../../../../services/apiTokenQuery";
import { useNavigation } from "@react-navigation/native";

const BackgroundContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ContainerProgramation = styled.TouchableOpacity`
  width: 30%;
  height: 8%;
  background: #b9977e;
  margin-top: 98%;
  margin-right: 9%;
  border-radius: 10px;
  border-radius-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

const Programation = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

const ContainerModal = styled.View`
  width: 90%;
  height: 50%;
  margin-top: 50%;
  margin-left: 4%;
  border-radius: 10px;
  background: #fff;
`;
const ContainerModalTitle = styled.View`
  width: 100%;
  height: 10%;
  background: #c0ccda;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  align-items: flex-start;
  border-radius: 10px;
`;
const ModalTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  padding-top: 1%;
  padding-left: 5%;
  color: #343f4b;
`;

const ContainerDescription = styled.View`
  position: absolute;
  width: 90%;
  height: 100%;
  margin-top: 15%;
  margin-left: 5%;
  background: #d9d9d9;
  align-items: center;
`;
const Data = styled.Text`
  margin-top: 5%;
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;
const Inicio = styled.Text`
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;
const Fim = styled.Text`
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;
const Description = styled.Text`
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;

const ContainerClose = styled.View`
  width: 30%;
  margin-left: 60%;
  margin-top: 102%;
`;

export default function () {
  const [visivel, setVisivel] = useState(false);
  const [token, setToken] = useState("");
  const [data, setData] = useState("");
  const [hrIni, setHrIni] = useState("");
  const [hrFim, setHrFim] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();
  const getToken = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("@accessToken");
      if (accessToken) {
        setToken(accessToken);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível acessar o token");
    }
  };

  const programation = async (token: any) => {
    try {
      const prog = await apiTokenQuery.get(`/evento/programacao/007392`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = prog.data[0].dtProg;
      const hrIniProg = prog.data[0].hrIniProg;
      const hrFimProg = prog.data[0].hrFimProg;
      const descProg = prog.data[0].descProg;

      setData(data);
      setHrIni(hrIniProg);
      setHrFim(hrFimProg);
      setDescription(descProg);
    } catch (error) {
      console.log("catch acessar cursos");
      Alert.alert("Erro", "Não foi possível acessar a Programação");
      setTimeout(() => {
        navigation.navigate("Login");
      }, 3000);
    }
  };
  useEffect(() => {
    getToken();
    if (token) {
      programation(token);
    }
  }, [getToken]);

  return (
    <BackgroundContainer>
      <Modal animationType="slide" transparent={true} visible={visivel}>
        <ContainerModal>
          <ContainerModalTitle>
            <ModalTitle>Programação</ModalTitle>
          </ContainerModalTitle>

          <ContainerDescription>
            <Data>Data: {data}</Data>
            <Inicio>Horário de Inicío: {hrIni}</Inicio>
            <Fim>Horario de Fim: {hrFim}</Fim>
            <Description>Descrição: {description}</Description>
          </ContainerDescription>
          <ContainerClose>
            <Button
              title="Fechar"
              color="#343f4b"
              onPress={() => {
                setVisivel(false);
              }}
            />
          </ContainerClose>
        </ContainerModal>
      </Modal>
      <ContainerProgramation
        onPress={() => {
          setVisivel(true);
        }}
      >
        <Programation>Programação</Programation>
      </ContainerProgramation>
    </BackgroundContainer>
  );
}
