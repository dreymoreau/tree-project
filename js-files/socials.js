setInterval(function () {
    const currentDate = new Date();
    document.querySelector("#curTime").innerText = currentDate.getHours() + ":" + 
    (currentDate.getMinutes().toString().padStart(2, "0")) + ":" + (currentDate.getSeconds().toString().padStart(2, "0"));
  }, 1000);