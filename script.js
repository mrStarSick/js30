setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    currentDate.setTime(currentDate.getTime() + (1000 * 3600 * 24));
    document.getElementById("spanDate").innerHTML = months[currentDate.getMonth()] + " " + (currentDate.getDate() - 1) + ", " + days[(currentDate.getDay() - 1)] + ", " + currentDate.getFullYear();

    const switchMode = document.getElementById('switchMode');
    switchMode.onclick = function() {
        const theme = document.getElementById('theme');
        if (theme.getAttribute('href') == 'lightMode.css') {
            theme.href = 'darkMode.css';
        } else {
            theme.href = 'lightMode.css';
        }
    }

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()