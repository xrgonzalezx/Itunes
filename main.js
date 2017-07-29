let siteControl = document.querySelector(".wholepage")
let searchButton = document.querySelector(".searchButton");
let musicPlayer = document.querySelector(".musicPlayer")
let albumButton = document.querySelectorAll(".albumBtn")
var audioSource = document.querySelector(".audioSource");
let input = document.querySelector(".inputforsong");
let searchResults = document.querySelector(".results");
//EventL starts , whole function
siteControl.addEventListener("click", function(e) {
  let inputValue = input.value;
  console.log("e is: ", e)
  if (e.target === searchButton) {
    searchResults.innerHTML = "";
    fetch(`https://itunes.apple.com/search?term=${inputValue}`).then(

        function(response) {

          if (response.status !== 200) {
            console.log(response.status);
            return;
          }

          response.json().then(function(obj) {

            let results = obj.results;



            console.log(results.forEach(function(track) {
              console.log("results is: ", track);

              let albumCover = track.artworkUrl100
              let artist = track.artistName
              let songTitle = track.trackName
              var sample = track.previewUrl
              console.log(artist)


              let renderTracks =
              `<div class="wrapper">
                  <h3>${artist}</h3>
                  <div class="sampleSrc" src="${sample}"></div>
                  <a href="#" src="${sample}"><button class="albumBtn" name="button" ><img class="image" value="${sample}" src="${albumCover}" alt="album_cover"> </button></a>
                  <div id="title">${songTitle}</div>
                </div>`

              searchResults.innerHTML += renderTracks;
            }));
          });
        })
      .catch(function(err) {
        console.log("fetch error :-S", err);
      });
  }
//music sample to top audio sr= inputforsong
  if(e.target && e.target.matches("img.image")){
      console.log("Button pressed", e.target);
      audioSource.src = e.target.getAttribute('value');
      musicPlayer.load();
      musicPlayer.play();
  }
})
