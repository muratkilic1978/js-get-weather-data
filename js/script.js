const btnElem = document.querySelector(".button");

const inputValue = document.querySelector(".inputValue");

const cityName = document.querySelector(".cityname");

const temp = document.querySelector(".temp");

const desc = document.querySelector(".desc");

const APIKEY = "1a87e4ad4202071f7b2007dd2d24caa9";


btnElem.addEventListener("click", function(){
    // AL kode skal skrives her
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${APIKEY}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let nameValue = data['name'];
            let descValue = data['weather'][0]['description'];
            let tempValueKelvin = data['main']['temp'];

            let tempValueCelcius = tempValueKelvin - 273.15;

            // Vis byens navn i dette HTML element
            cityName.innerText = nameValue;

            // Vis vej-data beskrivelsen (desc) i dette HTML element
            desc.innerText = descValue;

            // Vis temperaturen i celcius i dette HTML element
            temp.innerText = `Temperatur ${tempValueCelcius.toFixed(2)} C`;

            
        });

});


