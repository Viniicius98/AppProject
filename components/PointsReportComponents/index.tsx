import styled from "styled-components/native";
import CardPoints from "../CardPoints";
import AppLogo from "../Header/Applogo";
import FormRelatoriPoints from "../../components/PointsReportComponents/FormRelatoriPoints";

const BackgroundContainer = styled.SafeAreaView`
  flex: 1;
  background: #1e2d3eee;
`;

const ImageBackground = styled.Image`
  height: 30%;
  width: 100%;
  margin-top: -0%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
`;

const Imagerelatoriopoints = styled.View`
  height: 66%;
  width: 98%;
  margin-left: 1%;
  margin-top: 35%;
`;

const ContentItems = styled.View`
  flex: 1;
  max-width: 100%;
  max-height: 72%;
  margin-top: 30%;
  align-items: center;
`;
const DropdownItems = styled.View`
  width: 100%;
  height: 460px;
  margin-bottom: 70px;
`;

const IconsItems = styled.View`
  width: 100%;
  height: 15%;
  margin-bottom: 23.9%;
  margin-left: 0%;
  background: black;
  z-index: 4;
`;
const IconsApp = styled.View`
  width: 100%;
  height: 100px;
  margin-top: -41%;
  margin-left: 74%;
`;

const ListItems = styled.View`
  flex: 1;
  width: 90%;

  background-color: #fff;
`;
const TextoCursos = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  padding-left: 5%;
  padding-top: 1%;
  color: #343f4b;
  background: #c0ccda;
  border-bottom-width: 8px;
  border-bottom-color: #b8977e;
  flex-direction: row;
  width: 100%;
  height: 35px;
  align-items: center;
`;
const TitleCustom = styled.View`
  background: #fff;
  border-bottom-width: 8px;
  border-bottom-color: #b8977e;
  flex-direction: row;
  width: 100%;
  height: 20px;
  align-items: center;
`;

export default function PointsReport() {
  return (
    <>
      <BackgroundContainer>
        <CardPoints />
        <ImageBackground
          source={require("../../assets/images/background.png")}
        />
        <ContentItems>
          <ListItems>
            <TextoCursos>RELATÓRIO</TextoCursos>
          </ListItems>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
