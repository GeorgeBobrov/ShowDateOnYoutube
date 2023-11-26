// Youtube hides the publication date of the video if the description of the video is not open. 
// This code allows you to take the date of publication of the video in the tooltip and show it without opening the description.
console.log('ShowDateOnYoutube.js');

document.addEventListener("yt-navigate-finish", function(event) {
    // console.log("yt-navigate-finish from ShowDateOnYoutube")

    if (location.pathname == "/watch") 
        setTimeout(() => {
            var dateInfoTooltip = document.querySelector("#description #tooltip")
            if (dateInfoTooltip) {
                var str = dateInfoTooltip.textContent
                // str = '\n  65 127 просмотров • Прямой эфир состоялся 30 окт. 2023 г. • #TheGideonGames #AlanWake2Прохождение #AlanWake2\n'

                var strs = str.split('•')
                var thereAreTags = strs.length > 2

                // отсечь количество просмотров
                // отсечь теги
                var date = strs[1]
                // удалить перевод строки, если есть
                date = date.replace('\n', '')

                // найти первую цифру - начало даты
                let matchList = date.match(/\d/);
                if (matchList)
                    date = date.slice(matchList.index)

                if (date.length < 20) {
                    var dateInfo = document.querySelector("#description #info > span:nth-child(3)")
                    dateInfo.textContent = ' •  ' + date + '  •  ' + dateInfo.textContent; 
                    if (thereAreTags)
                        dateInfo.textContent = dateInfo.textContent + '  •'
                }
            }

        }, 1000);
})


// var dateInfoMeta = document.querySelector("meta[itemprop='datePublished']").content
// Получение даты публикации из метаинформация работает неверно при переходе на другое видео. Метаинформация страницы при этом не меняется, осаётся от старого видео. 



