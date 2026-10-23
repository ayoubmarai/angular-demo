export interface Cours {
    id: number;
    titre: string;
    categorie: string;
    duree: string;
    places: number;
    // gardez ici les autres champs de votre TP2 (description, etc.)
}
export const COURS: Cours[] = [
    { id: 1, titre: 'Angular 22', categorie: 'Front-end', duree: '24h', places: 12 },
    { id: 2, titre: 'Angular 22 II', categorie: 'Front-end', duree: '24h', places: 12 },
    { id: 3, titre: 'Git', categorie: 'Outils', duree: '16h', places: 8 },
    { id: 4, titre: 'PHP', categorie: 'Langage', duree: '16h', places: 8 },
    { id: 5, titre: 'Java', categorie: 'Langage', duree: '16h', places: 8 },
    { id: 6, titre: 'TypeScript II', categorie: 'Langage', duree: '16h', places: 8 },
    { id: 7, titre: 'Node.js', categorie: 'Back-end', duree: '20h', places: 15 },
];
