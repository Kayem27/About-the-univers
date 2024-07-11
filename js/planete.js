import { getPanete, getFetch } from "./fetch.js";

const tbody = document.querySelector('#tbody');
const spanNbrPlanete = document.querySelector('.span-nbr-plante');

document.addEventListener('DOMContentLoaded', async () => {
    const planetesName = await getPanete("https://swapi.dev/api/planets/");
    let links = [];
    let nbrPages = 0;

    // Récupérer les liens et leurs nombres
    async function getCountPages() {
        let fetch = await getFetch("https://swapi.dev/api/planets/");

        while (fetch.next != null) {
            links.push(fetch.next)
            nbrPages++;
            fetch = await getFetch(fetch.next);
        }
        console.log(links);
        return links;

    }
    getCountPages();
    console.log(links);


    // Afficher toutes les planètes
    document.querySelector('#voir-plus').addEventListener('click', async (e) =>  {
        for (let i = 0; i <= nbrPages -1; i++) {
            let req = await getFetch(links[i]);
            console.log(links[i]);
            await displayPlanet(req);
            displayDetails();
        }
        e.target.style.display="none";
    } )


    // Afficher les planètes
    function displayPlanet(resName, displaySpan){
        if(displaySpan == true){
            spanNbrPlanete.innerText += `(${resName.count})`;
        }
    
        let allPlanete = resName.results;
        Object.values(allPlanete).forEach(onePlanete => {
            const tr = `<tr>
                                    <td dataName = "${onePlanete.name}" dataPopulation="${onePlanete.population}" dataDiametre="${onePlanete.diameter}" dataGravity=" ${onePlanete.gravity}" dataTerrain="${onePlanete.terrain}" dataClimat="${onePlanete.climate}">${onePlanete.name}</td>
                                    <td dataName = "${onePlanete.name}" dataPopulation="${onePlanete.population}" dataDiametre="${onePlanete.diameter}" dataGravity=" ${onePlanete.gravity}" dataTerrain="${onePlanete.terrain}" dataClimat="${onePlanete.climate}" >${onePlanete.terrain}</td>
                                </tr> `
            tbody.innerHTML += tr;
    
        });
    }

    displayPlanet(planetesName, true);

    // Afficher les details
    function displayDetails(){
        const allTr = document.querySelectorAll('tr');
        allTr.forEach((tr) => {
            tr.addEventListener('click', (e) => {
    
               const dataName = e.target.getAttribute('dataName');
               const dataPopulation = e.target.getAttribute('dataPopulation');
               const dataDiametre = e.target.getAttribute('dataDiametre');
               const dataClimat = e.target.getAttribute('dataClimat');
               const dataGravity = e.target.getAttribute('dataGravity');
               const dataTerrain = e.target.getAttribute('dataTerrain');
    
                const planeteName = document.querySelector('#planete-name');
                const population = document.querySelector('#population');
                const diametre = document.querySelector('#diametre');
                const climat = document.querySelector('#climat');
                const gravite = document.querySelector('#gravite');
                const terrain = document.querySelector('#terrain');
    
                planeteName.textContent = dataName;
                population.textContent = dataPopulation;
                diametre.textContent = dataDiametre;
                climat.textContent = dataClimat;
                gravite.textContent = dataGravity;
                terrain.textContent = dataTerrain;
    
                document.querySelector('.details').style.visibility = "visible";
            })
        })
    }
    displayDetails();
})
