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
                        <h3>${profile.name}</h3>
                        <p class="profileLastView" >${profile.lastView}</p>
                     </div>
                    <p> ${profile.albums}</p>
              </div>
            </div>
        `;
        section.innerHTML += profileHtml;
      })
    }

    constroiTbProfiles(ArrayProfiles);
  