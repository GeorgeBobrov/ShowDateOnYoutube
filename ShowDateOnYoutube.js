// Youtube hides the publication date of the video if the description of the video is not open. 
// This code allows you to take the date of publication of the video in the tooltip and show it immediately.
console.log('ShowDateOnYoutube.js');

document.addEventListener("yt-navigate-finish", function(event) {
    // console.log("yt-navigate-finish from ShowDateOnYoutube")

    if (location.pathname == "/watch") 
        setTimeout(() => {
            var dateInfoTooltip = document.querySelector("#description > tp-yt-paper-tooltip #tooltip")
            if (dateInfoTooltip) {
                var str = dateInfoTooltip.textContent
                // str = '1 739 948 просмотров • Прямой эфир состоялся 24 нояб. 2022 г.'
                var ind = str.indexOf('•')
                if (ind > -1)
                    str = str.slice(ind + 1)
//
                let matchList = str.match(/\d/);
                if (matchList)
                    str = str.slice(matchList.index)

                var date = str.replace('\n', '')
                if (date.length < 20) {
                    var dateInfo = document.querySelector("#description-inner #info > span:nth-child(3)")
                    dateInfo.textContent = ' •  ' + date + '  •  ' + dateInfo.textContent; 
                }
            }
            // var dateInfoMeta = document.querySelector("meta[itemprop='datePublished']").content
            // var dateInfoLabel = document.querySelector("#description-inner #info > span:nth-child(3)")
            // dateInfoLabel.textContent = '• ' + dateInfoMeta + ' • ' + dateInfoLabel.textContent;


        }, 1000);
})


