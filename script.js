let day = document.querySelector('.day'); //без точки не работает
let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let half = document.querySelector('.half');

function showDate(){

let date = new Date();

let dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
day.textContent = dayOfWeek[date.getDay()];

let h = (date.getHours() % 12).toString(); //перевод в строку, чтобы добавить '0'
if(h.length < 2) {
    h = '0' + h;
}

hour.textContent = h;

let m = date.getMinutes().toString();
if(m.length < 2) {
    m = '0' + m;
}
min.textContent = m;

if(date.getHours() < 12){
    half.textContent = 'AM';
} else {
    half.textContent = 'PM';
}
}

setInterval(showDate, 200);
// showDate();
