export class Specialite {
	private delegation: string;
	private  cap: string;
	private  BTP: string;
	private  BTS: string;
	public  id!:number;
	private  sexe: string;
	private  lib_specialite: string;
	private  permis: string;
	constructor(delegation: string,cap: string,BTP: string,BTS: string,sexe: string,lib_specialite: string,permis: string){
		this.delegation=delegation;
		this.cap=cap;
		this.BTS=BTS;
		this.BTP=BTP;
		this.lib_specialite=lib_specialite;

		this.sexe=sexe;
		this.permis=permis;

	}
}
