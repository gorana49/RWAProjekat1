export class Korisnik
{
  id:number;
  korisnicko_ime:string;
  sifra:string;
  br_napisanih_recepata:number;

  constructor(id:number,korisnickoIme:string, sifra:string,br_napisanih_recepata:number=0)
  {
    this.id=id;
    this.korisnicko_ime= korisnickoIme;
    this.sifra = sifra;
    this.br_napisanih_recepata=br_napisanih_recepata;
   // this.NizRecepata=[];
  }

  //getKorisnickoIme()
  //{
  //  return this.korisnicko_ime;
  //}
}