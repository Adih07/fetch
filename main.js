let tb = document.querySelector(".container");

const API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";
console.log(API);
fetch(API)
  .then((res) => res.json())
  .then((da) =>
    da.Search.forEach((item) => {
      tb.innerHTML += `
      <div class="css">
      <img src="${item.Poster}"/>
      <h4>
      <a href='${item.Poster}' class="a">
      ${item.Title}<a/></h4>
       
      <p>Year: ${item.Year}</p>
      </div>
      `;
    })
  );
