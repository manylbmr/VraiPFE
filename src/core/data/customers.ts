import { getAssetPath } from "@/core/helpers/assets";
import ApiService from "../services/ApiService";

interface ICustomer {id: number;
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
  nationalite: string;}

function fromAPI(data: any): ICustomer { return {
  id: data.matricule,
  name: data.nom,
  email: data.email,
  equipe: data.idEquipe.toString(),
  dateentree: data.dateEntre,
  poste: data.titre.toString(),
  image: data.linkToPhoto,
  nameAr: data.nomArabe,
  maidenName: data.nomJeuneFille,
  maidenNameAr: data.nomJeuneFilleArabe,
  dateNaissance: data.dateNaissance,
  lieuNaissance: data.lieuNaissance,
  Sexe: data.sexe.toString(),
  situationFamiliale: data.situationFamiliale.toString(),
  nombreEnfants: data.nbEnfant?.toString() || "0",
  adresse: `${data.communeNaissance}, ${data.wilayaNaissance}, ${data.paysNaissance}`,
  telephone: "",
  nationalite: data.nationalites,
};}

ApiService.setHeader();

export function fetchCustomers(): Promise<ICustomer[]> {
  return ApiService.get("Employee/GetEmployees").then((response) => {
    return response.data.map(fromAPI);
  });
}

export type { ICustomer };