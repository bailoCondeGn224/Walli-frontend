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
  }));
};

export const GetAllRoles = async (): Promise<User[]> => {
  const response = await axios.get("/role/getAll");
  return response.data.map((user: any) => ({
    ...user,
    id: user.userId || Math.random().toString(36).substring(7),
  }));
};

export const DeleteUser = async (Id: any): Promise<User> => {
  try {
    const response = await axios.put(`/auth/delete/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateUser = async (userId: any, newData: any) => {
  try {
    const response = await axios.put(`/auth/update/${userId}`, newData);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
//pour la table proprietaire

export const AddProprietaire = async (newUser: User): Promise<void> => {
  try {
    return await axios.post("/client/create", newUser);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GetAllProprietaire = async (): Promise<User[]> => {
  const response = await axios.get("/client/getAll");
  return response.data.map((user: any) => ({
    id: user.proprietaireId,
    ...user,
  }));
};

export const GetByIdProprietaire = async (proprietaireId: number) => {
  try {
    const response = await axios.get(`/client/findById/${proprietaireId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

//pour la table client

export const updateProprietaire = async (proprietaireId: any, newData: any) => {
  try {
    const response = await axios.put(
      `/client/update/${proprietaireId}`,
      newData
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
