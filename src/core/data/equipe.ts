import { getAssetPath } from "@/core/helpers/assets";
import ApiService from "../services/ApiService";

interface IEquipe {

    name: string;
    rattachée: number;
    responsable: string;
    nombreEmployes: string;
    id: number


}

function fromAPI(data: any): IEquipe { return {
  name: data.nomEquipe,
    rattachée: data.rattache,
    responsable: data.responsable,
    nombreEmployes: data.nombreEmployes,    
    id: data.idEquipe,
};}

ApiService.setHeader();

export function fetchEquipe(): Promise<IEquipe[]> {
  return ApiService.get("Equipe/GetEquipes").then((response) => {
    return response.data.map(fromAPI);
  });
}





export type { IEquipe };