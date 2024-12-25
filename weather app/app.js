const userLocation=document.getElementById('userLocation');
// console.log(userLocation);
const converter=document.getElementById('converter');
const weatherIcon=document.querySelector('.weatherIcon');
const temperature=document.querySelector('.temperature');
const feelsLike=document.querySelector('.feelsLike');
const description=document.querySelector('.description');
const date=document.querySelector('.date');
const city=document.querySelector('.city');
const HValue=document.querySelector('#HValue');
const WValue=document.querySelector('#WValue');
const SRValue=document.querySelector('#SRValue');
const SSValue=document.querySelector('#SSValue');
const CValue=document.querySelector('#CValue');
const UVValue=document.querySelector('#UVValue');
const PVValue=document.querySelector('#PVValue');
const Forecast=document.querySelector('.Forecast');

const WEATHER_API_ENDPOINT='https://api.openweathermap.org/data/2.5/weather?appid=cbf04d46ca6b158d1bf1840f117ec87b&q=';
// const WEATHER_DATA_ENDPOINT='https://api.openweathermap.org/data/2.5/onecall?appid=a5bb4718b30b6f58f58697997567fffa&exclude=minutely&units=metric&'; 
function findUserLocation(){
    fetch(WEATHER_API_ENDPOINT+ userLocation.value+'&Metric: Celsius').then(response=>response.json()).then(data=>{
        if(data.cod!="" && data.cod!=200){
            alert("Please enter a valid location");
            return;
        }
        console.log(data);
        city.innerHTML=data.name+', '+data.sys.country;
        temperature.innerHTML=`${Math.floor(data.main.temp-273)}°C`;
        weatherIcon.style.background=`url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;
        date.innerHTML=new Date().toDateString();

        // fetch(WEATHER_DATA_ENDPOINT+'lat='+data.coord.lat+'&lon='+data.coord.lon).then(response=>response.json()).then(data=>{
        //     console.log(data);
        // })
       
    })
}
