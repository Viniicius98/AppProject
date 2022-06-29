import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styled from 'styled-components/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { ActivityIndicator, ImageBackgroundBase } from 'react-native';
import React from 'react';                                           // adicionei o react q nao tinha  source={require  parou de dar erro !
//import { StyleSheet, Image } from 'react-native';
//import  fundo   from '../assets/images/fundo.jpeg';
//import { ImageBackgroundBase } from 'react-native';




const BackgroundContainer = styled.View`
    height: 100%;
    width: 100%;
    background: #021831ed;
    
`

const ImageBackground = styled.Image`
    height: 50%;  // tamanho
    width: 100%;
    margin-top: 20%;   //para ciam ou para baixo
    align-items: center;
    justify-content: center;
    opacity: 0.1;         //traparencia
    position: relative;  //fica sobre um objeto
    z-index: 0;
`



const Container = styled.View`
  height: 94%;
  width: 100%;
  flex:1;
  align-items: center;
  justify-content: center;
  position: absolute; //nao fica sobre um objeto
  
  
  
`
const ContainerTextt = styled.Text`
  color:#a6848e;
  padding-right: 55%;
  

`
const ContainerText = styled.Text`
  color:#8492A6;
  padding-right: 10%;

`

const ContainerTexte = styled.Text`
   color: #8492A6;
   padding-right: 35%;
   margin-top: 3%;

`



const Input = styled.TextInput`
  height: 50px;
  width: 300px;
  background-color: #E0E6ED;
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 1px;
  
`

const SubmitButton = styled.Button`
  width: 200px;
  height: 10px;

`

const Loading = styled.View`
width: 100%;
height: 50%;
position: absolute;
align-items: center;
justify-content: center;
z-index: 30;
top: 60%;
`






export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {

  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [auth, setAuth] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const authLocal = async()=>{
    if(auth){
      setError('');
      
      setSuccess('Autenticando...');

      setTimeout(()=>{
        navigation.navigate('User');
      },3000);
      
    }
  }
  
  const handleSignInPress = async () =>{
    setIsLoading(true);
 

    if(email.length === 0 || password.length === 0){
      setError('Preencha usuário e senha para continuar!');
    }else {
      //aqui virá a API
      try {
        const response = await api.post('/auth/login',{
          email: email,
          password: password,
        });

        if(response.data.accessToken){
        setSuccess("");
          await AsyncStorage.setItem('@accessToken', response.data.accessToken)


          const result = await AsyncStorage.getItem('@accessToken');
          
          if(result) {
              setTimeout(()=>{
                setIsLoading(false);
            },5000)
            setSuccess("Usuário autenticado");
            setAuth(true);
            authLocal();
          }
        }


        
        // console.log(response);


      } catch (error) {
        setSuccess('');
        setError('Falha na autenticação');
        console.log(error);
      }

    }
  }

  return (   

    
    <BackgroundContainer>
    <Container>    
          
           

      {isLoading && <Loading> 
        
        <ActivityIndicator size="large"  color="#8492A6"/>
        </Loading>}
        
        
           <ContainerTextt>Login</ContainerTextt>
      
          <Input
           placeholder="E-mail"
           defaultValue={email}
           onChangeText={(newEmail)=> setEmail(newEmail)}
           />
           <Input
           placeholder="Senha"
          defaultValue={password}
          onChangeText={(newPassword)=> setPassword(newPassword)}
          secureTextEntry
          />    
      
      <SubmitButton title="Enviar" color="#B8977E"  onPress={handleSignInPress}/>
      <ContainerTexte>Esqueceu sua senha ? </ContainerTexte>
      
      <ContainerText>{error}</ContainerText>
      <ContainerText>{success}</ContainerText>
      
      
    </Container>
    <ImageBackground source={require('../assets/images/background.png')}/>  /
    
    </BackgroundContainer>
    
    
  );
}
/*<img src={fundo} alt="login" />*/