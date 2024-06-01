import { getAssetPath } from "@/core/helpers/assets";
import ApiService from "../services/ApiService";

interface IDemandes {
  id: number;
  MatriculeEmp: string;
  typeDemande: string;
  DateCreation: string;
  DateDebut: string;
  DateFin: string;
  Etat: string;
  Motif: string;
  TypeDoc: string;
  TypeConge: string;

  JoursRecup: string;
  Isremunere: boolean;


}

function fromAPI(data: any): IDemandes {
  return {
    id: data.id,
    MatriculeEmp: data.matriculeEmp,
    typeDemande: data.type,
    DateCreation: data.dateCreation,
    DateDebut: data.dateDebut,
    DateFin: data.dateFin,
    Etat: data.etatActuel,
    Motif: data.commentaire,
    TypeDoc: data.typeDoc,
    TypeConge: data.typeConge,
    JoursRecup: data.jourRecup,
    Isremunere: data.isRemuneree,
  };
}

ApiService.setHeader();

export function fetchDemandes(): Promise<IDemandes[]> {
  return ApiService.query("Demande/GetDemandesByType?type=1", {}).then((response) => {
    return response.data.map(fromAPI);
  });
}

export type { IDemandes };