function getPeople(){
    return fetch("https://swapi.dev/api/people/")
    .then(res => res.json())
    .then(res => {
        console.log(res);
        return res;
    })
    
}
function getPanete(){
    return fetch("https://swapi.dev/api/planets/")
    .then(res => res.json())
    .then(res => {
        console.log(res);
        return res;
    })
    
}
function getVehicules(){
    return fetch("https://swapi.dev/api/vehicles/")
    .then(res => res.json())
    .then(res => {
        console.log(res);
        return res;
    })
    
}

// Affichage dynamique des valeurs 
const nbrPeople = document.querySelector("#nbr-vivants");
const nbrVehicule = document.querySelector("#nbr-vehicules");
const nbrPlanete = document.querySelector("#nbr-planetes");

getPeople();
getPanete();
getVehicules();
