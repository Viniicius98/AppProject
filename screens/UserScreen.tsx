import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import axios from "axios";

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

export default function UserScreen() {
  const [token, setToken] = useState("");
  const [soma, setSoma] = useState(0);
  const [user, setUser] = useState("Sdarlan");
  const [cpf, setCPF] = useState("28863720720");

  const handleSignInPress = async () => {
    setSoma((tokenCount) => tokenCount + 1);
    setTimeout(() => {
      setToken((token) => (token = ""));
    }, 2000);
  };

  useEffect(() => {
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
  }, []);

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
        <SubmitButton
          title="Entrar"
          color="#B8977E"
          onPress={handleSignInPress}
        />
      </ContainerButton>

      <Text style={{ marginLeft: 170, marginTop: -240 }}>{soma}</Text>
      <Text style={{ marginLeft: 120, marginTop: 0 }}>Usuário: {user}</Text>
      <Text style={{ marginLeft: 10, marginTop: 0, fontWeight: "bold" }}>
        Token do Usuário: {token}
      </Text>
    </SafeAreaView>
  );
}
