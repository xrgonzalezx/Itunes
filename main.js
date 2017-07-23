let searchbar = document.querySelector("#musicsearch");
let button = document.querySelector(".button");
let music = document.querySelector(".music");

button.addEventListener("click", function searchbar() {
  music.innerHTML = "";
  fetch("https://itunes.apple.com/search?term=" + musicsearch.value)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(obj) {

        obj.results.forEach(function(results) {

          let imagesource = results.artworkUrl100
          let title = results.trackName
          let artist = results.artistName
          let musicdemo = results.previewUrl

          results = `
          <div class="wrapper">
           <h3>${title} </h3>
           <h2>${artist}</h2>
           <br>
           <a href="${results.artistName}">
           <a href="${results.previewUrl}">
           <img src="${imagesource}" onError="this.src=''"></a>
          </div>`;



          music.innerHTML += results;

        });
      })

    })
    .catch(function(error) {
      console.log('Fetch Error :-S', err);
    });
})
