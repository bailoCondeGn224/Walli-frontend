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

export const DeleteProprietaire = async (Id: any): Promise<User> => {
  try {
    const response = await axios.put(`/client/delete/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//pour la table syndicat

export const AddSyndicat = async (newUser: User): Promise<void> => {
  try {
    return await axios.post("/syndicat/create", newUser);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GetAllSyndicat = async (): Promise<User[]> => {
  const response = await axios.get("/syndicat/getAll");
  return response.data.map((syndicat: any) => ({
    ...syndicat,
  }));
};

export const GetByIdSyndicat = async (syndicatId: number) => {
  try {
    const response = await axios.get(`/syndicat/findById/${syndicatId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateSyndicat = async (syndicatId: any, newData: any) => {
  try {
    const response = await axios.put(`/syndicat/update/${syndicatId}`, newData);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const DeleteSyndicat = async (Id: any): Promise<User> => {
  try {
    const response = await axios.put(`/syndicat/delete/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// pour la table Engin

export const GetAllEngin = async (): Promise<User[]> => {
  const response = await axios.get("/engin/getAll");
  return response.data.map((engin: any) => ({
    id: engin.enginId,
    ...engin,
  }));
};

export const AddEngin = async (newUser: User): Promise<void> => {
  try {
    return await axios.post("/engin/create", newUser);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GetByIdEngin = async (enginId: number) => {
  try {
    const response = await axios.get(`/engin/findById/${enginId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateEngin = async (enginId: any, newData: any) => {
  try {
    const response = await axios.put(`/engin/update/${enginId}`, newData);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const DeleteEngin = async (Id: any): Promise<User> => {
  try {
    const response = await axios.put(`/engin/delete/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
//pour la line

export const GetAllLine = async (): Promise<User[]> => {
  const response = await axios.get("/line/getAll");
  return response.data.map((engin: any) => ({
    id: engin.enginId,
    ...engin,
  }));
};

export const AddLine = async (newUser: User): Promise<void> => {
  try {
    return await axios.post("/line/create", newUser);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GetByIdLine = async (enginId: number) => {
  try {
    const response = await axios.get(`/line/getLineById/${enginId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateLine = async (lineId: any, newData: any) => {
  try {
    const response = await axios.put(`/line/update/${lineId}`, newData);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const DeleteLine = async (Id: any): Promise<User> => {
  try {
    const response = await axios.put(`/line/delete/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//pour la table gare
export const GetAllGare = async (): Promise<User[]> => {
  const response = await axios.get("/gare/getAll");
  return response.data.map((gare: any) => ({
    id: gare.gareId,
    ...gare,
  }));
};

export const AddGare = async (newUser: User): Promise<void> => {
  try {
    return await axios.post("/gare/create", newUser);
  } catch (error) {
    return Promise.reject(error);
  }
};
export const DeleteGare = async (Id: any): Promise<User> => {
  try {
    const response = await axios.put(`/gare/delete/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetByIdGare = async (enginId: number) => {
  try {
    const response = await axios.get(`/gare/getGareById/${enginId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateGare = async (lineId: any, newData: any) => {
  try {
    const response = await axios.put(`/gare/update/${lineId}`, newData);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

//pour la table destination

export const GetAllDestination = async (): Promise<User[]> => {
  const response = await axios.get("/destination/getAll");
  return response.data.map((destination: any) => ({
    id: destination.destinationId,
    ...destination,
  }));
};

export const AddDestination = async (newUser: User): Promise<void> => {
  try {
    return await axios.post("/destination/create", newUser);
  } catch (error) {
    return Promise.reject(error);
  }
};
export const DeleteDestination = async (Id: any): Promise<User> => {
  try {
    const response = await axios.put(`/destination/delete/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetByIdDestination = async (destinationId: number) => {
  try {
    const response = await axios.get(`/destination/findById/${destinationId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateDestination = async (lineId: any, newData: any) => {
  try {
    const response = await axios.put(`/destination/update/${lineId}`, newData);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// pour la table passager
export const GetAllPassager = async (): Promise<User[]> => {
  const response = await axios.get("/passager/getAll");
  return response.data.datas.map((passager: any) => ({
    id: passager.passagerId,
    ...passager,
  }));
};
export const AddPersonne = async (newUser: User): Promise<void> => {
  try {
    return await axios.post("/passager/create", newUser);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const DeletePassager = async (Id: any): Promise<User> => {
  try {
    const response = await axios.put(`/passager/delete/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetByIdPassager = async (destinationId: number) => {
  try {
    const response = await axios.get(`/passager/getById/${destinationId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
