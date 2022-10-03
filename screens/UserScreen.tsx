import React, { ReactNode, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View, Text } from 'react-native';


export default function App() {
  

  useEffect(() => {
    fetch('https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/acesso/obtertoken/claudio/77359194768', {
      method: 'GET',
      headers: {
        'Accept': 'application/json' 
      }
    })
    .then(response => response.json())
    .then(data =>{
      console.log (data) 
    })
  }, [] )
  
  return(
    <SafeAreaView>
       
    </SafeAreaView>
  )
  }
    


  /*return (
    <SafeAreaView>
      <FlatList
         data={pokemons}
         keyExtractor={(pokemon: { name: string; }) => pokemon.name}
         contentContainerStyle={{ flexGrow: 1}}
         renderItem={PokemonShow}
        />
    </SafeAreaView>
  )
}

function PokemonShow(item: {
  name: ReactNode; item: { name: any; url: any; }; 
}){



//: { item: { name: string; url: any; }  }){
  return(
    <View>
      <image/>
      <div>{item.name}</div>
    </View>
  )
}
*/


