export function displayPlanet(resName, spanNbrPlanete, tbody, displaySpan = false) {
    if (displaySpan) {
        spanNbrPlanete.innerText += `(${resName.count})`;
    }

    let allPlanete = resName.results;
    allPlanete.forEach(onePlanete => {
        const tr = `<tr>
                        <td dataName="${onePlanete.name}" dataPopulation="${onePlanete.population}" dataDiametre="${onePlanete.diameter}" dataGravity="${onePlanete.gravity}" dataTerrain="${onePlanete.terrain}" dataClimat="${onePlanete.climate}">${onePlanete.name}</td>
                        <td dataName="${onePlanete.name}" dataPopulation="${onePlanete.population}" dataDiametre="${onePlanete.diameter}" dataGravity="${onePlanete.gravity}" dataTerrain="${onePlanete.terrain}" dataClimat="${onePlanete.climate}">${onePlanete.terrain}</td>
                    </tr>`;
        tbody.innerHTML += tr;
    });
}

export function displayDetails() {
    const allTr = document.querySelectorAll('tr');
    allTr.forEach(tr => {
        tr.addEventListener('click', e => {
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
        });
    });
}
