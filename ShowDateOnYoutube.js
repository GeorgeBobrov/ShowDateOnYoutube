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


            // Hide Download button
            let downloadButton = document.querySelector('#top-level-buttons-computed > ytd-download-button-renderer')
            if (downloadButton) {
                console.log("Hide Download button", downloadButton.querySelector("#text").textContent)

                downloadButton.style.display = "none"
            }
 
            // Hide MakeClip button
            let buttons = document.querySelectorAll("#top-level-buttons-computed > ytd-button-renderer")
            let clipButton = [...buttons].filter(el => el.querySelector("#text").textContent == 'Создать клип')[0]
            if (clipButton) {
                console.log("Hide MakeClip button", clipButton.querySelector("#text").textContent)
                clipButton.style.display = "none"
            }

            // Show Save button if hidden
            let saveButton = [...buttons].filter(el => el.querySelector("#text").textContent == 'Сохранить')[0]
            if (saveButton) {
                console.log("Show Save button if hidden, was", saveButton.style.display, "visible")
                saveButton.style.display = ""
            }

            // Remove all buttons from PopupMemu (those left over from previous video)
            let buttonsInPopup = document.querySelectorAll('ytd-menu-popup-renderer > ytd-download-button-renderer, ytd-menu-popup-renderer > ytd-button-renderer');
            for (var buttonInPopup of buttonsInPopup) 
                buttonInPopup.remove()

            // Move Save and MakeClip buttons to PopupMemu when PopupMemu opens (initially it may not exist)
            document.querySelector('yt-icon-button.dropdown-trigger').addEventListener("click", onOpenPopupMemu, { once: true })
            
            function onOpenPopupMemu(event) {
                console.log("dropdown-trigger")

                let popupMenu = document.querySelector("ytd-menu-popup-renderer")

                if (downloadButton) {
                    downloadButton.style.display = ""
                    popupMenu.append(downloadButton)
                }

                if (clipButton) {
                    clipButton.style.display = ""
                    popupMenu.append(clipButton)
                }

            }
        }, 1000);
})


