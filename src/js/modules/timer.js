const timer = (selectorTimer, endTime) => {
    let timer = document.querySelector(selectorTimer),
        containerDays = timer.querySelector('#days'),
        containerHours = timer.querySelector('#hours'),
        containerMinutes = timer.querySelector('#minutes'),
        containerSeconds = timer.querySelector('#seconds');

    function addZero(num) {
        if (num < 10) return `0${num}`;
        else return num;
    };

    function upDate() {
        let data;
        if (Date.parse(new Date()) > Date.parse(endTime)) {
            data = 0;
        } else {
            data = Date.parse(endTime) - Date.parse(new Date());
        }

        let days = Math.floor(data / (1000 * 60 * 60 * 24)),
            hours = addZero(Math.floor(data / (1000 * 60 * 60) % 24)),
            minutes = addZero(Math.floor(data / (1000 * 60) % 60)),
            seconds = addZero(Math.floor(data / 1000 % 60));

        containerDays.textContent = addZero(days);
        containerHours.textContent = hours;
        containerMinutes.textContent = minutes;
        containerSeconds.textContent = seconds;

        if (days === 0) {
            clearInterval(timerId);
        }
    }
    upDate();
    let timerId = setInterval(upDate, 1000);
}

export default timer;