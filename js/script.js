const form = document.querySelector('.search-block')
const modal = document.querySelector('.modal')


form.addEventListener('submit', function(event){
	event.preventDefault()

	const input = document.querySelector('.input-city')
	getData(input.value.trim())
})


async function getData(city){
 	const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=269b4f702dc62e7c854d6ded554a6812`);
 	const response = await data.json()
 	console.log(response)

 	if(data.status !== 200){
 		modal.classList.remove('hidden')
 		
 		modal.addEventListener('click', function(event){
 			if(event.target.tagName === 'button'.toUpperCase()){
 				modal.classList.add('hidden')
 			}
 		})
 	} else {
 		createWeather(response)

 		//card.classList.remove('hidden')

 	}
}

function createWeather(data){
	const card = document.querySelector('.card-weather')
 		
 	const city = document.querySelector('.city-card')
 	city.innerText = data.name
 	
 	const humidity = document.querySelector('.humVal')
 	humidity.innerText = `${data.main.humidity}%`
 	
 	const wind = document.querySelector('.windVal')
 	wind.innerText = `${Math.round(data.wind.speed)} m/s`

 	const img = document.querySelector('.card-weather__img')
 	img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

 	const temp = document.querySelector('.temp')
 	temp.innerHTML = `${Math.round(data.main.temp - 273)}<sup>℃</sup>`



 	card.classList.remove('hidden')
}

