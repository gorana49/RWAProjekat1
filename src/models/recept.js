export class Recept
{
  constructor(id_recepta, ime, ukupno_trajanje)
  {
    this.id_recepta = id_recepta;
    this.ime = ime;
    this.ukupno_trajanje = ukupno_trajanje;
    this.nizFaza=[];
    this.nizSastojaka=[];
  }
}