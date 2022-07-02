import  { Text} from 'react-native';
import React from 'react';
import io from "socket.io-client";
import styled from 'styled-components/native';
import { RootTabScreenProps } from '../types';
import AcoeseduComponents from '../components/AcoeseduComponents';



const Container = styled.View`
  width: 100%;
  height: 100%;
`

const TextInput = styled.TextInput`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 100px;
`

export default function Chat({ navigation }: RootTabScreenProps<'Chat'>){




return (
	<Container>
		<AcoeseduComponents />
	</Container>
	)
}
