import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import axios from "axios";
import { RootTabScreenProps } from "../types";
import LoginScreen from "./LoginScreen";

const Container = styled.View`
  height: 100%;
  margin-top: -9.4%;
  background: #fff;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
`;
const Input = styled.TextInput`
  height: 45px;
  width: 260px;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: black;
  background-color: #e0e6ed;
  border-radius: 5px;
  padding-left: 20px;
  margin-top: 22%;
  margin-bottom: -22%;
  margin-left: 10%;
  z-index: 1;
  opacity: 0.5;
`;

const SubmitButton = styled.Button`
  width: 50%;
  height: 50%;
`;
const ContainerButton = styled.View`
  width: 65%;
  height: 50%;
  margin-top: 51%;
  margin-left: 16.8%;
  z-index: 2;
`;
const ContainerButton2 = styled.View`
  width: 65%;
  height: 50%;
  margin-top: 20%;
  margin-left: 16.8%;
`;
const ContainerButton3 = styled.View`
  width: 65%;
  height: 50%;
  margin-top: -10%;
  margin-left: 16.8%;
`;

export default function UserScreen({ navigation }: RootTabScreenProps<"User">) {
  const [token, setToken] = useState("");
  const [info, setInfo] = useState("");
  const [user, setUser] = useState("Sdarlan");
  const [cpf, setCPF] = useState("28863720720");

  const handleSignInPress = async () => {
    try {
      fetch(
        `https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/acesso/obtertoken/${user}/${cpf}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setToken(data);
          console.log(token);
        });
    } catch {
      console.log("Não obteve Resposta");
    }

  };
  const handleSignInPress2 = async () => {
    try {
      fetch(
        `https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/magistrado/obterdados/${cpf}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setInfo(data);
          console.log(info);
        });
    } catch {
      console.log("Não obteve Resposta");
    }

  };
  


  /* {useEffect(() => {
    fetch(
      `https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/acesso/obtertoken/${user}/${cpf}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setToken(data);
        console.log(data);
      })

      .catch(() => alert("Não Obteve o Token"));
  }, []);}*/


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Input
        placeholder="Usuario"
        defaultValue={user}
        onChangeText={(newUser) => setUser(newUser)}
      />
      <Input
        placeholder="CPF"
        defaultValue={cpf}
        onChangeText={(newCpf) => setCPF(newCpf)}
        secureTextEntry
      />

      <ContainerButton>
        <ContainerButton3>
          <SubmitButton
            title="Obter Token"
            color="#B8977E"
            onPress={handleSignInPress}
          />
        </ContainerButton3>
        <ContainerButton2>
          <SubmitButton
            title="Obter Dados"
            color="#B8977E"
            onPress={handleSignInPress2}
          />
        </ContainerButton2>
      </ContainerButton>

      <Text style={{ marginLeft: 10, marginTop: -290, fontWeight: "bold" }}>
        Token do Usuário: {token}
      </Text>
      <Text style={{ marginLeft: 40, marginTop: 70, fontWeight: "bold" }}>
        Nome: {JSON.stringify(info.nome)}
      </Text>
      <Text style={{ marginLeft: 40, marginTop: 5, fontWeight: "bold" }}>
        Email: {JSON.stringify(info.email)}
      </Text>
      <Text style={{ marginLeft: 40, marginTop: 0, fontWeight: "bold" }}>
        Lotação: {JSON.stringify(info.lotacao)}
      </Text>
    </SafeAreaView>
  );
}
