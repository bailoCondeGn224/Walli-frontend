import * as Yup from "yup";

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
    existeAssurance: false,
    assuranceExpire: "",
    existeCarteGris: false,
    carteGrisExpire: "",
    existevignette: false,
    vignetteExpire: "",
  };

  export  const EnginRoulantSchema = Yup.object().shape({
    id: Yup.number().required("ID est requis"),
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
    assuranceExpire: Yup.string().required(
      "Date d'expiration de l'assurance est requise"
    ),
    existeCarteGris: Yup.boolean().required(
      "Existence de la carte grise est requise"
    ),
    carteGrisExpire: Yup.string().required(
      "Date d'expiration de la carte grise est requise"
    ),
    existevignette: Yup.boolean().required(
      "Existence de la vignette est requise"
    ),
    vignetteExpire: Yup.string().required(
      "Date d'expiration de la vignette est requise"
    ),
  });