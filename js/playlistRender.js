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
                <h3>${user.title}</h3>
                <p>${user.tracks}</p>
              </div>
            </div>
        `;
        section.innerHTML += userHtml;
      })
    }

    constroiTabela(ArrayPlaylist);
  