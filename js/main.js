const url = 'https://restcountries.com/v3.1/all';

let main = document.getElementById("main");
JSON.stringify(url)
localStorage.setItem('links', JSON.stringify(url));

const stockedURL = JSON.parse(localStorage.getItem('links'));
 
async function AllCountry(){
    let data = await fetch(stockedURL);
    let country = await data.json();
    localStorage.setItem('pays', JSON.stringify(country));
    const stockedCountry = JSON.parse(localStorage.getItem('pays'));

    for (const c of stockedCountry) {

        main.innerHTML += `<p> ${c.name.common}</p> <img src="${c.flags.svg}" style="width: 200px;">`;
    }
}

AllCountry();