setInterval(function () {
    const currentDate = new Date();
    document.querySelector("#curTime").innerText = currentDate.getHours() + ":" + (currentDate.getMinutes() + 0) + ":" + currentDate.getSeconds();
  }, 1000);