const BASE_URL= "http://localhost:3000";

export async function fetchKorisnik(username) {
    return fetch(BASE_URL + "korisnik/" + username)
        .then(res => {res.json();
        console.log(res)})
        .catch(err => console.log(err));
  }