const monthYear = document.getElementById('monthYear');
const datesContainer = document.getElementById('dates');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const todayDate = document.getElementById('todayDate');

let currentDate = new Date();
// console.log(currentDate);
const today = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    // console.log(year);
    const month = currentDate.getMonth();
    // console.log(month);

    // Set the month and year in the header
    monthYear.textContent = currentDate.toLocaleString('default', { month: 'long' }) + ' ' + year;

    // Clear the dates container
    datesContainer.innerHTML = '';

    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();
    // console.log(firstDay);
    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // console.log(daysInMonth);

    // Fill in the empty slots before the first day
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        datesContainer.appendChild(emptyDiv);
    }

    // Fill in the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date');
        dateDiv.textContent = day;
        if (day ===today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dateDiv.classList.add('currentDate'); // Add a class to highlight today
            
        }
        
        datesContainer.appendChild(dateDiv);
    }
    //    console.log(currentDate);
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});
todayDate.addEventListener('click', () => {
    currentDate = new Date();
    renderCalendar();
});

// Initial render
renderCalendar();