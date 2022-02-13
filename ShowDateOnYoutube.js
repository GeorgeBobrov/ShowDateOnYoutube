// Added to fix issue: Youtube hides the video publication date if it doesn't have enough space.
// This code allows you to show the video publication date (if it is hidden) 
// under the number of views. 
console.log('ShowDateOnYoutube.js');

document.addEventListener("yt-navigate-finish", function(event) {
	// console.log("yt-navigate-finish from ShowDateOnYoutube")

    if (location.pathname == "/watch") 
        setTimeout(() => {
            var info = document.querySelector("#info-text.ytd-video-primary-info-renderer")
            if (info) {
                info.style.maxHeight = "unset"
                info.style.display = "unset"
            }

            let downloadButton = document.querySelector('#top-level-buttons-computed > ytd-download-button-renderer')
            if (downloadButton) downloadButton.style.display = "none"
            
            let buttons = document.querySelectorAll("#top-level-buttons-computed > ytd-button-renderer")
            let clipButton = [...buttons].filter(el => el.querySelector("#text").textContent == 'Создать клип')[0]
            if (clipButton) clipButton.style.display = "none"

        }, 1000);
})


