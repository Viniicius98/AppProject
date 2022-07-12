"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var native_1 = require("styled-components/native");
var react_1 = require("react");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var api_1 = require("../services/api");
var react_native_1 = require("react-native");
var react_2 = require("react"); // adicionei o react q nao tinha  source={require  parou de dar erro !
//import { StyleSheet, Image } from 'react-native';
//import  fundo   from '../assets/images/fundo.jpeg';
//import { ImageBackgroundBase } from 'react-native';
var BackgroundContainer = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 100%;\n    width: 100%;\n    background: #021831ed;\n    \n"], ["\n    height: 100%;\n    width: 100%;\n    background: #021831ed;\n    \n"])));
var ImageBackground = native_1["default"].Image(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: 50%;  // tamanho\n    width: 100%;\n    margin-top: 20%;   //para ciam ou para baixo\n    align-items: center;\n    justify-content: center;\n    opacity: 0.1;         //traparencia\n    position: relative;  //fica sobre um objeto\n    z-index: 0;\n"], ["\n    height: 50%;  // tamanho\n    width: 100%;\n    margin-top: 20%;   //para ciam ou para baixo\n    align-items: center;\n    justify-content: center;\n    opacity: 0.1;         //traparencia\n    position: relative;  //fica sobre um objeto\n    z-index: 0;\n"])));
var Container = native_1["default"].View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 94%;\n  width: 100%;\n  flex:1;\n  align-items: center;\n  justify-content: center;\n  position: absolute; //nao fica sobre um objeto\n  \n  \n  \n"], ["\n  height: 94%;\n  width: 100%;\n  flex:1;\n  align-items: center;\n  justify-content: center;\n  position: absolute; //nao fica sobre um objeto\n  \n  \n  \n"])));
var ContainerTextt = native_1["default"].Text(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color:#a6848e;\n  padding-right: 55%;\n  \n\n"], ["\n  color:#a6848e;\n  padding-right: 55%;\n  \n\n"])));
var ContainerText = native_1["default"].Text(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color:#8492A6;\n  padding-right: 10%;\n\n"], ["\n  color:#8492A6;\n  padding-right: 10%;\n\n"])));
var ContainerTexte = native_1["default"].Text(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n   color: #8492A6;\n   padding-right: 35%;\n   margin-top: 3%;\n\n"], ["\n   color: #8492A6;\n   padding-right: 35%;\n   margin-top: 3%;\n\n"])));
var Input = native_1["default"].TextInput(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 50px;\n  width: 300px;\n  background-color: #E0E6ED;\n  border-radius: 5px;\n  padding-left: 20px;\n  margin-bottom: 1px;\n  \n"], ["\n  height: 50px;\n  width: 300px;\n  background-color: #E0E6ED;\n  border-radius: 5px;\n  padding-left: 20px;\n  margin-bottom: 1px;\n  \n"])));
var SubmitButton = native_1["default"].Button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 200px;\n  height: 10px;\n\n"], ["\n  width: 200px;\n  height: 10px;\n\n"])));
var Loading = native_1["default"].View(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\nwidth: 100%;\nheight: 50%;\nposition: absolute;\nalign-items: center;\njustify-content: center;\nz-index: 30;\ntop: 60%;\n"], ["\nwidth: 100%;\nheight: 50%;\nposition: absolute;\nalign-items: center;\njustify-content: center;\nz-index: 30;\ntop: 60%;\n"])));
function LoginScreen(_a) {
    var _this = this;
    var navigation = _a.navigation;
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(''), error = _d[0], setError = _d[1];
    var _e = react_1.useState(''), success = _e[0], setSuccess = _e[1];
    var _f = react_1.useState(false), auth = _f[0], setAuth = _f[1];
    var _g = react_1.useState(false), isLoading = _g[0], setIsLoading = _g[1];
    var authLocal = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (auth) {
                setError('');
                setSuccess('Autenticando...');
                setTimeout(function () {
                    navigation.navigate('User');
                }, 3000);
            }
            return [2 /*return*/];
        });
    }); };
    var handleSignInPress = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    if (!(email.length === 0 || password.length === 0)) return [3 /*break*/, 1];
                    setError('Preencha usuário e senha para continuar!');
                    return [3 /*break*/, 7];
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, api_1["default"].post('/auth/login', {
                            email: email,
                            password: password
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.data.accessToken) return [3 /*break*/, 5];
                    setSuccess("");
                    return [4 /*yield*/, async_storage_1["default"].setItem('@accessToken', response.data.accessToken)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, async_storage_1["default"].getItem('@accessToken')];
                case 4:
                    result = _a.sent();
                    if (result) {
                        setTimeout(function () {
                            setIsLoading(false);
                        }, 5000);
                        setSuccess("Usuário autenticado");
                        setAuth(true);
                        authLocal();
                    }
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    setSuccess('');
                    setError('Falha na autenticação');
                    console.log(error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return (react_2["default"].createElement(BackgroundContainer, null,
        react_2["default"].createElement(Container, null,
            isLoading && react_2["default"].createElement(Loading, null,
                react_2["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#8492A6" })),
            react_2["default"].createElement(ContainerTextt, null, "Login"),
            react_2["default"].createElement(Input, { placeholder: "E-mail", defaultValue: email, onChangeText: function (newEmail) { return setEmail(newEmail); } }),
            react_2["default"].createElement(Input, { placeholder: "Senha", defaultValue: password, onChangeText: function (newPassword) { return setPassword(newPassword); }, secureTextEntry: true }),
            react_2["default"].createElement(SubmitButton, { title: "Enviar", color: "#B8977E", onPress: handleSignInPress }),
            react_2["default"].createElement(ContainerTexte, null, "Esqueceu sua senha ? "),
            react_2["default"].createElement(ContainerText, null, error),
            react_2["default"].createElement(ContainerText, null, success)),
        react_2["default"].createElement(ImageBackground, { source: require('../assets/images/background.png') })));
}
exports["default"] = LoginScreen;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
/*<img src={fundo} alt="login" />*/
/*<img src={fundo} alt="login" />*/ 
