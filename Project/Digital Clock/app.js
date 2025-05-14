const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const session = document.getElementById('session');
const toggle = document.getElementById('toggle');

let intervalId; // To store the interval ID and prevent multiple intervals

function clock() {
    const time = new Date();
    let h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    const ampm = h >= 12 ? 'PM' : 'AM';

    h = h % 12;
    h = h ? h : 12; // If h equals 0, set it to 12
    hour.innerHTML = h;
    minute.innerHTML = m < 10 ? '0' + m : m;
    second.innerHTML = s < 10 ? '0' + s : s;
    session.innerHTML = ampm;
}

function clock2() {
    const time = new Date();
    let h = time.getHours(); // 24-hour format
    const m = time.getMinutes();
    const s = time.getSeconds();

    hour.innerHTML = h < 10 ? '0' + h : h;
    minute.innerHTML = m < 10 ? '0' + m : m;
    second.innerHTML = s < 10 ? '0' + s : s;
    session.innerHTML = ''; // No AM/PM for 24-hour format
}

function toggleClock() {
    clearInterval(intervalId); // Clear the existing interval
    if (toggle.checked) {
        intervalId = setInterval(clock2, 1000); // Use 24-hour format
    } else {
        intervalId = setInterval(clock, 1000); // Use 12-hour format
    }
}

// Initialize the clock based on toggle state
toggle.addEventListener('change', toggleClock);

// Start the clock on page load
window.onload = function () {
    toggleClock();
};
