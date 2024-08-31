import * as Yup from "yup";
import {
  InitialValuesPassagerAdd,
  InitialValuesType,
  User,
} from "../Interface/InterfaceClient";

export const initialValuesEngin = {
  id: 0,
  proprietaireId: null,
  lineId: null,
  immatricule: "",
  nomProprietaire: "",
  marque: "",
  model: "",
  typeActivity: "",
  dateService: "",
  numeroCarteVerte: "",
  existAssurance: "Non",
  dateEpireAssurance: "",
  existCarteGris: "Non",
  dateEpireCarteGris: "",
  existVignette: "Non",
  dateEpireVignette: "",
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
  proprietaireId: Yup.number().required("ID propriétaire est requis"),
  lineId: Yup.number(),
  marque: Yup.string().required("Marque est requise"),
  model: Yup.string().required("Modèle est requis"),
  typeActivity: Yup.string().required("Type d'activité est requis"),
  dateService: Yup.string().required("Date de mise en service est requise"),
  numeroCarteVerte: Yup.string().required("Numéro de carte verte est requis"),
  existAssurance: Yup.string().required("Existence de l'assurance est requise"),
  dateEpireAssurance: Yup.string(),
  existCarteGris: Yup.string().required(
    "Existence de la carte grise est requise"
  ),
  dateEpireCarteGris: Yup.string(), // Enlève la condition pour ce champ
  existVignette: Yup.string().required("Existence de la vignette est requise"),
  dateEpireVignette: Yup.string(),
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
  role: [],
  id: undefined,
};

export const SignupSchema = Yup.object().shape({
  dateOfBirth: Yup.string().required("Date de naissance est requise"),
  ville: Yup.string().required("Ville est requise"),
  quartier: Yup.string().required("Quartier est requis"),
  phone: Yup.string().required("Numéro de téléphone est requis"),
  pays: Yup.object()
    .shape({
      label: Yup.string().required("Nationalité est obligatoire"),
      code: Yup.string().required("Code nationalité est obligatoire"),
      phone: Yup.string().required("Téléphone nationalité est obligatoire"),
    })
    .required("Nationalité est obligatoire"),
  userId: Yup.number().required("UserID est obligatoire"),
});
export const SignupSchemaLine = Yup.object().shape({
  nomline: Yup.string().required("Nom ligne est requis"),
  ville: Yup.string().required("ville ligne est requis"),
  quartier: Yup.string().required("quartier ligne est requis"),
  longitude: Yup.string().required("Longitude est requise"),
  altitude: Yup.string().required("Altitude est requise"),
  latitude: Yup.string().required("Latitude est requise"),
  syndicatId: Yup.number().required("Syndicat ID est obligatoire"),
});

export const SignupSchemaGare = Yup.object().shape({
  nom: Yup.string().required("Nom ligne est requis"),
  city: Yup.string().required("ville ligne est requis"),
  longitude: Yup.string().required("Longitude est requise"),
  altitude: Yup.string().required("Altitude est requise"),
  latitude: Yup.string().required("Latitude est requise"),
  syndicatId: Yup.number().required("Syndicat ID est obligatoire"),
});

export const SignupSchemaDestination = Yup.object().shape({
  villeDepart: Yup.string().required("Ville de départ est requise"),
  villeDestination: Yup.string().required("Ville de destination est requise"),
  prix: Yup.string().required("Prix est requis"),
  gareId: Yup.string().required("Gare ID est requis"),
});

export const SignupSchemaLineUpdate = Yup.object().shape({
  nomline: Yup.string().required("Nom ligne est requis"),
  ville: Yup.string().required("ville ligne est requis"),
  quartier: Yup.string().required("quartier ligne est requis"),
  syndicatId: Yup.number().required("Syndicat ID est obligatoire"),
});

export const userSchemaPassager = Yup.object().shape({
  nom: Yup.string()
    .required("Nom is required")
    .max(80, "Nom must be at most 80 characters"),
  prenom: Yup.string()
    .required("Prenom is required")
    .max(80, "Prenom must be at most 80 characters"),
  villeDepart: Yup.string()
    .required("Ville Départ is required")
    .max(80, "Ville Départ must be at most 80 characters"),
  villeDestination: Yup.string()
    .required("Ville Destination is required")
    .max(80, "Ville Destination must be at most 80 characters"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{7,10}$/, "Phone number must be 7 to 10 digits"), // Adjust regex based on phone format
  status: Yup.string()
    .required("Status is required")
    .oneOf(["ANNULER", "ATTENTE", "AFFECTER"], "Invalid status value"), // Adjust based on valid status values
  gareId: Yup.number()
    .required("Gare ID is required")
    .positive("Gare ID must be a positive number")
    .integer("Gare ID must be an integer"),
});

export const initialValuesLine = {
  nomline: "",
  ville: "",
  quartier: "",
  longitude: "",
  altitude: "",
  latitude: "",
  syndicatId: "",
};

export const initialValuesGare = {
  nom: "",
  city: "",
  longitude: "",
  altitude: "",
  latitude: "",
  syndicatId: "",
};

export const initialValuesDestination = {
  villeDepart: "",
  villeDestination: "",
  prix: "",
  gareId: "",
};

export const initialValuesPassagerAdd: InitialValuesPassagerAdd = {
  nom: "",
  prenom: "",
  villeDepart: "",
  villeDestination: "",
  phone: "",
  status: "ATTENTE",
  gareId: 0,
};

export const ActionPassager = ["ANNULER", "AFFECTER", "ATTENTE"];
export const validTypeActivities = [
  "MOTO_TAXI",
  "VOITURE_TAXI",
  "MOTO_PERSONNELLE",
  "VOITURE_PERSONNELLE",
];
