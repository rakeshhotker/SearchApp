const options = {
  method: "GET",
  headers: {
    "X-User-Agent": "desktop",
    "X-Proxy-Location": "EU",
    "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    "X-RapidAPI-Key": "aad2d9b59amshe5946a45fa51b64p17106ejsnb0342c90c40e",
  },
};
async function getTextQuery() {
  var query = document.getElementById("search").value;
  let container = document.querySelector("#container");
  if (query == "") {
    container.textContent = "Query Can't be empty";
    return;
  }
  query = query.split(" ");
  query = query.join("+");
  container.innerHTML = `<div class="spinner-grow" role="status"><span class="visually-hidden">Loading...</span><div>`;
  try {
    let res = await fetch(
      `https://google-search3.p.rapidapi.com/api/v1/search/q=${query}`,
      options
    );
    let html = "";
    res = await res.json();
    res = res.results;
    res.forEach((element) => {
      let htmlSegment = `<div class=".queryResults">
          <h4 class="paraText">${element.title}</h4>
          <a class="paraText" href="${element.link}">${element.link}</a>
          <p class="paraText">${element.description}</p>
      </div>`;
      html += htmlSegment;
    });
    container.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
async function getVideoQuery() {
  var query = document.getElementById("search").value;
  let container = document.querySelector("#container");
  if (query == "") {
    container.textContent = "Query Can't be empty";
    return;
  }
  query = query.split(" ");
  query = query.join("+");
  container.textContent = "Loading...";
  try {
    let res = await fetch(
      `https://google-search3.p.rapidapi.com/api/v1/video/q=${query}`,
      options
    );
    let html = "";
    container.innerHTML = html;
    res = await res.json();
    res = res.results;
    res.forEach((element) => {
      let htmlSegment = `<div class=".queryResults">
          <h4 class="paraText">${element.title}</h4>
          <a class="paraText" href="${element.link}">${element.link}</a>
          <p class="paraText">${element.description}</p>
      </div>`;
      html += htmlSegment;
    });
    container.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
