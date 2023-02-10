setInterval(function () {
    const currentDate = new Date();
    document.querySelector("#curTime").innerText = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
  }, 1000);