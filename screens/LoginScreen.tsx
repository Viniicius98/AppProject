import { RootTabScreenProps } from "../types";
import styled from "styled-components/native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";

import Header from "../components/Header";
import AppLogo from "../components/Header/Applogo";
import axios from "axios";
import {
  InfoIcon,
  KeyboardAvoidingView,
  NativeBaseProvider,
} from "native-base";

const BackgroundContainer = styled.View`
  width: 100%;
  height: 84.5%;
  background-color: #ffffff;
`;
const LoginBackgroundContainer = styled.View`
  width: 92%;
  height: 51%;
  margin-top: 10%;
  margin-left: 3.9%;
  background: #021831ed;
`;

const ImageBackground = styled.Image`
  position: absolute;
  height: 87%;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 12.5%;
  opacity: 0.2;
`;

const Container = styled.View`
  flex: 1;
  margin-top: -3%;
  align-items: center;
  justify-content: center;
`;
const AppContainer = styled.View`
  flex: 1;

  margin-top: -38.9%;
  margin-left: 25.5%;
`;
const ContainerTextt = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #b8977e;
  padding: 1%;
  margin-left: 6%;
`;

const ContainerTexttt = styled.View`
  height: 13%;
  background-color: #c0ccda;
  border-top-width: 1px;
  border-top-color: #8492a6;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
`;

const ContainerTextSucess = styled.Text`
  margin-top: 4%;
  margin-left: 21%;
  color: #228b22;
  font-size: 14px;
  font-weight: bold;
  padding-right: 10%;
`;
const ContainerTextError = styled.Text`
  margin-top: 4%;
  margin-left: 10%;
  font-size: 14px;
  font-weight: bold;
  color: #ff0000;
  padding-right: 10%;
`;

const ContainerTexte = styled.Text`
  color: #8492a6;
  padding-right: 35%;
  text-align: center;
  margin-top: -15%;
  margin-left: 20%;
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
  background-color: black;
`;
const ContainerButton = styled.View`
  width: 65%;
  height: 50%;
  margin-top: 52%;
  margin-left: 16.8%;
  z-index: 1;
`;

const Loading = styled.View`
  width: 100%;
  height: 50%;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 30;
  top: 55%;
`;

export default function LoginScreen({
  navigation,
}: RootTabScreenProps<"Login">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [auth, setAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [info, setInfo] = useState("");

  const authLocal = async () => {
    setError("");
    setSuccess("");
    setSuccess("Autenticando...");
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  };

  const Login = async (result: any) => {
    try {
      fetch(
        `https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/magistrado/obterdados/${password}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${result}` },
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

  const handleSignInPress = async () => {
    setError("");
    setSuccess("");
    setIsLoading(true);

    if (email.length === 0 || password.length === 0) {
      setError("Preencha usuário e senha para continuar!");
    } else {
      //aqui virá a API
      try {
        const response = await axios.get(
          `https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/acesso/obtertoken/${email}/${password}`
        );

        if (response.data) {
          setSuccess("");
          await AsyncStorage.setItem("@accessToken", response.data);
          const result = await AsyncStorage.getItem("@accessToken");
          Login(result);

          console.log(result);

          if (result) {
            setTimeout(() => {
              setIsLoading(false);
              setSuccess("Usuario Autenticado");
            }, 5000);
            authLocal();
          } else {
            console.log("não foi possivel autenticar");
          }
        } else {
          console.log("não foi possivel obter o token");
        }
      } catch (error) {
        setTimeout(() => {
          setIsLoading(false);
          setSuccess("");
          setError("Falha na autenticação");
        }, 5000);
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Header />

      <BackgroundContainer>
        {isLoading && (
          <Loading>
            <ActivityIndicator size="large" color="#8492A6" />
          </Loading>
        )}

        <LoginBackgroundContainer>
          <ContainerTexttt>
            <ContainerTextt>Login</ContainerTextt>
          </ContainerTexttt>

          <Input
            placeholder="E-mail"
            defaultValue={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
          />

          <Input
            placeholder="Senha"
            defaultValue={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            secureTextEntry
          />
          <ContainerButton>
            <SubmitButton
              title="Entrar"
              color="#B8977E"
              onPress={handleSignInPress}
            />
          </ContainerButton>

          <ImageBackground
            source={require("../assets/images/background.png")}
          />

          <ContainerTexte>Esqueceu sua senha ? </ContainerTexte>

          <ContainerTextError>{error}</ContainerTextError>
          <ContainerTextSucess>{success} </ContainerTextSucess>
        </LoginBackgroundContainer>

        <AppContainer>
          <AppLogo />
        </AppContainer>
      </BackgroundContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "-3",
    alignItems: "center",
    justifyContent: "center",
  },
});
