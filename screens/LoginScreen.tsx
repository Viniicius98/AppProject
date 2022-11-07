import styled from "styled-components/native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import AppLogo from "../components/Header/Applogo";
import apiLogin from "../services/apiLogin";
import apiTokenQuery from "../services/apiTokenQuery";
import { useNavigation } from "@react-navigation/native";

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

export default function LoginScreen() {
  const [email, setEmail] = useState("API_EMERJ");
  const [password, setPassword] = useState("APIEMERJ");
  const [user, setUser] = useState("CLAUDIO");
  const [cpf, setCPF] = useState("77359194768");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loginUser, setLoginUser] = useState("");
  const [auth, setAuth] = useState<boolean>(false);
  const [auth2, setAuth2] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  const handleSignInPress = async () => {
    setError("");
    setSuccess("");
    setIsLoading(true);

    if (email.length === 0 || password.length === 0) {
      setTimeout(() => {
        setError("Preencha usuário e senha para continuar!");
      }, 3000);
    } else {
      //Chamando a Função de Login API
      Login();

      // Chamada a API , pegar token para obter dados do usuario
      try {
        const response = await apiTokenQuery.get(
          `/acesso/obtertoken/${user}/${cpf}`
        );

        if (response.data) {
          setSuccess("");
          await AsyncStorage.setItem("@accessToken", response.data);
          const token = await AsyncStorage.getItem("@accessToken");
          dataUser(token);

          // console.log(result);
          // se result receber o token, o auth2 se tornara verdadeiro
          if (token) {
            setAuth2(true);
            setTimeout(() => {
              setSuccess("Autenticando...");
            }, 3000);
          }
        }
      } catch (error) {
        setTimeout(() => {
          setIsLoading(false);
          setSuccess("");
          setError("Falha ao obter token");
        }, 3000);
        console.log(error);
      }
    }
  };

  //Funções de Chamada a API

  // Função de Login com retorno do Token

  const Login = async () => {
    try {
      const loginApi = await apiLogin.post(
        "/login/api",

        {
          senha: password,
          usuario: email,
        }
      );

      await AsyncStorage.setItem("Bearer", loginApi.headers.authorization);

      const Dbearer = await AsyncStorage.getItem("Bearer");
      const bearer = Dbearer?.substring(7);
      if (bearer) {
        authUser(bearer);
      }
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
        setSuccess("");
        setError("Falha no login");
      }, 6000);
      console.log(error);
    }
  };

  // Função de autorização de usuário com envio de token
  const authUser = async (bearer: any) => {
    try {
      const loginUser = await apiLogin.post(
        "/login/usuario",
        {
          senha: password,
          usuario: email,
        },
        { headers: { Authorization: `Bearer ${bearer}` } }
      );

      const authUser = loginUser.data.mensagem;

      if (authUser) {
        setAuth(true);
        setLoginUser(authUser);
      }
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
        setSuccess("");
        setError("Falha na autenticação");
      }, 5000);
      console.log(error);
    }
  };

  // Função para Atualizar Token
  // const refreshToken = async (bearer: any) => {
  //   try {
  //     const refToken = await apiLogin.post(
  //       `/login/atualizarToken`,
  //       {
  //         senha: "APIEMERJ",
  //         usuario: "API_EMERJ",
  //       },
  //       { headers: { Authorization: `Bearer ${bearer}` } }
  //     );
  //     const ref = refToken.data.mensagem;
  //     console.log(ref);
  //   } catch {
  //     console.log("Não obteve Resposta");
  //   }
  // };

  // Função para pegar os dados do usuário com envio do token
  const dataUser = async (token: any) => {
    try {
      const dados = await apiTokenQuery.get(`/magistrado/obterdados/${cpf}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      await AsyncStorage.setItem("Dados", JSON.stringify(dados.data.nome));
      await AsyncStorage.setItem("Lotação", JSON.stringify(dados.data.lotacao));
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
        setSuccess("");
        setError("Não foi Possivel Obter os Dados");
      }, 5000);
      console.log(error);
    }
  };

  //UseEffect necessário para atualizar o useState Auth
  useEffect(() => {
    authLocal();
  }, [handleSignInPress]);

  // Funcão de Autenticação , se auth e auth2 estiverem verdadeiros irá navegar para tela Home
  const authLocal = async () => {
    if (/*{await biometricAuth()}*/ auth /*{ && auth2}*/) {
      setTimeout(() => {
        setError("");
        setSuccess(loginUser);
      }, 3000);

      setTimeout(() => {
        navigation.navigate("Home");
        setIsLoading(false);
        setSuccess("");
      }, 5000);
    } else {
      setTimeout(() => {
        setSuccess("");
        setIsLoading(false);
      }, 5000);
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
