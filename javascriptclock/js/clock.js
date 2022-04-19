function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const gun = ["Ptesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Ctesi", "Pazar"]
  let dayOfWeek = gun[date.getDay()-1];

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  let time = `${hours} : ${minutes} : ${seconds} ${dayOfWeek}`;

  document.getElementById("myClock").innerText = time;

  let t = setTimeout(function(){ showTime() }, 1000);
}

showTime();

let userName = prompt("Lütfen adınızı yazınız.");
let userNameUpper = userName.charAt(0).toUpperCase() + userName.slice(1);

if (userNameUpper == "Redrum") {
  document.querySelector("#myName").classList.add("blood");
}

document.querySelector("#myName").innerText = userNameUpper; 