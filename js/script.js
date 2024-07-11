import { getFetch } from "./fetch.js";

// Affichage dynamique les counts 
const nbrPeople = document.querySelector("#nbr-vivants");
const nbrVehicule = document.querySelector("#nbr-vehicules");
const nbrPlanete = document.querySelector("#nbr-planetes");

document.addEventListener('DOMContentLoaded', async () => {
    const People = await getFetch('https://swapi.dev/api/people/');
    const vehicules = await getFetch('https://swapi.dev/api/vehicles/');
    const planetes = await getFetch('https://swapi.dev/api/planets/');

    nbrPeople.textContent = People.count;
    nbrVehicule.textContent = vehicules.count;
    nbrPlanete.textContent = planetes.count;
});

