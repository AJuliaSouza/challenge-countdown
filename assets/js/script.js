const countdown = () => {
  const countDate = new Date('Apr 25, 2022 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour );
  const textMinute = Math.floor((gap % hour) / minute );
  const textSecond = Math.floor((gap % minute) / second );

  document.querySelector('#days').textContent = `${fixZero(textDay)}`;
  document.querySelector('#hour').textContent = `${fixZero(textHour)}`;
  document.querySelector('#minute').textContent = `${fixZero(textMinute)}`;
  document.querySelector('#second').textContent = `${fixZero(textSecond)}`;
};

function fixZero(time){
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
countdown();