import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Link } from '@react-navigation/native';
import { FlatList, GestureResponderEvent, Image, Pressable } from 'react-native';

import { Text, View } from '../Themed';
import Card from '../Card';
import CardConsulta from '../CardConsulta';
import CardVerificar from '../CardVerificar';
import { preventAutoHideAsync } from 'expo-splash-screen';
import navigation from '../../navigation';

const BackgroundContainer = styled.View`
    height: 100%;
    width: 100%;
    background: #1e2d3eee;
    position: relative;
`
const ImageBackground = styled.Image`
    height: 24%;
    width: 100%;
    align-items: center;
    justify-content: center;
    opacity: 0.1;
    //position: absolute;
    z-index: 0;
`

const ContentItems = styled.View`
position: absolute;
width: 100%;
height: 100%;
flex-direction: row;
align-items: flex-end;
`
const FlatListItems = styled.View`
width: 60%;
height: 450px;
background-color: rgba(255,255,255,0.5);
`

const IconsItems = styled.View`
width: 38%;
height: 450px;
background-color: #1b2939;
margin-left: 2%;
`
const FlatLinks = [
    {id:"0", text: "PONTOS", icon: "meusPonto.png", screen:"PointsScreen" },
    {id:"1", text: "CURSOS", icon: "cursos.png", screen:"CoursesScreen"},
    {id:"2", text: "AÇÕES EDUCACIONAIS", icon: "acoesEducacionais.png", screen:"EducationalActionsScreen"},
    {id:"3", text: "Virtual EMERJ", icon: "virtualEmerj.png", screen:"VirtualEmerjScreen"},
    {id:"4", text: "ATENDIMENTO", icon: "atendimento.png", screen:"AttendanceScreen"}
]






const ImageFlatLinks = styled.Image`
    width: 65px;
    height: 80px;
    margin-left: 3%;
`


const TextFlatLinks = styled.Text`
    font-size: 12;
    color: #333;
    margin-left: 8%;
`
const LinkFlat = styled.Button`
    display: flex;
    flex-direction: row;

`

const ButtonCustom = styled.TouchableOpacity`
background: #c0ccda;
border-bottom-width: 10px;
border-bottom-color: #b8977e;
flex-direction: row;
width: 100%;
align-items: center;
`
interface IFlatItems {
    id: string;
    text: string;
    icon: string;
    screen: string;
}


const Item = ({item, onPress}:{
    item: IFlatItems,
    onPress: (event: GestureResponderEvent) => void
    }) => (  
            <ButtonCustom onPress={onPress}>
                <ImageFlatLinks source={require('../../assets/images/cursos.png')} />
                
                <TextFlatLinks>{item.text}</TextFlatLinks>
                
            </ButtonCustom>


);



export default function HomeItemsComponents (){
    const [selectedId, setSelectedId] = useState<number|null>(null);

 const renderItem = ({item}:{item:IFlatItems})=>{
     return(
         <Item
         item={item}
         onPress={() => setSelectedId(Number(item.id))}
        />
     )
     
 }
    
    return (
        <>
            <BackgroundContainer>
                <ContentItems>
                       
                        <FlatListItems>
                            <FlatList
                            data={FlatLinks}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            extraData={selectedId}
                             />
                        </FlatListItems>

                        <IconsItems>
                            <Card />
                            <CardConsulta />
                            <CardVerificar />
                            

                        </IconsItems>
                        
                </ContentItems>
                <ImageBackground source={require('../../assets/images/background.jpg')}/>
            </BackgroundContainer>
        </>
    )
}