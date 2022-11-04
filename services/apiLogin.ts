import axios from "axios";


const apiLogin = axios.create({
    baseURL: "https://wwwh3.tjrj.jus.br/hidserverjus-api/",
});


export default apiLogin;