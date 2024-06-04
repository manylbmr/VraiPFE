import { getAssetPath } from "@/core/helpers/assets";
import ApiService from "../services/ApiService";



interface IDemandesConge {
    id: number;
    MatriculeEmp: string;
    typeDemande: string;
    DateCreation: string;
    DateDebut: string;
    DateFin: string;
    Etat: string;
    Motif: string;
    TypeConge: string;
    image: string;
    lienversjust: string;
    
  }




interface IDemandesAbsence {
  id: number;
  MatriculeEmp: string;
  typeDemande: string;
  DateCreation: string;
  DateDebut: string;
  DateFin: string;
  Etat: string;
  Motif: string;
  JoursRecup: string;
  Isremunere: boolean;
    image: string;
    lienversjust: string;
}



interface IDemandesChang {
    id: number;
    MatriculeEmp: string;
    typeDemande: string;
    DateCreation: string;
    
    Etat: string;
   NouvelleInformationMatricule: string;
    image: string;

   
  }



interface IDemandesDoc {
    id: number;
    MatriculeEmp: string;
    typeDemande: string;
    DateCreation: string;
    Etat: string;
    Motif: string;
    TypeDoc: string;
    image: string;
    userid: string;

  }



  interface IDemandes {
    id: number;
    equipe:number;
    MatriculeEmp: string;
    typeDemande: string;
    DateCreation: string;
    Etat: string;
    Motif: string;
    TypeDoc: string;
    TypeConge: string;
    DateDebut: string;
    DateFin: string;
    NouvelleInformationMatricule: string;
    JoursRecup: string;
    Isremunere: boolean;
    image: string;


  }





function fromAPIAbs(data: any): IDemandesAbsence {
  return {
    id: data.id,
    
    MatriculeEmp: data.matriculeEmp,
    typeDemande: data.type,
    DateCreation: data.dateCreation,
    DateDebut: data.dateDebut,
    DateFin: data.dateFin,
    Etat: data.etatActuel,
    Motif: data.commentaire,
    JoursRecup: data.jourRecup,
    Isremunere: data.isRemuneree,
    image: getAssetPath("img/absence.png"),
    lienversjust: data.LienVersJustification,
    
  };
}



function fromAPIDoc(data: any): IDemandesDoc {
    return {
      id: data.id,
      MatriculeEmp: data.matriculeEmp,
      typeDemande: data.type,
      DateCreation: data.dateCreation,
      Etat: data.etatActuel,
      Motif: data.commentaire,
      TypeDoc: data.typeDoc,
      userid: data.userid,
        image: getAssetPath("img/document.png"),
    
    };
  }


  function fromAPIConge(data: any): IDemandesConge {
    return {
      id: data.id,
      MatriculeEmp: data.matriculeEmp,
      typeDemande: data.type,
      DateCreation: data.dateCreation,
      Etat: data.etatActuel,
      Motif: data.commentaire,
      
        TypeConge: data.typeConge,
        DateDebut: data.dateDebut,
        DateFin: data.dateFin,
        image: getAssetPath("img/conge.png"),
        lienversjust: data.LienVersJustification,
    
    };
  }




  function fromAPIChang(data: any): IDemandesChang {
    return {
      id: data.id,
      MatriculeEmp: data.matriculeEmp,
      typeDemande: data.type,
      DateCreation: data.dateCreation,
      Etat: data.etatActuel,
        NouvelleInformationMatricule: data.nouvelleInformationMatricule,
        image: getAssetPath("img/changement.png"),
    };
  }


  function fromAPI(data: any): IDemandes {
    return {
      id: data.id,
      MatriculeEmp: data.matriculeEmp,
      typeDemande: data.type,
      DateCreation: data.dateCreation,
      Etat: data.etatActuel,
      Motif: data.commentaire,
      TypeDoc: data.typeDoc,
      equipe: data.equipe,
        TypeConge: data.typeConge,
        DateDebut: data.dateDebut,
        DateFin: data.dateFin,
        NouvelleInformationMatricule: data.nouvelleInformationMatricule,
        JoursRecup: data.jourRecup,
        Isremunere: data.isRemuneree,
        image: getAssetPath("img/absence.png"),


    
    };
  }









ApiService.setHeader();

export function fetchDemandesAbsence(): Promise<IDemandesAbsence[]> {
  return ApiService.query("Demande/GetDemandesByType?type=1", {}).then((response) => {
    return response.data.map(fromAPIAbs);
  });
}

export function fetchDemandesConge(): Promise<IDemandesConge[]> {
    return ApiService.query("Demande/GetDemandesByType?type=0", {}).then((response) => {
      return response.data.map(fromAPIConge);
    });
  }

  export function fetchDemandesDocument(): Promise<IDemandesDoc[]> {
    return ApiService.query("Demande/GetDemandesByType?type=3", {}).then((response) => {
      return response.data.map(fromAPIDoc);
    });
  }

  export function fetchDemandesChangement(): Promise<IDemandesChang[]> {
    return ApiService.query("Demande/GetDemandesByType?type=2", {}).then((response) => {
      return response.data.map(fromAPIChang);
    });
  }

  export function UpdateDemande(id:number , etat:number ): Promise<IDemandesChang[]> {
    return ApiService.query("Demande/update", {params:{id:id, newEtat:etat}}).then((response) => {
      return response.data.map(fromAPIChang);
    });
  }



  export async function fetchDemandes(matricule: string): Promise<IDemandes[]> {
    try {
      console.log(matricule + " matricule");
      const response = await ApiService.query("Demande/GetDemandesByEmp", { params: { Emp: matricule } });
      console.log(response.data);
      return response.data.map(fromAPI);
    } catch (error) {
      console.error('Error fetching demandes:', error);
      throw error;
    }
  }


    
      



export type { IDemandesAbsence, IDemandesConge, IDemandesDoc, IDemandesChang, IDemandes};