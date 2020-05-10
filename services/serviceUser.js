const BASE_URL= "http://localhost:3000";
export class RecipesUsers
{
    constructor(){
    }
   async fetchKorisnik(username) {
    return fetch(`http://localhost:3000/korisnik?korisnicko_ime=${username}`)
        .then(res => {res.json();
        console.log(res)})
        .catch(err => console.log(err));
  }

  async getUsers() {
    return fetch(`http://localhost:3000/korisnik`)
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  updateUsers(user){
    const newUser={
        method:"put",
        body: JSON.stringify(flight),
        headers:{'Content-Type':'application/json'},
    };
    return from(fetch(`http://localhost:3000/korisnik/${user.korisnicko_ime}`,newUser).then((response)=>response.json()))
    }
}