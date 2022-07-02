import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Link } from '@react-navigation/native';
import { FlatList, GestureResponderEvent, Image } from 'react-native';




const BackgroundContainer = styled.View`
    height: 100%;
    width: 100%;
    background: #343F4B;
    position: relative;
`

const ImageBackground = styled.Image`
    height: 24%;
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
height: 100%;
`


const FlatLinks = [
    
    {id:"2", text: "AÇÕES EDUCACIONAIS", icon: "acoesEducacionais.png", screen:"EducationalActionsScreen"},
    /*{id:"3", text: "Virtual EMERJ", icon: "virtualEmerj.png", screen:"VirtualEmerjScreen"},*/
    /*{id:"4", text: "ATENDIMENTO", icon: "atendimento.png", screen:"AttendanceScreen"}*/
]




const ImageFlatLinks = styled.Image`
    width: 50px;
    height: 80px;
    margin-left: 25%;
    max-width: 20%;
    max-height: 80%;
    
`

const TextFlatLinks = styled.Text`
    font-size: 12;
    color: #333;
    margin-left: 3%;
`


const ButtonCustom = styled.TouchableOpacity`
background: #c0ccda;
border-bottom-color: #c0ccda;
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
                <ImageFlatLinks source={require('../../assets/images/acoesEducacionais.png')} />
               
                
                
                
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

                        
                </ContentItems>
                <ImageBackground source={require("../../assets/images/background.png")}/>
                </BackgroundContainer>
        </>
    )
}

/*{<ImageBackground source={require('../../assets/images/background.jpg')}/>}*/