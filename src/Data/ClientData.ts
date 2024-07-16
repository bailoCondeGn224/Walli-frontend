import { EnginRoulant } from "../Component/Interface/InterfaceClient";

interface Client {
    id: number;
    nom: string;
    prenom:string,
    email: string;
    telephone: string;
    sexe: 'M' | 'F';
  }
  
  const ClientData: Client[] = [
    { id: 1, nom: 'Diallo',prenom:'Alpha', email: 'alpha.diallo@example.com', telephone: '622-000-001', sexe: 'M' },
    { id: 2, nom: 'Sylla',prenom:'Binta', email: 'binta.sylla@example.com', telephone: '622-000-002', sexe: 'F' },
    { id: 3, nom: 'Bah',prenom:'Mamadou', email: 'mamadou.bah@example.com', telephone: '622-000-003', sexe: 'M' },
    { id: 4, nom: 'Sow',prenom:'Fatoumata', email: 'fatoumata.sow@example.com', telephone: '622-000-004', sexe: 'F' },
    { id: 5, nom: 'Camara',prenom:'Oumar', email: 'oumar.camara@example.com', telephone: '622-000-005', sexe: 'M' },
    { id: 6, nom: 'Diallo',prenom:'Aissata ', email: 'aissata.diallo@example.com', telephone: '622-000-006', sexe: 'F' },
    { id: 7, nom: 'Conté',prenom:'Ibrahima ', email: 'ibrahima.conte@example.com', telephone: '622-000-007', sexe: 'M' },
    { id: 8, nom: 'Barry',prenom:'Mariama ', email: 'mariama.barry@example.com', telephone: '622-000-008', sexe: 'F' },
    { id: 9, nom: 'Keita',prenom:'Moussa ', email: 'moussa.keita@example.com', telephone: '622-000-009', sexe: 'M' },
    { id: 10, nom: 'Camara',prenom:'Kadiatou ', email: 'kadiatou.camara@example.com', telephone: '622-000-010', sexe: 'F' },
  ];
  
  export default ClientData;

  export const enginsRoulants: EnginRoulant[] = [
    {
        id: 1,
        immatricule: '123ABCD',
        nomProprietaire: 'Alpha Diallo',
        marque: 'Toyota',
        modele: 'Corolla',
        typeActivite: 'Voiture Personelle',
        dateMiseEnSevice: '2022-01-15',
        validiteVisiteTechnique: '2024-01-15',
        numeroCarteVerte: 'CV123456',
        existeAssurance: true,
        assuranceExpire: '2024-01-15',
        existeCarteGris: true,
        carteGrisExpire: '2025-01-15',
        existevignette: true,
        vignetteExpire: '2024-06-15'
    },
    {
        id: 2,
        immatricule: '456EFGH',
        nomProprietaire: 'Binta Camara',
        marque: 'Honda',
        modele: 'Civic',
        typeActivite: 'Moto Personelle',
        dateMiseEnSevice: '2021-05-20',
        validiteVisiteTechnique: '2023-05-20',
        numeroCarteVerte: 'CV654321',
        existeAssurance: false,
        assuranceExpire: '2023-05-20',
        existeCarteGris: true,
        carteGrisExpire: '2024-05-20',
        existevignette: false,
        vignetteExpire: 'N/A'
    },
    {
        id: 3,
        immatricule: '789IJKL',
        nomProprietaire: 'Camara Keita',
        marque: 'Ford',
        modele: 'Focus',
        typeActivite: 'Moto Taxi',
        dateMiseEnSevice: '2019-07-10',
        validiteVisiteTechnique: '2022-07-10',
        numeroCarteVerte: 'CV789012',
        existeAssurance: true,
        assuranceExpire: '2023-07-10',
        existeCarteGris: true,
        carteGrisExpire: '2024-07-10',
        existevignette: true,
        vignetteExpire: '2023-12-10'
    },
    {
        id: 4,
        immatricule: '101MNOP',
        nomProprietaire: 'Diarra Konaté',
        marque: 'Mercedes',
        modele: 'Benz',
        typeActivite: 'Voiture Personelle',
        dateMiseEnSevice: '2020-08-25',
        validiteVisiteTechnique: '2023-08-25',
        numeroCarteVerte: 'CV123789',
        existeAssurance: true,
        assuranceExpire: '2024-08-25',
        existeCarteGris: true,
        carteGrisExpire: '2025-08-25',
        existevignette: true,
        vignetteExpire: '2024-02-25'
    },
    {
        id: 5,
        immatricule: '121QRST',
        nomProprietaire: 'Emmanuel Kaba',
        marque: 'BMW',
        modele: 'X5',
        typeActivite: 'Voiture Taxi',
        dateMiseEnSevice: '2021-12-30',
        validiteVisiteTechnique: '2024-12-30',
        numeroCarteVerte: 'CV987654',
        existeAssurance: true,
        assuranceExpire: '2024-12-30',
        existeCarteGris: true,
        carteGrisExpire: '2025-12-30',
        existevignette: true,
        vignetteExpire: '2024-07-30'
    },
    {
        id: 6,
        immatricule: '131UVWX',
        nomProprietaire: 'Fatoumata Bah',
        marque: 'Audi',
        modele: 'A4',
        typeActivite: 'Voiture Taxi',
        dateMiseEnSevice: '2018-09-15',
        validiteVisiteTechnique: '2023-09-15',
        numeroCarteVerte: 'CV456789',
        existeAssurance: true,
        assuranceExpire: '2023-09-15',
        existeCarteGris: true,
        carteGrisExpire: '2024-09-15',
        existevignette: true,
        vignetteExpire: '2024-03-15'
    },
    {
        id: 7,
        immatricule: '141YZAB',
        nomProprietaire: 'Gassama Soumah',
        marque: 'Nissan',
        modele: 'Qashqai',
        typeActivite: 'Voiture Taxi',
        dateMiseEnSevice: '2022-04-01',
        validiteVisiteTechnique: '2025-04-01',
        numeroCarteVerte: 'CV741258',
        existeAssurance: true,
        assuranceExpire: '2025-04-01',
        existeCarteGris: true,
        carteGrisExpire: '2026-04-01',
        existevignette: true,
        vignetteExpire: '2025-10-01'
    },
    {
        id: 8,
        immatricule: '151CDEF',
        nomProprietaire: 'Hawa Bangoura',
        marque: 'Hyundai',
        modele: 'Santa Fe',
        typeActivite: 'Voiture Personelle',
        dateMiseEnSevice: '2020-03-18',
        validiteVisiteTechnique: '2023-03-18',
        numeroCarteVerte: 'CV852963',
        existeAssurance: false,
        assuranceExpire: '2023-03-18',
        existeCarteGris: true,
        carteGrisExpire: '2024-03-18',
        existevignette: true,
        vignetteExpire: '2023-09-18'
    },
    {
        id: 9,
        immatricule: '161GHIJ',
        nomProprietaire: 'Ibrahima Sylla',
        marque: 'Kia',
        modele: 'Sorento',
        typeActivite: 'Moto Taxi',
        dateMiseEnSevice: '2021-06-30',
        validiteVisiteTechnique: '2024-06-30',
        numeroCarteVerte: 'CV963852',
        existeAssurance: true,
        assuranceExpire: '2024-06-30',
        existeCarteGris: true,
        carteGrisExpire: '2025-06-30',
        existevignette: true,
        vignetteExpire: '2024-12-30'
    },
    {
        id: 10,
        immatricule: '171KLMN',
        nomProprietaire: 'Jalloh Barry',
        marque: 'Volkswagen',
        modele: 'Golf',
        typeActivite: 'Moto Personelle',
        dateMiseEnSevice: '2020-11-20',
        validiteVisiteTechnique: '2023-11-20',
        numeroCarteVerte: 'CV852741',
        existeAssurance: true,
        assuranceExpire: '2023-11-20',
        existeCarteGris: true,
        carteGrisExpire: '2024-11-20',
        existevignette: false,
        vignetteExpire: 'N/A'
    }
];
