"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var Themed_1 = require("../Themed");
var native_1 = require("styled-components/native");
var Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: #fff;\n"], ["\n    background: #fff;\n"])));
var Title = native_1["default"].View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: #b8977e;\n    align-items: center;\n    justify-content: center;\n    font-size: 20;\n"], ["\n    background: #b8977e;\n    align-items: center;\n    justify-content: center;\n    font-size: 20;\n"])));
var TitleText = native_1["default"].Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-weight: bold;\n    color: white;\n    text-align: center;\n    font-size: 12px;\n"], ["\n    font-weight: bold;\n    color: white;\n    text-align: center;\n    font-size: 12px;\n"])));
var CardBanner = native_1["default"].Image(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 100%;\n    height: 90px;\n"], ["\n    width: 100%;\n    height: 90px;\n"])));
var Avatar = native_1["default"].Image(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50;\n    position: absolute;\n    margin-top: -25px;\n"], ["\n    width: 50px;\n    height: 50px;\n    border-radius: 50;\n    position: absolute;\n    margin-top: -25px;\n"])));
var AvatarContainer = native_1["default"].View(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: relative;\n    width: 100%;\n    align-items: center;\n    margin-bottom: 25px;\n"], ["\n    position: relative;\n    width: 100%;\n    align-items: center;\n    margin-bottom: 25px;\n"])));
function Card() {
    return (react_1["default"].createElement(Container, null,
        react_1["default"].createElement(Title, null,
            react_1["default"].createElement(TitleText, null, "PERFIL DO MAGISTRADO")),
        react_1["default"].createElement(CardBanner, { source: require("../../assets/images/background.png") }),
        react_1["default"].createElement(AvatarContainer, null,
            react_1["default"].createElement(Avatar, { source: require("../../assets/images/avatar.jpg") })),
        react_1["default"].createElement(Themed_1.Text, { style: { fontWeight: "bold", textAlign: "center" } }, "Dra. Helena Herth"),
        react_1["default"].createElement(Themed_1.Text, { style: { fontSize: 9, textAlign: "center", marginBottom: 5 } }, "Diretora do Departamento de Aperfei\u00E7oamento de Magistrados")));
}
exports["default"] = Card;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
