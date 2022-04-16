export class Formation {

    diplome_formation!: string;
    date_diplome_formation!:string;
    moyenne!:string;
    specialite_formation!:string;
    constructor(diplome_formation:string,specialite_formation:string){
        this.diplome_formation=diplome_formation;
        this.specialite_formation=specialite_formation;
    }
}
