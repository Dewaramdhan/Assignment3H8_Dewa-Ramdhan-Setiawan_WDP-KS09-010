const input = document.getElementById("input-id");
const btn = document.getElementById("btn-search");

btn.addEventListener("click", function() {
  const country = input.value;

  fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
    "method": "GET",
    "headers": {
      'X-RapidAPI-Key': '21d7c658b0mshc3d592d3a8c1236p1099b9jsn5cc38069fc8f',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
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
