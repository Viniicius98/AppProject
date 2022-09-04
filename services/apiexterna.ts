import axios from "axios";

const BASE_URL = "https://db.php"; //adicionar a url da API

export async function getPoints() {
  const response = await axios.get(BASE_URL);
  return response.data;
}
