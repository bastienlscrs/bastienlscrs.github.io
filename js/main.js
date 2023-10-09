const url = 'https://restcountries.com/v3.1/all';

let main = document.getElementById("main");
JSON.stringify(url)
localStorage.setItem('links', JSON.stringify(url));

let stockedURL = JSON.parse(localStorage.getItem('links'));

/**
 * Fonction qui stocke la list des pays dans le localStorage et Affiche
 */
async function AllCountry(){
    let data = await fetch(stockedURL)
    let country = await data.json();
    country.sort((a,b) => {
        var nameA = a.translations.fra.common.toLowerCase();
        var nameB = b.translations.fra.common.toLowerCase();

        return (nameA < nameB) ? -1: (nameA > nameB) ? 1 : 0;
    })
    localStorage.setItem('pays', JSON.stringify(country));
    let stockedCountry = JSON.parse(localStorage.getItem('pays'));

    for (let c of stockedCountry) {
        main.innerHTML += `<p> ${c.name.common}</p> <img src="${c.flags.svg}" style="width: 200px;">`;
    }
}
AllCountry();