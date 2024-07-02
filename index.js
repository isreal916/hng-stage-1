const currentTime = document.getElementById("time");
const currentDay = document.getElementById("day");


setInterval(() =>{
  const now = new Date();
  const day = now.toLocaleDateString('en-US',{weekday:"long"});
  const time = now.getTime()
  currentDay.textContent = `${day}`
  currentTime.textContent =`${time}`;
},1000)
