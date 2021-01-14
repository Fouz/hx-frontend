(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let dueDate = "Nov 25, 2021 00:00:00",
      countDown = new Date(dueDate).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown");

          headline.innerText = "Done!";
          countdown.style.display = "none";
          clearInterval(x);
        }
        //seconds
      }, 0)
    let startDate = "Nov 25, 2021 00:00:00",
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        startsOn = new Date(startDate);
    document.getElementById("starts-on").innerHTML = months[startsOn.getMonth()] + " " + startsOn.getDate();
    // document.getElementById("starts-on").innerHTML = startsOn;


  }());