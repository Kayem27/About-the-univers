import { getFetch, getAllPages } from './fetch.js';
import { displayElement, displayDetails } from './dom.js';

document.addEventListener('DOMContentLoaded', async () => {
    const tbody = document.querySelector('#tbody');
    const spanNbrPlanete = document.querySelector('.span-nbr-plante');
    const planeteFilter = document.querySelector('#planete-filter');

    let allPlanets = [];
    const planetesName = await getFetch("https://swapi.dev/api/planets/");
    let links = await getAllPages();

    async function loadAllPlanets() {
        allPlanets = [...planetesName.results];
        for (let link of links) {
            let req = await getFetch(link);
            allPlanets = [...allPlanets, ...req.results];
        }
    }

   
    await loadAllPlanets();
    displayElement({ results: allPlanets }, spanNbrPlanete, tbody, true);
    displayDetails();

 
    function filterPlanets(populationRange) {
        let filteredPlanets = [];
        switch (populationRange) {
            case "cent-mille":
                filteredPlanets = allPlanets.filter(p => p.population !== "unknown" && +p.population <= 100000);
                break;
            case "cent-million":
                filteredPlanets = allPlanets.filter(p => p.population !== "unknown" && +p.population > 100000 && +p.population <= 100000000);
                break;
            case "plus-cent-million":
                filteredPlanets = allPlanets.filter(p => p.population !== "unknown" && +p.population > 100000000);
                break;
            default:
                filteredPlanets = allPlanets;
                break;
        }
        tbody.innerHTML = '';
        displayElement({ results: filteredPlanets }, spanNbrPlanete, tbody, true);
        displayDetails();
    }

    planeteFilter.addEventListener('change', (e) => {
        filterPlanets(e.target.value);
    });
});
