import axios from "axios";
import {useState, useEffect} from 'react'
//axios para requisição HTTP.

//# No caso de API sendo acessada na mesma máquina.
//Emulador Android Studio
// http://10.0.2.2:3000

//Emulador para iOS
//http://localhost:3000

//const api = axios.create({
 // baseURL: "http://20.120.7.70/",
//});
export function api<T =unknown>(url:'https://wwwh3.tjrj.jus.br/HWEBAPIEVENTOS/api/acesso/obtertoken/SDarlan/28863720720'){
  const [token,setToken] = useState<T|null>(null)

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setToken(response.token);
    })
  },[])

  return {token}
}



