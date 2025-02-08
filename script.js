let key = "024f5ad366174a0a986445c6e9ab0e6c";
let cardData = document.querySelector(".cardData");

let searchBTN = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");

let searchType = document.getElementById("type")

const getData = async (input) => {
  let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
  let jsonData = await res.json();

  searchType.innerText='Search: '+input;
  inputData.value="";
  
  // Log the full response for debugging
  console.log(jsonData);



  // Clear previous card data
  cardData.innerHTML = '';

  // Loop through articles and create cards
  jsonData.articles.forEach(function (article) {
    console.log(article);  // Log each individual article inside the loop

    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML = `
      <img src="${article.urlToImage}" alt="">
      <h3>${article.title}</h3>
      <p>${article.description}</p>`;

      divs.addEventListener("click", function(){
        window.open(article.url);
      })
  });
};

window.addEventListener("load", function(){
  getData("karachi")
})
searchBTN.addEventListener("click", function(){
  let inputText = inputData.value;  // Corrected variable name
  getData(inputText);  // Call the function with the corrected variable
});

function navClick(navName){
  if (navName == 'politics'){
    document.getElementById("politics").style.color = "rgb(0, 140, 255)";
    document.getElementById("sports").style.color = "white";
    document.getElementById("technology").style.color = "white";
  }
  if (navName == 'sports'){
    document.getElementById("politics").style.color = "white";
    document.getElementById("sports").style.color = "rgb(0, 140, 255)";
    document.getElementById("technology").style.color = "white";
  }

  if (navName == 'technology'){
    document.getElementById("politics").style.color = "white";
    document.getElementById("sports").style.color = "white";
    document.getElementById("technology").style.color = "rgb(0, 140, 255)";
  }
  // Ensure getData is properly defined and works with the navName
  getData(navName);
}






