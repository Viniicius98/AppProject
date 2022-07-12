"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var Themed_1 = require("../Themed");
var native_1 = require("styled-components/native");
var Containerr = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: #fff;\n    margin-top: 20px;\n"], ["\n    background: #fff;\n    margin-top: 20px;\n"])));
var Title = native_1["default"].View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: #b8977e;\n    align-items: center;\n    justify-content: center;\n    font-size: 20;\n"], ["\n    background: #b8977e;\n    align-items: center;\n    justify-content: center;\n    font-size: 20;\n"])));
var TitleText = native_1["default"].Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-weight: bold;\n    color: white;\n    text-align: center;\n    font-size: 12px;\n"], ["\n    font-weight: bold;\n    color: white;\n    text-align: center;\n    font-size: 12px;\n"])));
var Avatarr = native_1["default"].Image(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50;\n    position: absolute;\n    margin-top: -25px;\n"], ["\n    width: 50px;\n    height: 50px;\n    border-radius: 50;\n    position: absolute;\n    margin-top: -25px;\n"])));
var AvatarContainerr = native_1["default"].View(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: relative;\n    width: 100%;\n    align-items: center;\n    margin-bottom: 30px;\n"], ["\n    position: relative;\n    width: 100%;\n    align-items: center;\n    margin-bottom: 30px;\n"])));
function CardConsulta() {
    return (react_1["default"].createElement(Containerr, null,
        react_1["default"].createElement(Title, null,
            react_1["default"].createElement(TitleText, null, ".")),
        react_1["default"].createElement(AvatarContainerr, null,
            react_1["default"].createElement(Avatarr, { source: require("../../assets/images/regras.jpg") })),
        react_1["default"].createElement(Themed_1.Text, { style: { fontSize: 12, fontWeight: "bold", textAlign: "center", marginBottom: 25 } }, "CONSULTE AS REGRAS DA ENFAM")));
}
exports["default"] = CardConsulta;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
