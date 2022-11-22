let myName = document.getElementById("myName");
myName.innerHTML = prompt("Adınızı giriniz: ");

let myClock = document.getElementById("myClock");

setInterval(function () {
    let date = new Date();
    myClock.innerHTML = date.toLocaleTimeString() + " " + date.toLocaleString('tr-TR', {weekday: 'long'});
});