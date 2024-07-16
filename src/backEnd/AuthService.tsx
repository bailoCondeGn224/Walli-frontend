import axios from "./AxiosConfig";
export const login = async (data: any) => {
  return axios
    .post("/auth/login", data)
    .then((response) => {
      console.log("OK");
      return response;
    })
    .catch((error) => {
      console.log("NOK");
      return Promise.reject(error);
    });
};
