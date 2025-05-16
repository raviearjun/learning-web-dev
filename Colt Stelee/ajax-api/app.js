async function getData() {
  try {
    const res = await fetch("https://swapi.info/api/people/1");
    const data = await res.json();
    console.log("Data:", data);

    const list = document.querySelector("#data");

    // Buat item dan tampilkan datanya
    const li = document.createElement("li");
    li.textContent = `Nama: ${data.name}, Tinggi: ${data.height}, Mass: ${data.mass}`;
    list.appendChild(li);
  } catch (err) {
    console.log("An error occurred!", err);
  }
}

getData();
