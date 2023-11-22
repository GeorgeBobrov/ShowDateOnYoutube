// Youtube hides the publication date of the video if the description of the video is not open. 
// This code allows you to take the publication date in HTML metainformation and show it.
console.log('ShowDateOnYoutube.js');

document.addEventListener("yt-navigate-finish", function(event) {
    // console.log("yt-navigate-finish from ShowDateOnYoutube")

    if (location.pathname == "/watch") 
        setTimeout(() => {
// <meta itemprop="datePublished" content="2020-03-23T12:15:00-07:00"> 
            var datePublishedStr = document.querySelector("meta[itemprop='datePublished']")?.content

            if (datePublishedStr) {
                var datePublished = new Date(datePublishedStr)

                var options = {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                };

                var date = datePublished.toLocaleDateString(undefined, options) 
                var dateInfo = document.querySelector("#description #info > span:nth-child(3)")
                if (dateInfo) 
                    dateInfo.textContent = ' •  ' + date + '  •  ' + dateInfo.textContent + '  •'; 
            }

        }, 1000);
})


