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

                // str.split('•')

                // отсечь количество просмотров
                var ind = str.indexOf('•')
                if (ind > -1)
                    str = str.slice(ind + 1)

                // отсечь теги
                var ind = str.indexOf('•')
                if (ind > -1)
                    str = str.slice(0, ind)    

                // найти первую цифру - начало даты
                let matchList = str.match(/\d/);
                if (matchList)
                    str = str.slice(matchList.index)

                // удалить перевод строки
                var date = str.replace('\n', '')
                if (date.length < 20) {
                    var dateInfo = document.querySelector("#description #info > span:nth-child(3)")
                    dateInfo.textContent = ' •  ' + date + '  •  ' + dateInfo.textContent + '  •'; 
                }
            }

        }, 1000);
})


// var dateInfoMeta = document.querySelector("meta[itemprop='datePublished']").content
// Получение даты публикации из метаинформация работает неверно при переходе на другое видео. Метаинформация страницы при этом не меняется, осаётся от старого видео. 



