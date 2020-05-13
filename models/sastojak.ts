export class Sastojak
{
  id:number;
  naziv:string;
  kolicina:string;
  constructor(id_sastojka:number,naziv:string,kolicina:string)
  {
    this.id = id_sastojka;
    this.naziv = naziv;
    this.kolicina= kolicina;
  }
}