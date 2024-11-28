const btn = document.getElementById("btn")
btn.addEventListener('click',()=>{


  const input = document.getElementById('input')
 const temp = document.getElementById('temp');
 const main = document.getElementById('main');
 const description = document.getElementById('description');
 const city = document.getElementById('city');
 const country = document.getElementById('country')
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=53bed549a7ec6ccf76e144b3d8ba0fe0&units=metric`

 /*axios.get(url)
 .then ((res)=>{
    temp.innerHTML= res.data.main.temp + "ºC"
    main.innerHTML=res.data.weather[0].main
    description.innerHTML=res.data.weather[0].description
    city.innerHTML=res.data.name
    country.innerHTML=res.data.sys.country

 })
 .catch((err)=>console.log(err)) 
})*/
 fetch(url)
 .then((response)=>response.json())
 .then ((data)=>{
    temp.innerHTML= data.main.temp + "ºC"
    main.innerHTML=data.weather[0].main
    description.innerHTML=data.weather[0].description
    city.innerHTML=data.name
    country.innerHTML=data.sys.country

 })
 .catch((err)=>console.log(err))    
})
 