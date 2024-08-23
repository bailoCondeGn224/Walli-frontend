import * as Yup from "yup";
import { InitialValuesType, User } from "../Interface/InterfaceClient";

export const initialValuesEngin = {
  id: 0,
  immatricule: "",
  nomProprietaire: "",
  marque: "",
  modele: "",
  typeActivite: "",
  dateMiseEnSevice: "",
  validiteVisiteTechnique: "",
  numeroCarteVerte: "",
  existeAssurance: "Non",
  assuranceExpire: "",
  existeCarteGris: "Non",
  carteGrisExpire: "",
  existevignette: "Non",
  vignetteExpire: "",
};

export const fakeValuesEngin = {
  id: 0,
  immatricule: "ABC123",
  nomProprietaire: "John Doe",
  marque: "Toyota",
  modele: "Camry",
  typeActivite: "TAXI_MOTO",
  dateMiseEnSevice: "2020-01-01",
  validiteVisiteTechnique: "2023-01-01",
  numeroCarteVerte: "123456789",
  existeAssurance: "Oui",
  assuranceExpire: "2023-12-31",
  existeCarteGris: "Oui",
  carteGrisExpire: "2023-12-31",
  existevignette: "Oui",
  vignetteExpire: "2023-12-31",
};

export const EnginRoulantSchema = Yup.object().shape({
  immatricule: Yup.string().required("Immatricule est requis"),
  nomProprietaire: Yup.string().required("Nom propriétaire est requis"),
  marque: Yup.string().required("Marque est requise"),
  modele: Yup.string().required("Modèle est requis"),
  typeActivite: Yup.string().required("Type d'activité est requis"),
  dateMiseEnSevice: Yup.string().required(
    "Date de mise en service est requise"
  ),
  validiteVisiteTechnique: Yup.string().required(
    "Validité visite technique est requise"
  ),
  numeroCarteVerte: Yup.string().required("Numéro de carte verte est requis"),
  existeAssurance: Yup.boolean().required(
    "Existence de l'assurance est requise"
  ),
  assuranceExpire: Yup.string(),
  existeCarteGris: Yup.boolean().required(
    "Existence de la carte grise est requise"
  ),
  carteGrisExpire: Yup.string(),
  existevignette: Yup.boolean().required(
    "Existence de la vignette est requise"
  ),
  vignetteExpire: Yup.string(),
});

export const initialValuesUser = {
  firstname: "",
  lastname: "",
  username: "",
  sexe: "",
  email: "",
  role: "",
};

export const userSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  sexe: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  role: Yup.string().required("Required"),
});

export const initialUserValues: User = {
  firstname: "John",
  lastname: "Doe",
  username: "johndoe",
  sexe: "M",
  email: "johndoe@example.com",
  role: "User",
};
