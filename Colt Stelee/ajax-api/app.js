// const { resolve } = require("path");

// async function getData() {
//   try {
//     const res = await fetch("https://swapi.info/api/people/1");
//     const data = await res.json();
//     console.log("Data:", data);

//     const list = document.querySelector("#data");

//     // Buat item dan tampilkan datanya
//     const li = document.createElement("li");
//     li.textContent = `Nama: ${data.name}, Tinggi: ${data.height}, Mass: ${data.mass}`;
//     list.appendChild(li);
//   } catch (err) {
//     console.log("An error occurred!", err);
//   }
// }
// getData();

// fetch sederhana
// fetch("https://swapi.info/api/people/1")
//   .then((res)=>{
//     console.log("Fulfilled", res);
//     return res.json(); // mengubah response menjadi json
//   })
//   .then((data) => {
//     console.log("Data:", data);

//     const list = document.querySelector("#data");

//     // Buat item dan tampilkan datanya
//     const li = document.createElement("li");
//     li.textContent = `Nama: ${data.name}, Tinggi: ${data.height}, Mass: ${data.mass}`;
//     list.appendChild(li);
//   })
//   .catch((err)=>{
//     console.log("An error occurred!", err);
//   })

// Menggunakan axios  
const peoples = async (id) => {
  const list = document.querySelector("#data");
  try {
    const res = await axios.get(`https://swapi.info/api/people/${id}`);
    console.log("Fulfilled", res);
    const data = res.data;
    console.log("Data:", data);

    // Buat item dan tampilkan datanya
    const li = document.createElement("li");
    li.textContent = `Nama: ${data.name}, Tinggi: ${data.height}, Mass: ${data.mass}`;
    list.appendChild(li);
  } catch (err) {
    console.log("An error occurred!", err);
  }
};
for (let i=1; i<=5; i++){
  peoples(i);
}


// dad jokes menggunakan axios
const getJokes = async () => {
  const jokesSection = document.querySelector("#newJoke");
  try{
    const res = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = res.data;
    console.log("Jokes:", data);

    // menampilakan jokes
    const li = document.createElement("li");
    li.textContent = data.joke;
    jokesSection.appendChild(li);

  }
  catch (err) {
    console.log("An error occurred!", err);
  }
}
const button = document.querySelector("#jokeBtn");
button.addEventListener("click", getJokes);


// tv shows search menggunakan axios
const addShows = (shows) => {
  const list = document.querySelector("#movieList");
  list.innerHTML = ""; // clear previous results

  shows.forEach((show) => {
    if (!show.show.image) {
      return; // skip if no image
    }
    const li = document.createElement("li");
    // li.textContent = `${show.show.name}, ${show.show.premiered}`;
    const img = document.createElement("img");
    img.src = show.show.image.medium;
    li.appendChild(img);
    list.appendChild(li);  
  });
}
const getShows = async () => {
  const searchInput = document.querySelector("#searchInput");
  const searchValue = searchInput.value;

  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`);
  const data = res.data;
  console.log("Shows:", data);

  // menampilkan hasil pencarian
  addShows(data);
}
const searchButton = document.querySelector("#searchBtn");
searchButton.addEventListener("click", getShows);


