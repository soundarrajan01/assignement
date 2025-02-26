import axios from "axios";

const Axios = axios.create({
  baseURL: "https://localhost:8080", // You can specify your base URL here
  headers: {
    "Content-Type": "application/json", // or another content type like 'application/x-www-form-urlencoded'
  },
});
export default Axios;
