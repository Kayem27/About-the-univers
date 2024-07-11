export function getPeople(){
    return fetch("https://swapi.dev/api/people/")
    .then(res => res.json())
    .then(res => {
        return res;
    })
    
}
export function getPanete(url){
    return fetch(url)
    .then(res => res.json())
    .then(res => {
        return res;
    })
    
}
export function getVehicules(){
    return fetch("https://swapi.dev/api/vehicles/")
    .then(res => res.json())
    .then(res => {
       
        return res;
    })
    
}

export function getFetch(url){
    return fetch(url)
    .then(res => res.json())
    .then(res => {
        return res;
    })
}