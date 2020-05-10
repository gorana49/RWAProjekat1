export class Recept
{
  constructor(id_recepta, ime, tip, ukupno_trajanje, nizFaza,nizSastojaka)
  {
    this.id_recepta = id_recepta;
    this.naziv = ime;
    this.tip=tip;
    this.ukupno_trajanje = ukupno_trajanje;
    this.nizFaza= nizFaza;
    this.nizSastojaka=nizSastojaka;
   
  }
}