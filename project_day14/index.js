const cat_btn = document.getElementById('cat_btn');
const cat_result = document.getElementById('results');


cat_btn.addEventListener('click', getCapitals);

function getCapitals() {
    fetch("https://restcountries.com/v3.1/region/europe")
    .then(resolve => resolve.json())
    .then(data => {
        data.forEach(country => {
           console.log(country.capital[0]);
           results.innerHTML += `<li>${country.capital[0]}</li>`;
           cat_btn.removeEventListener('click',getCapitals);
           cat_btn.classList.remove("cat_btn");
           cat_btn.classList.add("inactive");
        });
    })

}


