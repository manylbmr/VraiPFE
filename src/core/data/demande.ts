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

function fromAPI(data: any): IDemandes { return {
  id: data.ID,
    MatriculeEmp: data.MatriculeEmp,
    typeDemande: data.TypeDemande,
    DateCreation: data.DateCreation,
    DateDebut: data.DateDebut,
    DateFin: data.DateFin,
    Etat: data.EtatActuel,
    Motif: data.Commentaire,
    TypeDoc: data.TypeDoc,
    TypeConge: data.TypeConge,
    JoursRecup: data.JourRecup,
    Isremunere: data.IsRemuneree,

  
};}

ApiService.setHeader();

export function fetchDemandes(): Promise<IDemandes[]> {
  return ApiService.query("Demande/GetDemandesByType?type=1",{}).then((response) => {
    return response.data.map(fromAPI);
  });
}

export type { IDemandes };