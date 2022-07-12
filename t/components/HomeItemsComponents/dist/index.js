"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("styled-components/native");
var react_native_1 = require("react-native");
var Card_1 = require("../Card");
var CardConsulta_1 = require("../CardConsulta");
var CardVerificar_1 = require("../CardVerificar");
var BackgroundContainer = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 100%;\n    width: 100%;\n    background: #1e2d3eee;\n    position: relative;\n"], ["\n    height: 100%;\n    width: 100%;\n    background: #1e2d3eee;\n    position: relative;\n"])));
var ImageBackground = native_1["default"].Image(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: 24%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    opacity: 0.1;\n    //position: absolute;\n    z-index: 0;\n"], ["\n    height: 24%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    opacity: 0.1;\n    //position: absolute;\n    z-index: 0;\n"])));
var ContentItems = native_1["default"].View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nposition: absolute;\nwidth: 100%;\nheight: 100%;\nflex-direction: row;\nalign-items: flex-end;\n"], ["\nposition: absolute;\nwidth: 100%;\nheight: 100%;\nflex-direction: row;\nalign-items: flex-end;\n"])));
var FlatListItems = native_1["default"].View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\nwidth: 60%;\nheight: 450px;\nbackground-color: rgba(255,255,255,0.5);\n"], ["\nwidth: 60%;\nheight: 450px;\nbackground-color: rgba(255,255,255,0.5);\n"])));
var IconsItems = native_1["default"].View(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\nwidth: 38%;\nheight: 450px;\nbackground-color: #1b2939;\nmargin-left: 2%;\n"], ["\nwidth: 38%;\nheight: 450px;\nbackground-color: #1b2939;\nmargin-left: 2%;\n"])));
var FlatLinks = [
    { id: "0", text: "PONTOS", icon: "meusPontos.png", screen: "PointsScreen" },
    { id: "1", text: "CURSOS", icon: "cursos.png", screen: "CoursesScreen" },
    { id: "2", text: "AÇÕES EDUCACIONAIS", icon: "acoesEducacionais.png", screen: "EducationalActionsScreen" },
    { id: "3", text: "Virtual EMERJ", icon: "virtualEmerj.png", screen: "VirtualEmerjScreen" },
    { id: "4", text: "ATENDIMENTO", icon: "atendimento.png", screen: "AttendanceScreen" }
];
var ImageFlatLinks = native_1["default"].Image(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    width: 65px;\n    height: 80px;\n    margin-left: 3%;\n    max-width: 80%;\n    max-height: 80%;\n"], ["\n    width: 65px;\n    height: 80px;\n    margin-left: 3%;\n    max-width: 80%;\n    max-height: 80%;\n"])));
var TextFlatLinks = native_1["default"].Text(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    font-size: 12;\n    color: #333;\n    margin-left: 8%;\n"], ["\n    font-size: 12;\n    color: #333;\n    margin-left: 8%;\n"])));
var LinkFlat = native_1["default"].Button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n\n"], ["\n    display: flex;\n    flex-direction: row;\n\n"])));
var ButtonCustom = native_1["default"].TouchableOpacity(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\nbackground: #c0ccda;\nborder-bottom-width: 10px;\nborder-bottom-color: #b8977e;\nflex-direction: row;\nwidth: 100%;\nalign-items: center;\n"], ["\nbackground: #c0ccda;\nborder-bottom-width: 10px;\nborder-bottom-color: #b8977e;\nflex-direction: row;\nwidth: 100%;\nalign-items: center;\n"])));
var Item = function (_a) {
    var item = _a.item, onPress = _a.onPress;
    return (react_1["default"].createElement(ButtonCustom, { onPress: onPress },
        react_1["default"].createElement(ImageFlatLinks, { source: require('../../assets/images/meusPontos.png') }),
        react_1["default"].createElement(TextFlatLinks, null, item.text)));
};
function HomeItemsComponents() {
    var _a = react_1.useState(null), selectedId = _a[0], setSelectedId = _a[1];
    var renderItem = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(Item, { item: item, onPress: function () { return setSelectedId(Number(item.id)); } }));
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(BackgroundContainer, null,
            react_1["default"].createElement(ContentItems, null,
                react_1["default"].createElement(FlatListItems, null,
                    react_1["default"].createElement(react_native_1.FlatList, { data: FlatLinks, renderItem: renderItem, keyExtractor: function (item) { return item.id; }, extraData: selectedId })),
                react_1["default"].createElement(IconsItems, null,
                    react_1["default"].createElement(Card_1["default"], null),
                    react_1["default"].createElement(CardConsulta_1["default"], null),
                    react_1["default"].createElement(CardVerificar_1["default"], null))),
            react_1["default"].createElement(ImageBackground, { source: require('../../assets/images/background.jpg') }))));
}
exports["default"] = HomeItemsComponents;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
