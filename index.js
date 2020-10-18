function getHttp() {
  const Http = new XMLHttpRequest();
  //ssconst url='http://localhost:7071/api/HttpExample';
  //const url='https://weatherdataanalyzer.azurewebsites.net/api/HttpExample?name=barney'
  const url='https://api.weather.gov/points/47.6513,-122.1946'
  Http.open("GET", url);

  Http.setRequestHeader("Access-Control-Allow-Origin", "*");
  Http.send();
  

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }
}

const userAction = async () => {
  const response = await fetch('https://weatherdataanalyzer.azurewebsites.net/api/HttpExample?name=fred');
  //alert(response.json());
  response.json().then(function(data) {
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data));
  });
  //console.log(data);
}

