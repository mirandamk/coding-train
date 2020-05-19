var weather;
function setup() {
  createCanvas(400, 200);
  loadJSON('api.openweathermap.org/data/2.5/weather?q=london&appid=7ed5f57c1fff4ab5324231636f46404f')
}

function gotData(data) {
  println(data)
}
