export interface addCustumer {
  isOpen: boolean;
  handleModalClose: () => void;
  id: number;
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
  nationality: any;
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

export interface UserUpdate {
  id: any;
  userId: any;
  firstname: string;
  lastname: string;
  username: string;
  sexe: string;
  email: string;
  roles: any;
}
export interface UpdateModalUserProps {
  isOpen: boolean;
  handleClose: () => void;
  initialUserValues: User;
  id: any;
}

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export interface InitialValuesType {
  userId: number;
  dateOfBirth: string;
  city: string;
  phone: string;
  typePiece: string;
  pieceNumber: string;
  nationality: CountryType;
}

export interface updateClient {
  idClient: number;
  isOpen: boolean;
  handleModalClose: () => void;
}
