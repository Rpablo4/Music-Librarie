function constroiTabela(array) {
    var section = document.querySelector('#renderFeaturedPlaylists');
    var elements = document.querySelectorAll('.featuredContainer');+

    array.forEach(user => {
        var userHtml =  `
          <div class="playlistCartao" {
            constructor() {
            }
          } >
            <div class="playlistContainer">
                <div class="coverPlaylist">
                    <img id="coverPlaylists" src="${user.image}" alt="${user.title}" />
                </div>
              <div>
                <h2>${user.title}</h2>
                <p class="smallText" >${user.tracks}</p>
              </div>
            </div>
        `;
        section.innerHTML += userHtml;
      })
    }

    constroiTabela(ArrayPlaylist);
  