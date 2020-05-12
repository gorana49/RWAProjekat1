export class Korisnik
{
  constructor(id,korisnickoIme, sifra,br_napisanih_recepata=0)
  {
    this.id=id;
    this.korisnicko_ime= korisnickoIme;
    this.sifra = sifra;
    this.br_napisanih_recepata=br_napisanih_recepata;
    //this.NizRecepata=[];
  }

  getKorisnickoIme()
  {
    return this.korisnicko_ime;
  }
}