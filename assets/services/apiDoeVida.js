import axios from "axios";

const apiDoeVida = axios.create({
    baseURL:'https://doevida.onrender.com/'
})

export default apiDoeVida