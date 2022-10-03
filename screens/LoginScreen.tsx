import React from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Header_Copy from "../components/Header_Copy";

const Container = styled.View`
  flex: 1;
  margin-top: 86%;
  align-items: center;
  justify-content: center;
`;

const BackgroundContainer = styled.View`
  width: 100%;
  height: 70.5%;
  background-color: #ffffff;
`;
const LoginBackgroundContainer = styled.View`
  width: 90%;
  height: 90%;
  margin-top: 30%;
  margin-left: 3.9%;
  background: #021831ed;
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
const ContainerText = styled.Text`
  color: #8492a6;
  padding-right: 10%;
`;

const ContainerTexte = styled.Text`
  color: #8492a6;
  padding-right: 35%;
  text-align: center;
  margin-top: -35%;
  margin-left: 20%;
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
export default function LoginScreen (){
  return (
    
    <Container>  
     
      <Header_Copy />
      
      

      <BackgroundContainer>
        

        <LoginBackgroundContainer>
          <ContainerTexttt>
            <ContainerTextt>Login</ContainerTextt>
          </ContainerTexttt>

          <Input
            placeholder="E-mail"
            
          />

          <Input
            placeholder="Senha"
            
            secureTextEntry
          />
          <ContainerButton>
            <SubmitButton
              title="Entrar"
              color="#B8977E"
              
            />
          </ContainerButton>

          <ImageBackground
            source={require("../assets/images/background.png")}
          />

          <ContainerTexte>Esqueceu sua senha ? </ContainerTexte>

          
        </LoginBackgroundContainer>

        
      </BackgroundContainer>
      
    </Container>

      
      
    
    
  );
}







/*import { RootTabScreenProps } from "../types";
import styled from "styled-components/native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import { ActivityIndicator, SafeAreaView } from "react-native";
import Header from "../components/Header";
import AppLogo from "../components/Header/Applogo";

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
  align-items: center;
  justify-content: center;
  margin-top: -158%;
  margin-left: 63%;
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
const ContainerText = styled.Text`
  color: #8492a6;
  padding-right: 10%;
`;

const ContainerTexte = styled.Text`
  color: #8492a6;
  padding-right: 35%;
  text-align: center;
  margin-top: -35%;
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
`;
const ContainerButton = styled.View`
  width: 65%;
  height: 50%;
  margin-top: 51%;
  margin-left: 16.8%;
  z-index: 2;
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

  const authLocal = async () => {
    if (auth) {
      setError("");

      setSuccess("Autenticando...");

      setTimeout(() => {
        //navigation.navigate("User");
      }, 3000);
    }
  };

  const handleSignInPress = async () => {
    setIsLoading(true);

    if (email.length === 0 || password.length === 0) {
      setError("Preencha usuário e senha para continuar!");
    } else {
      //aqui virá a API
      try {
        const response = await api.post("/auth/login", {
          email: email,
          password: password,
        });

        if (response.data.accessToken) {
          setSuccess("");
          await AsyncStorage.setItem("@accessToken", response.data.accessToken);

          const result = await AsyncStorage.getItem("@accessToken");

          if (result) {
            setTimeout(() => {
              setIsLoading(false);
            }, 5000);
            setSuccess("Usuário autenticado");
            setAuth(true);
            authLocal();
          }
        }

        // console.log(response);
      } catch (error) {
        setSuccess("");
        setError("Falha na autenticação");
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

          <ContainerText>{error}</ContainerText>
          <ContainerText>{success} </ContainerText>
        </LoginBackgroundContainer>

        <AppContainer>
          <AppLogo />
        </AppContainer>
      </BackgroundContainer>
      
    </Container>
    
  );
}

{
  /*<Container>
      <Header />
      <BackgroundContainer>
  {isLoading && (
  <Loading>
    <ActivityIndicator size="large" color="#8492A6" />
  </Loading>
)}
<ImageBackground source={require("../assets/images/background.png")} />
<LoginBackgroundContainer>
  <ContainerTextt>Login</ContainerTextt>
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
  <SubmitButton
    title="Enviar"
    color="#B8977E"
    onPress={handleSignInPress}
  />
  <ContainerTexte>Esqueceu sua senha ? </ContainerTexte>
  <ContainerText>{error}</ContainerText>
  <ContainerText>{success} </ContainerText>
</LoginBackgroundContainer>
<AppContainer>
  <AppLogo />
  </AppContainer>
  </BackgroundContainer>
  </Container>*/
  