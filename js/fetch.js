export function getFetch(url){
    return fetch(url)
    .then(res => res.json())
    .then(res => {
        return res;
    })
}