import axios from "axios";

// 50820210/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;