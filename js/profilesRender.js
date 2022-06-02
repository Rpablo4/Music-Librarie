function constroiTbProfiles(array) {
    var section = document.querySelector('#renderProfileViews');
    var elements = document.querySelectorAll('.featuredContainer');+

    array.forEach(profile => {
        var profileHtml =  `
          <div class="profileViewsCartao" {
            constructor() {
            }
          } >
            <div class="profileViewContainer">
                <div class="coverProfiles">
                    <img id="coverProfile" class="crop" src="${profile.image}" alt="${profile.name}" />
                </div>
                <div class="profileData">
                    <div>
                        <h4>${profile.name}</h4>
                        <p class="smallText" >${profile.lastView}</p>
                     </div>
                    <p class="smallText"> ${profile.albums}</p>
              </div>
            </div>
        `;
        section.innerHTML += profileHtml;
      })
    }

    constroiTbProfiles(ArrayProfiles);
  