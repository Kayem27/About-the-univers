import { getPanete, getVehicules, getPeople } from "./fetch.js";

// Affichage dynamique les counts 
const nbrPeople = document.querySelector("#nbr-vivants");
const nbrVehicule = document.querySelector("#nbr-vehicules");
const nbrPlanete = document.querySelector("#nbr-planetes");

document.addEventListener('DOMContentLoaded', async () => {
    const People = await getPeople();
    const vehicules = await getVehicules();
    const planetes = await getPanete();

    nbrPeople.textContent = People.count;
    nbrVehicule.textContent = vehicules.count;
    nbrPlanete.textContent = planetes.count;
});

