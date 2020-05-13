export class Recept
{

  id: number;
  naziv:string;
  tip:string;
  ukupno_trajanje:string;
  nizFaza: number[];
  nizSastojaka: number[];
  constructor(id_recepta:number, ime:string, tip:string, ukupno_trajanje:string, nizFaza:number[],nizSastojaka:number[])
  {
    this.id = id_recepta;
    this.naziv = ime;
    this.tip=tip;
    this.ukupno_trajanje = ukupno_trajanje;
    this.nizFaza= nizFaza;
    this.nizSastojaka=nizSastojaka;
  }
}