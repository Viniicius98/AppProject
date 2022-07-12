import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Link } from '@react-navigation/native';
import { FlatList, GestureResponderEvent, Image } from 'react-native';
import CardAcao from '../CardAcao';

const BackgroundContainer = styled.View`
    height: 100%;
    width: 100%;
    background: #1e2d3eee;
    position: relative;
`

const ImageBackground = styled.Image`
    height: 23%;
    width: 100%;
    align-items: center;
    justify-content: center;
    opacity: 0.1;
    position: absolute;
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
width: 100%;
height: 450px;

`

const IconsItems = styled.View`
width: 100%;
height: 575px;
margin-left: -60%;
`


const FlatLinks = [
    
    {   
        id:"0", 
        text: "AÇÕES EDUCACIONAIS", 
        icon: "atendimento.png", 
        screen:"AttendanceScreen"},
    {

        id:"1", 
        text: "DIPLOMAS E TÍTULOS",
        icon: "virtualEmerj.png", 
        screen:"VirtualEmerjScreen"},
    {   
        id:"2", 
        text: "ATUAÇÃO NA DOCÊNCIA", 
        icon: "atendimento.png", 
        screen:"AttendanceScreen"},
    
]



const ImageFlatLinks = styled.Image`
    width: 50px;
    height: 80px;
    margin-left: 25%;
    max-width: 20%;
    max-height: 80%;
    
`


const IdImage = styled.Image`
    width: 50px;
    height: 80px;
    margin-left: 25%;
    max-width: 20%;
    max-height: 80%;
    
`

const TextFlatLinks = styled.Text`
    font-size: 15px;
    color: #343F4B;
    margin-left: 4%;
    font-weight: bold;
`


const ButtonCustom = styled.TouchableOpacity`
    background: #FFFFFF;
    border-bottom-width: 10px;
    border-bottom-color: #B8977E;
    flex-direction: row;
    width: 95%;
    height: 50px;
    margin-top: 2%;
    margin-left: 2%;
    align-items: center;
    `
const ImageIcon = styled.Image`
    width: 100px;
    height: 100px;
    margin-left: 70%;
    bottom:50px;
    max-width: 70%;
    max-height: 30%;
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
                   

                   
                <TextFlatLinks>{item.text}</TextFlatLinks>
                
            </ButtonCustom>


);



export default function AcoeseduComponents (){
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
                            
                            <CardAcao />
                            
                        </IconsItems>
                        
                        
                            
             </ContentItems>
                
                <ImageBackground source={require("../../assets/images/background.png")}/>
                </BackgroundContainer>
        </>
    )
}

/*{<ImageBackground source={require('../../assets/images/background.jpg')}/>}*/