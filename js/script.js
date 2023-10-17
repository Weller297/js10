let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourBox = document.querySelector('.hours'),
    minuteBox = document.querySelector('.minutes');
    stopWatchBtn = document.querySelector('.stopwatch__btn')
    
  
// new Date() - это глобальный встроенный объект (class) - который дает информацию о дате и времени
    
function clock() {
    let time = new Date()
    let seconds = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30
    
    secondArrow.style = `transform: rotate(${seconds}deg)`
    minuteArrow.style = `transform: rotate(${minutes}deg)`
    hourArrow.style = `transform: rotate(${hours}deg)`
    
    hourBox.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minuteBox.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    setTimeout(() => {
        clock()
    }, 1000);
}

clock()



// Рекурсия это когда функция вызывает саму себя
// setTimeout() - выполяет какие либо действие с указанной задержкой


let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

links.forEach((el,i) => {
    el.addEventListener('click', () => {
        removeActive()
        el.classList.add('active')
        tabs[i].classList.add('active')
    })
})


function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}






let stopWatchSeconds = document.querySelector('.stopwatch__seconds'),
stopWatchMinutes = document.querySelector('.stopwatch__minutes'),
stopWatchhours = document.querySelector('.stopwatch__hours')


stopWatchBtn.addEventListener('click', () => {
    if (stopWatchBtn.innerHTML == 'start') {
        stopWatchBtn.innerHTML = 'Stop'
        function seconds() {
            if (stopWatchSeconds.innerHTML == '60') {
                stopWatchMinutes.innerHTML++
                stopWatchSeconds.innerHTML = '0'
            }else if (stopWatchMinutes.innerHTML == '60') {
                stopWatchhours.innerHTML++
                stopWatchMinutes.innerHTML = '0'
                stopWatchSeconds.innerHTML = '0'
            }else if (stopWatchBtn.innerHTML == 'Clear') {
                return
            }
            stopWatchSeconds.innerHTML++
            setTimeout(seconds, 1000);
        }
        setTimeout(seconds, 1000);
    }else if (stopWatchBtn.innerHTML == 'Stop') {
        stopWatchBtn.innerHTML = 'Clear'
        
    }else {
        stopWatchBtn.innerHTML = 'start'
        stopWatchSeconds.innerHTML = '0'
        stopWatchMinutes.innerHTML = '0'
        stopWatchhours.innerHTML = '0'
    }
})


