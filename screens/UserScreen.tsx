import React ,{useEffect,useState} from'react'
import {View,Text,FlatList,ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";
import UserInfo from "../components/UserInfo";


const Container = styled.View`
  height: 100%;
  margin-top: -9.4%;
  background:#fff;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
`;


export default function UserScreen() {
  const [token,SetToken] = useState([])
  useEffect(() => {
    fetch('https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/acesso/obtertoken/SDarlan/28863720720',{
      method:'GET',
      headers:{
        'Accept':'application/json'
      }
    })
    .then(response => response.json())
    .then(json =>{
      SetToken(json);
    } )
    .catch(()=>(alert('Não Obteve o Token')))
  },[])
 
  return (
  
    
   <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      
 
    
   </SafeAreaView>
    

      
    
  );


  }
