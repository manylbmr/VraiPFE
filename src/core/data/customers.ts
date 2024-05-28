import { getAssetPath } from "@/core/helpers/assets";

interface ICustomer {
  id: number;
  name: string;
  email: string;
  equipe: string;
  dateentree: string;
  poste: string;
  image: string;
  nameAr: string;
  maidenName: string;
  maidenNameAr: string;
  dateNaissance: string;
  lieuNaissance: string;
  Sexe: string;
  situationFamiliale: string;
  nombreEnfants: string;
  adresse: string;
  telephone: string;
  nationalite: string;


  
}

const customers: Array<ICustomer> = [
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Max Smith",
    email: "m.smith@kpmg.com.au",
    equipe: "département developpement",
    dateentree: "12/11/2020",
    poste: "developpeur",
    image: getAssetPath("media/users/300_1.jpg"),
    nameAr: "ماكس سميث",
    maidenName: "Max Smith",
    maidenNameAr: "ماكس سميث",
    dateNaissance: "12/11/1990",
    lieuNaissance: "Paris",
    Sexe: "Homme",
    situationFamiliale: "Célibataire",
    nombreEnfants: "0",
    adresse: "Paris",
    telephone: "0600000000",
    nationalite: "Française",
   
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Manyl Bouammar",
    email: "mbmr@kpmg.com.au",
    equipe: "département Comptabilité",
    dateentree: "23/09/2019",
    poste: "comptable",
    image: getAssetPath("media/users/300_1.jpg"),
    nameAr: "ماكس سميث",
    maidenName: "Max Smith",
    maidenNameAr: "ماكس سميث",
    dateNaissance: "12/11/1990",
    lieuNaissance: "Paris",
    Sexe: "Homme",
    situationFamiliale: "Célibataire",
    nombreEnfants: "0",
    adresse: "Paris",
    telephone: "0600000000",
    nationalite: "Française",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "abdou lemmouchi",
    email: "alm@kpmg.com.au",
    equipe: "département developpement",
    dateentree: "03/02/2013",
    poste: "developpeur",
    image: getAssetPath("media/users/300_1.jpg"),
    nameAr: "ماكس سميث",
    maidenName: "Max Smith",
    maidenNameAr: "ماكس سميث",
    dateNaissance: "12/11/1990",
    lieuNaissance: "Paris",
    Sexe: "Homme",
    situationFamiliale: "Célibataire",
    nombreEnfants: "0",
    adresse: "Paris",
    telephone: "0600000000",
    nationalite: "Française",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Max Smith",
    email: "m.smith@kpmg.com.au",
    equipe: "département developpement",
    dateentree: "12 Nov 2020, 2:01 pm",
    poste: "developpeur",
    image: getAssetPath("media/users/300_1.jpg"),
    nameAr: "ماكس سميث",
    maidenName: "Max Smith",
    maidenNameAr: "ماكس سميث",
    dateNaissance: "12/11/1990",
    lieuNaissance: "Paris",
    Sexe: "Homme",
    situationFamiliale: "Célibataire",
    nombreEnfants: "0",
    adresse: "Paris",
    telephone: "0600000000",
    nationalite: "Française",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Max Smith",
    email: "m.smith@kpmg.com.au",
    equipe: "département developpement",
    dateentree: "12 Nov 2020, 2:01 pm",
    poste: "developpeur",
    image: getAssetPath("media/users/300_1.jpg"),
    nameAr: "ماكس سميث",
    maidenName: "Max Smith",
    maidenNameAr: "ماكس سميث",
    dateNaissance: "12/11/1990",
    lieuNaissance: "Paris",
    Sexe: "Homme",
    situationFamiliale: "Célibataire",
    nombreEnfants: "0",
    adresse: "Paris",
    telephone: "0600000000",
    nationalite: "Française",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Max Smith",
    email: "m.smith@kpmg.com.au",
    equipe: "département developpement",
    dateentree: "12 Nov 2020, 2:01 pm",
    poste: "developpeur",
    image: getAssetPath("media/users/300_1.jpg"),
    nameAr: "ماكس سميث",
    maidenName: "Max Smith",
    maidenNameAr: "ماكس سميث",
    dateNaissance: "12/11/1990",
    lieuNaissance: "Paris",
    Sexe: "Homme",
    situationFamiliale: "Célibataire",
    nombreEnfants: "0",
    adresse: "Paris",
    telephone: "0600000000",
    nationalite: "Française",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Max Smith",
    email: "m.smith@kpmg.com.au",
    equipe: "département developpement",
    dateentree: "12 Nov 2020, 2:01 pm",
    poste: "developpeur",
    image: getAssetPath("media/users/300_1.jpg"),
    nameAr: "ماكس سميث",
    maidenName: "Max Smith",
    maidenNameAr: "ماكس سميث",
    dateNaissance: "12/11/1990",
    lieuNaissance: "Paris",
    Sexe: "Homme",
    situationFamiliale: "Célibataire",
    nombreEnfants: "0",
    adresse: "Paris",
    telephone: "0600000000",
    nationalite: "Française",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Max Smith",
    email: "m.smith@kpmg.com.au",
    equipe: "département developpement",
    dateentree: "12 Nov 2020, 2:01 pm",
    poste: "developpeur",
    image: getAssetPath("media/users/300_1.jpg"),
    nameAr: "ماكس سميث",
    maidenName: "Max Smith",
    maidenNameAr: "ماكس سميث",
    dateNaissance: "12/11/1990",
    lieuNaissance: "Paris",
    Sexe: "Homme",
    situationFamiliale: "Célibataire",
    nombreEnfants: "0",
    adresse: "Paris",
    telephone: "0600000000",
    nationalite: "Française",
  },
 
];

export type { ICustomer };

export default customers;
