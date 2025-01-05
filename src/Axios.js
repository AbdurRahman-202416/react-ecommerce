
import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiRequest.interceptors.request.use((req) => {
  // console.log(req)
  return req;
});
apiRequest.interceptors.response.use((res) => {
  // console.log(res);
  return res;
});

export default apiRequest;