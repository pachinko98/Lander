//Dom Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
names = document.getElementById('name'),
focus = document.getElementById('focus');

//show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

//set AM or PM

const amPm = hour >= 12 ? 'PM' : 'AM';

//12 hour format

hour =  hour % 12 || 12;

// output time

time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

setTimeout(showTime, 1000);

}

//add zero

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set background and greeting

function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

if(hour < 12) {
    //morning
    greeting.textContent = 'Good Morning, ';
    document.body.style.background = "linear-gradient(0deg, rgba(255,248,0,1) 0%, rgba(255,102,0,1) 37%, rgba(255,0,0,1) 100%)";
}else if(hour < 17) {
    //afternoon
    greeting.textContent = 'Good Afternoon, ';
    document.body.style.background = "linear-gradient(0deg, rgba(255,228,188,1) 0%, rgba(255,255,162,1) 30%, rgba(87,189,255,1) 100%)";
}else{
    //evening
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
    document.body.style.background = "linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(9,9,121,1) 18%, rgba(2,0,36,1) 65%)";    
}
}

//get name

function getName() {
    if(localStorage.getItem('names') === null) {
        names.textContent = 'your name here';
    }else {
        names.textContent = localStorage.getItem('names');
    }
}

//set name

function setName (e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keycode == 13){
        localStorage.setItem('names', e.target.innerText);
        names.blur();}
    }else {
        localStorage.setItem('names', e.target.innerText);

    }
}

function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = 'your goal for today here';
    }else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//set focus

function setFocus (e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keycode == 13){
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();}
    }else {
        localStorage.setItem('focus', e.target.innerText);

    }
}

names.addEventListener('keypress', setName);
names.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//run
setBgGreet();
showTime();
getName();
getFocus();