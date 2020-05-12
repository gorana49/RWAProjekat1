import { from } from "rxjs";
import { isConstructorDeclaration } from "typescript";
const BASE_URL= "http://localhost:3000";
export class UsersService
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
        method:"post",
        body: JSON.stringify(user),
        headers:{'Content-Type':'application/json'},
    };
    console.log(newUser);
    return from(fetch(`http://localhost:3000/korisnik`,newUser).then((response)=>response.json()))
    }
}