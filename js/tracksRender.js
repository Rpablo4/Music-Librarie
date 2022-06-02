function constroiTbTracks(array) {
    var section = document.querySelector('#renderTracks');
    var elements = document.querySelectorAll('.featuredContainer');+

    array.forEach(track => {
        var trackHtml =  `
          <div class="tracksCartao" {
            constructor() {
            }
          } >
                <div class="tracksContainer">
                    <div class="coverTracks">
                        <img id="coverTrack" class="crop" src="${track.image}" alt="${track.title}" />
                    </div>
                    <div class="trackData">  
                        <h4>${track.title}</h4>
                        <p class="trackAlbum" >${track.album}</p>
                    </div>
                </div>
            </div>
        `;
        section.innerHTML += trackHtml;
      })
    }

    constroiTbTracks(ArrayTracks);
  