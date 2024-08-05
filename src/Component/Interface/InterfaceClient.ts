export interface addCustumer {
  isOpen: boolean;
  handleModalClose: () => void;
}
export interface showClient {
  nom: string;
  prenom: string;
  ville: string;
  email: string;
  role: string;
  dateNaissance: string;
  pieceIdentite: string;
  sexe: string;
  typePiece: string;
  numeroTelephone: string;
  nationnalite: string;
}

export interface connexionInterface {
  email: string;
  password: string;
}
export interface BodyInterface {
  clientData: any;
  columns: any;
  handleModalOpen: () => void;
}
export interface EnginRoulant {
  id: number;
  immatricule: string;
  nomProprietaire: string;
  marque: string;
  modele: string;
  typeActivite: string;
  dateMiseEnSevice: string;
  validiteVisiteTechnique: string;
  numeroCarteVerte: string;
  existeAssurance: string;
  assuranceExpire: string;
  existeCarteGris: string;
  carteGrisExpire: string;
  existevignette: string;
  vignetteExpire: string;
}

export interface Taxes {
  id: number;
  matricule: string;
  marque: string;
  model: string;
  montant: number;
  status: boolean;
  typeActivite: string;
  mois: string;
}

export interface ToggleModal {
  isOpen: boolean;
  handleClose: () => void;
}
export interface qrCode {
  value: string;
}

export interface User {
  firstname: string;
  lastname: string;
  username: string;
  sexe: string;
  email: string;
  role: string;
}
export interface UpdateModalUserProps {
  isOpen: boolean;
  handleClose: () => void;
  initialUserValues: User;
}
