
      let day = document.getElementById("day");
      let hour = document.getElementById("hour");
      let minute = document.getElementById("minute");
      let second = document.getElementById("second");

      function count() {
        let myTime = new Date().getTime();
        let eventDate = new Date(2021, 11, 31).getTime();
        let countDate = eventDate - myTime;
        let seconds = Math.floor(countDate / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        day.innerHTML = days;
        hour.innerHTML = hours;
        minute.innerHTML = minutes;
        second.innerHTML = seconds;
      }
      setInterval(count, 1000);
