var currentDayEl = $('#currentDay');

function displayDay() {
    let date = dayjs().format('dddd, MMMM D');
    console.log(date);
    currentDayEl.textContent(date);
}
console.log('Hello');