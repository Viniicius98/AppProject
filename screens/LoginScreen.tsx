import styled from "styled-components/native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, Linking } from "react-native";
import apiLogin from "../services/apiLogin";
import apiTokenQuery from "../services/apiTokenQuery";
import { useNavigation } from "@react-navigation/native";
import biometricAuth from "../utils/local-authentication";
import apiCreateUser from "../services/apiCreateUser";

const BackgroundContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  z-index: 1;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
`;
const LoginBackgroundContainer = styled.View`
  width: 90%;
  height: 70%;
  margin-top: 10%;
  margin-left: 5%;
  background: #021831ed;
  border-radius: 10px;
`;

const ImageBackground = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.2;
  border-radius: 10px;
`;

const ContainerText = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #b8977e;
  padding-top: 1%;
  padding-left: 5%;
`;

const ContainerTitle = styled.View`
  height: 10%;
  margin-top: -143%;
  background-color: #c0ccda;
  border-top-width: 1px;
  border-top-color: #8492a6;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ContainerTextSucess = styled.Text`
  margin-top: 8%;
  margin-left: 5%;
  font-size: 18px;
  font-weight: bold;
  color: #228b22;
  padding-right: 10%;
  text-align: center;
`;
const ContainerTextError = styled.Text`
  margin-top: 8%;
  margin-left: 5%;
  font-size: 18px;
  font-weight: bold;
  color: #ff0000;
  padding-right: 10%;
  text-align: center;
`;

const ContainerForget = styled.TouchableOpacity`
  width: 100%;
  height: 20%;
  color: #8492a6;
  padding-top: 0%;
  padding-right: 25%;
  text-align: center;
  margin-top: -55%;
  z-index: 3;
`;
const TextForget = styled.Text`
  width: 100%;
  height: 20%;
  color: #8492a6;
  text-align: center;
`;
const Input = styled.TextInput`
  height: 45px;
  width: 260px;
  font-size: 15px;
  font-weight: bold;
  color: black;
  background-color: #e0e6ed;
  border-radius: 5px;
  padding-left: 20px;
  padding-horizontal: 12px;
  margin-top: 30%;
  margin-bottom: -30%;
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
  const [emailUser, setEmailUser] = useState("");
  const [password, setPassword] = useState("APIEMERJ");
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("28863720720");
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
        const response = await apiTokenQuery.get(`/acesso/obtertoken/${cpf}`);

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
        }, 2000);
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

      await AsyncStorage.setItem("Bearer2", loginUser.headers.authorization);

      const Dbearer2 = await AsyncStorage.getItem("Bearer2");
      const bearer2 = Dbearer2?.substring(7);
      if (bearer2) {
        cpfFind(bearer2);
      }

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

  const loginBanco = async () => {
    try {
      const lBanco = await apiCreateUser.post("/auth/login", {
        email: emailUser,
        password: "123456",
      });
      await AsyncStorage.setItem("@BToken", JSON.stringify(lBanco.data));
      if (lBanco.data) {
        console.log("login realizado");
      }
    } catch (error: any) {
      console.log("nao foi possivel realizar o login");
      console.error(error.response.status);
    }
  };

  // Função para Buscar o CPF

  const cpfFind = async (bearer2: any) => {
    try {
      const find = await apiLogin.get("/login/buscarCpf", {
        headers: { Authorization: `Bearer ${bearer2}` },
      });
      const c = find.data;
      console.log("o CPF é " + c);
    } catch (error) {
      console.error("cpf nao encontrado");
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
      await AsyncStorage.setItem("email", JSON.stringify(dados.data.email));

      const e = await AsyncStorage.getItem("email");
      const n = await AsyncStorage.getItem("Dados");
      //Retirando as aspas
      const mail = e?.substring(1, e.length - 1);
      const nome = n?.substring(1, n.length - 1);
      if (mail && nome) {
        setEmailUser(mail);
        setName(nome);
      }
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
        setSuccess("");
        setError("Não foi Possivel Obter os Dados");
      }, 5000);
      console.log(error);
    }
  };

  //Função para registrar usuario ao Banco de Dados
  const createUser = async () => {
    try {
      const create = await apiCreateUser.post("/user", {
        name: name,
        cpf: cpf,
        email: emailUser,
      });
      if (create) {
        loginBanco();
      }
      console.log("Usuario Cadastrado");
    } catch (error: any) {
      switch (error.response.status) {
        case 500:
          loginBanco();
          console.log("Usuário ja cadastrado no Banco");
          console.log(name);
          console.log(emailUser);
      }
    }
  };

  // Funcão de Autenticação , se auth e auth2 estiverem verdadeiros irá navegar para tela Home
  const authLocal = async () => {
    if (/*{ await biometricAuth()}*/ auth2 && auth) {
      setTimeout(() => {
        setError("");
        setSuccess(loginUser);
      }, 6000);

      setTimeout(() => {
        navigation.navigate("Home");
        setIsLoading(false);
        setSuccess("");
      }, 10000);
    } else {
      setTimeout(() => {
        setSuccess("");
        setIsLoading(false);
      }, 5000);
    }
  };

  //UseEffect necessário para atualizar o useState Auth
  useEffect(() => {
    authLocal();
  }, [auth && auth2]);

  useEffect(() => {
    createUser();
  }, [name && emailUser]);

  return (
    <BackgroundContainer>
      {isLoading && (
        <Loading>
          <ActivityIndicator size="large" color="#8492A6" />
        </Loading>
      )}
      <LoginBackgroundContainer>
        <ImageBackground source={require("../assets/images/background.png")} />
        <ContainerTitle>
          <ContainerText>Login</ContainerText>
        </ContainerTitle>

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
        <ContainerForget
          onPress={() => Linking.openURL("https://emerj.com.br/site/")}
        >
          <TextForget>Esqueceu sua senha ?</TextForget>
        </ContainerForget>
        <ContainerTextError>{error}</ContainerTextError>
        <ContainerTextSucess>{success} </ContainerTextSucess>
      </LoginBackgroundContainer>
    </BackgroundContainer>
  );
}
