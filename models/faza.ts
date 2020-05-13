export class Faza
{
  id:number;
  naziv:string;
  trajanje:number;
  opis:string;
  paralelno:string;
  constructor(id_faze:number, naziv:string, trajanje:number, opis:string, paralelno:string)
  {
    this.id = id_faze;
    this.naziv = naziv;
    this.trajanje = trajanje;
    this.opis= opis;
    this.paralelno= paralelno;
  }

  getTrajanje()
  {
    return this.trajanje;
  }
  getOpis()
  {
    return this.opis;
  }
}