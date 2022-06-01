export class Specialite {
	private delegation: string;
	private  cap: string;
	private  btp: string;
	private  bts: string;
	public  id!:number;
	private  sexe: string;
	private  lib_specialite: string;
	private  permis: string;
	constructor(delegation: string,cap: string,btp: string,bts: string,sexe: string,lib_specialite: string,permis: string){
		this.delegation=delegation;
		this.cap=cap;
		this.bts=bts;
		this.btp=btp;
		this.lib_specialite=lib_specialite;

		this.sexe=sexe;
		this.permis=permis;

	}
}
