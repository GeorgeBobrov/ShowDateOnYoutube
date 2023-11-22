// Youtube hides the publication date of the video if the description of the video is not open. 
// This code allows you to take the date of publication of the video in the tooltip and show it immediately.
console.log('ShowDateOnYoutube.js');

document.addEventListener("yt-navigate-finish", function(event) {
    // console.log("yt-navigate-finish from ShowDateOnYoutube")

    if (location.pathname == "/watch") 
        setTimeout(() => {
            var datePublishedStr = document.querySelector("meta[itemprop='datePublished']").content
// <meta itemprop="datePublished" content="2020-03-23T12:15:00-07:00"> 

            if (datePublishedStr) {
                var datePublished = new Date(datePublishedStr)

                var options = {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                };

                var date = datePublished.toLocaleDateString(undefined, options) 
                if (date.length < 20) {
                    var dateInfo = document.querySelector("#description #info > span:nth-child(3)")
                    dateInfo.textContent = ' •  ' + date + '  •  ' + dateInfo.textContent + '  •'; 
                }
            }
            // var dateInfoMeta = document.querySelector("meta[itemprop='datePublished']").content
            // var dateInfoLabel = document.querySelector("#description-inner #info > span:nth-child(3)")
            // dateInfoLabel.textContent = '• ' + dateInfoMeta + ' • ' + dateInfoLabel.textContent;


        }, 1000);
})


