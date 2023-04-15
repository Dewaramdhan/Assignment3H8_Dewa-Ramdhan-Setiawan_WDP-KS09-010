const input = document.getElementById("input-id");
const btn = document.getElementById("btn-search");

btn.addEventListener("click", function() {
  const country = input.value;

  fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
    "method": "GET",
    "headers": {
      'X-RapidAPI-Key': ,
    'X-RapidAPI-Host': 
    }
  })
  .then(response => response.json())
  .then(data => {
    const statistics = data.response[0];

    // Update data
    document.getElementById("Active-Cases").textContent = statistics.cases.active;
    document.getElementById("New-Cases").textContent = statistics.cases.new;
    document.getElementById("Recovered-Cases").textContent = statistics.cases.recovered;
    document.getElementById("Total-Cases").textContent = statistics.cases.total;
    document.getElementById("Total-Deaths").textContent = statistics.deaths.total;
    document.getElementById("Total-Tests").textContent = statistics.tests.total;
  })
  .catch(err => {
    console.error(err);
    alert("An error occurred while retrieving the data.");
  });
});
