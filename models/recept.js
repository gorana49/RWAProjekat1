export class Recept
{
  constructor(id_recepta, ime, tip, ukupno_trajanje)
  {
    this.id_recepta = id_recepta;
    this.naziv = ime;
    this.ukupno_trajanje = ukupno_trajanje;
    this.nizFaza=[];
    this.nizSastojaka=[];
    this.tip=tip;
  }
}