import { getAssetPath } from "@/core/helpers/assets";
import ApiService from "../services/ApiService";

interface ICustomer {
  id: string;
  name: string;
  email: string;
  equipe: number;
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
  reliquat: string;
  score: string;
  nationalite: string;}

function fromAPI(data: any): ICustomer { return {
  id: data.matricule,
  name: data.nom+" "+data.prenom,
  email: data.email,
  equipe: data.idEquipe.toString(),
  dateentree: data.dateEntre,
  poste: data.titre.toString(),
  image: data.LinkToPhoto,
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
  reliquat: data.reliquat,
  score: data.score,
};}





ApiService.setHeader();

export function fetchCustomers(): Promise<ICustomer[]> {
  return ApiService.get("Employee/GetEmployees").then((response) => {
    return response.data.map(fromAPI);
  });
}







export  function fetchCustomersByEquipe(matricule: number): Promise<ICustomer[]> {
  

  return ApiService.query("Employee/GetEmployeesByEquipe?idEquipe=7654", { params: { idEquipe: matricule } }).then((response) => {
    console.log('matricule est:'+ matricule);
    console.log('resultat de loperation est:'+ response.data.name);

    return response.data.map(fromAPI);
   
  
  });



  

}


export async function fetchCustomersById(matricule: string): Promise<ICustomer> {
  
    const response = await ApiService.query("Employee/GetEmployeesById", { params: { id: matricule } });
   console.log('resultat est:'+ response.data);
    
    return fromAPI(response.data);
  
}





export function fetchCustomersName(matricule: string): Promise<ICustomer[]> {
  return ApiService.query(`Employee/GetNameByMatricule`, { params: { matricule }}).then((response) => {
    // Si la réponse contient une liste de clients
    if (Array.isArray(response.data)) {
      return response.data.map(fromAPI);
    }
    // Si la réponse contient un seul client
    return [fromAPI(response.data)];
  });
}

export type { ICustomer };