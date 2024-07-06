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
  