import { getFetch, getAllPages } from './fetch.js';
import { displayPlanet, displayDetails } from './dom.js';

document.addEventListener('DOMContentLoaded', async () => {
    const tbody = document.querySelector('#tbody');
    const spanNbrPlanete = document.querySelector('.span-nbr-plante');
    const planeteFilter = document.querySelector('#planete-filter');

    const planetesName = await getFetch("https://swapi.dev/api/planets/");
    let links = await getAllPages();

    displayPlanet(planetesName, spanNbrPlanete, tbody, true);
    displayDetails();

    function displayAllPlanets(){
        document.querySelector('#voir-plus').addEventListener('click', async e => {
            for (let link of links) {
                let req = await getFetch(link);
                await displayPlanet(req, spanNbrPlanete, tbody);
            }
            displayDetails();
            e.target.style.display = "none";
        });
    }
    displayAllPlanets();

    planeteFilter.addEventListener('change', () => {
        
    });
});
