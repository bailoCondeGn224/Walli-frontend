export interface addCustumer{
    isOpen: boolean;
    handleModalClose: () => void;
}
export interface showClient{
    nom:string;
    prenom:string;
    ville:string;
    email:string;
    role:string;
    dateNaissance:string;
    pieceIdentite:string;
    sexe:string;
    typePiece:string;
    numeroTelephone:string;
    nationnalite:string;
}

export interface connexionInterface{
    email:string;
    password:string;
    
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
}
export interface EnginRoulant {
    id: number;
    immatricule: string;
    nomProprietaire: string;
    marque: string;
    modele: string;
    typeActivite:string;
    dateMiseEnSevice:string;
    validiteVisiteTechnique:string;
    numeroCarteVerte:string;
    existeAssurance:boolean;
    assuranceExpire:string;
    existeCarteGris:boolean;
    carteGrisExpire:string;
    existevignette:boolean;
    vignetteExpire:string;
}