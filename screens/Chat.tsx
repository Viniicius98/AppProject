import  { Text} from 'react-native';
import React from 'react';
import io from "socket.io-client";
import styled from 'styled-components/native';
import { RootTabScreenProps } from '../types';
import AcoeseduComponents from '../components/AcoeseduComponents';
import { useContext, useEffect } from 'react';
import { InputValueContext } from '../context/InputValueContext';
import Accordion from '../components/Accordion';



const Container = styled.View`
  height: 100%;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
`


/*const Container = styled.View`
  width: 100%;
  height: 100%;
`

const TextInput = styled.TextInput`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 100px;
`*/

/*export default function Chat({ navigation }: RootTabScreenProps<'Chat'>)*/


export default function Chat({ navigation }: RootTabScreenProps<'Chat'>) {
  const {state, dispatch} = useContext(InputValueContext)




return (
	<Container>
		
    <Accordion />
    
    
	</Container>
	)
}
