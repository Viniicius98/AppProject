import axios from "axios";
import { useState, useEffect } from "react";
//axios para requisição HTTP.

//# No caso de API sendo acessada na mesma máquina.
//Emulador Android Studio
// http://10.0.2.2:3000

//Emulador para iOS
//http://localhost:3000

const apiCreateUser = axios.create({
  baseURL: "http://ec2-44-208-124-196.compute-1.amazonaws.com:3000/",
});

export default apiCreateUser;
