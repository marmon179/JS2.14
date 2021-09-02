fetch("http://api.openweathermap.org/data/2.5/weather/?q=Minsk&appid=17c6340597b3443add3d7236b62a95be")
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        document.querySelector(".package-name").textContent = data.name
        document.querySelector(".price").innerHTML = Math.round(data.main.temp - 273) + "&deg;"
        document.querySelector(".disclaimer").textContent = data.weather[0]["description"];
        document.querySelector(".features li").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    })
    .catch(() => console.log("error"))
