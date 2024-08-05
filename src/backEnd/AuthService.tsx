import { User } from "../Component/Interface/InterfaceClient";
import axios from "./AxiosConfig";

export const login = async (data: any) => {
  try {
    const response = await axios.post("/auth/signin", data);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AddUsers = async (newUser: User): Promise<void> => {
  try {
    return await axios.post("/auth/signup", newUser);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GetAllUsers = async (): Promise<User[]> => {
  const response = await axios.get("/auth/getAll");
  return response.data.map((user: any) => ({
    ...user,
    id: user.userId || Math.random().toString(36).substring(7),
  }));
};

export const GetAllRoles = async (): Promise<User[]> => {
  const response = await axios.get("/role/getAll");
  return response.data.map((user: any) => ({
    ...user,
    id: user.userId || Math.random().toString(36).substring(7),
  }));
};
