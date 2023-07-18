  document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let city = document.getElementById('cityInput').value;
    let hilow=document.getElementById("hi-low");
    let now=new Date();
    let date=document.querySelector("#date");
    const api={
    key:"2fa73590fd8b5a4c6e68098ad5625395",
    base:"https://api.openweathermap.org/data/2.5/"
};
function dateBuilder(d){
    let months=[ "January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}


  var text = document.getElementById("text");
  text.style.display = "none";
  var text2 = document.getElementById("text2");
  text2.style.display = "none";
  var text1= document.getElementById("text1");
  text1.style.display = "none";
  var text3= document.getElementById("text3");
  text3.style.display = "none";


    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(data => {
        // Update the weather information
        document.getElementById('cityName').textContent = `${data.name},${data.sys.country}`;
        date.innerText=dateBuilder(now);
        document.getElementById('temperature').textContent = ` ${data.main.temp}°C`;
        document.getElementById('description').textContent =  data.weather[0].description;
        hilow.innerText=`${data.main.temp_min}C/${data.main.temp_max}C`;

        if( document.getElementById('description').textContent=="cloudy"){
          document.body.style.backgroundImage="url(https://tse1.mm.bing.net/th?id=OIP.WaOXXfL4XMVdn43HZKDGBQHaE8&pid=Api&P=0&h=180)";
        }
        if( document.getElementById('description').textContent=="mist"){
          document.body.style.backgroundImage="url(https://wallup.net/wp-content/uploads/2016/01/254540-nature-landscape-mountain-mist-sky-clouds-river-Croatia.jpg)";
        }
        if( document.getElementById('description').textContent=="sunny"){
          document.body.style.backgroundImage="url(https://cdn.wallpapersafari.com/79/38/WVpY3U.jpg)";
        }
        if( document.getElementById('description').textContent=="fog"){
          document.body.style.backgroundImage="url(https://media.autoexpress.co.uk/image/private/s--SQcpAsoP--/v1562245801/autoexpress/2018/01/fog.jpg)";
        }
        if( document.getElementById('description').textContent=="thunderstrom"){
          document.body.style.backgroundImage="url(https://img.fotocommunity.com/severe-thunderstorm-2efc9ebf-7af3-4766-83e6-b99e1a9304b1.jpg?height=1080)";
        }
        if( document.getElementById('description').textContent=="rainy"){
          document.body.style.backgroundImage="url(https://i0.wp.com/northcountryfarms.com/wp-content/uploads/2015/01/rainy-day.jpg?ssl=1)";
        }
        if( document.getElementById('description').textContent=="overcast clouds"){
          document.body.style.backgroundImage="url(https://www.pixel4k.com/wp-content/uploads/2018/11/sky-clouds-overcast-4k_1541115955.jpg)";
        }
        if( document.getElementById('description').textContent=="dusty"){
          document.body.style.backgroundImage="url(https://newsexpressngr.com/images/news/dusty.jpg)";
        }
        if( document.getElementById('description').textContent=="humid"){
          document.body.style.backgroundImage="url(https://photo-cdn.urdupoint.com/media/2021/06/_3/420x350/pic_1623842426.jpg)";
        }
        if( document.getElementById('description').textContent=="windy"){
          document.body.style.backgroundImage="url(https://i.ytimg.com/vi/snO4xD8c2hA/maxresdefault.jpg)";
        }
        if( document.getElementById('description').textContent=="broken clouds"){
          document.body.style.backgroundImage="url(https://tse4.explicit.bing.net/th?id=OIP.3maUh_blr36hbODGmQUvhAHaFj&pid=Api&P=0&h=180)";
        }
        if( document.getElementById('description').textContent=="heavy intensity rain"){
          document.body.style.backgroundImage="url(https://www.dinalipi.com/wp-content/uploads/2023/07/Rain-3-1-1.jpg)";
        }
        if( document.getElementById('description').textContent=="scattered clouds"){
          document.body.style.backgroundImage="url(https://orig00.deviantart.net/d731/f/2009/194/9/3/scattered_clouds_above_lake2_by_geographu.jpg)";
        }
        if( document.getElementById('description').textContent=="moderate rain"){
          document.body.style.backgroundImage="url(https://www.skymetweather.com/content/wp-content/uploads/2023/07/North-India-Rains-Fe-1.jpg)";
        }
      })
      .catch(error => {
        console.log(error);
        alert('Error fetching weather data');
      });
  });