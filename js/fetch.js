export async function getFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

export async function getAllPages() {
    let links = [];
    let fetch = await getFetch("https://swapi.dev/api/planets/");
    while (fetch.next != null) {
        links.push(fetch.next);
        fetch = await getFetch(fetch.next);
    }
    return links;
}
