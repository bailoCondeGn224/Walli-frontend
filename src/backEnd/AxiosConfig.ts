import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/walli/v1",
});

instance.interceptors.request.use(
  (config) => {
    const userString = localStorage.getItem("user");
    let user;
    try {
      user = userString ? JSON.parse(userString) : null;
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
      localStorage.removeItem("user");
      user = null;
    }

    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        localStorage.removeItem("user");
        window.location.href = "/connexion";
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
