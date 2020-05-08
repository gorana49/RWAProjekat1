export class Korisnik
{
  constructor(korisnickoIme, sifra,ime, prezime, br_napisanih_recepata=0)
  {
    this.korisnicko_ime= korisnickoIme;
    this.sifra = sifra;
    this.ime = ime;
    this.prezime= prezime;
    this.br_napisanih_recepata=br_napisanih_recepata;
    //this.NizRecepata=[];
  }
}