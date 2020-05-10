export class Korisnik
{
  constructor(korisnickoIme, sifra,br_napisanih_recepata=0)
  {
    this.korisnicko_ime= korisnickoIme;
    this.sifra = sifra;
    this.br_napisanih_recepata=br_napisanih_recepata;
    //this.NizRecepata=[];
  }
}