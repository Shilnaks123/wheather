import React from 'react'
import  './style.css'
const Wheather = () => {

    
   let api_key = "8ac5c4d57ba6a4b3dfcf622700447b1e";

   const search= async ()=>{
     const element = document.getElementsByClassName("cityInput")
     if(element[0].value===""){
        return 0;
     }
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=metric`

    let response = await fetch(url);
    let data = await response.json();
    const humidity =document.getElementsByClassName("humidity-percentage");
    const wind =document.getElementsByClassName("wind-rate");
    const temprature =document.getElementsByClassName("wheather-temp");
    const location =document.getElementsByClassName("wheather-location");

    humidity[0].innerHTML = data.main.humidity +"%";
    wind[0].innerHTML = data.wind.speed+"km/h";
    temprature[0].innerHTML = data.main.temp+"°C";
    location[0].innerHTML = data.name

   }
  return (
    <div className='container'>
        <div className="topbar">
           <input type="text" className="cityInput" placeholder='search' /> 
           <i class="fa-solid fa-magnifying-glass search-icon" onClick={()=>{search()}} ></i>
        </div>
       <div className="wheather-image">
        <img className='clouds' src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="" />
       </div>
       <div className="wheather-temp">24°C</div>
       <div className="wheather-location">Kakkanad</div>
       <div className="data-container">
        <div className="element">
        <i class="fa-solid fa-temperature-half icon"></i>
           
            <div className="data">
                <div className="humidity-percentage">64%</div>
                <div className="text">Humidity</div>
            </div>
        </div>
        <div className="element">
        <i className="fa-solid fa-wind icon"></i>
            
            <div className="data">
                <div className="wind-rate">18 km/h</div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Wheather