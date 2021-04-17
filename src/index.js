import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import Earthling from './js/earthling.js';
import Planet from './js/planet.js';

function populatePlanets(){
  const planets = ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  const earthDaysPerYear = [88, 225, 687, 4333, 10759, 30687, 60190];
  let planetMap = new Map();
  planets.forEach((element, index) => {
    const planetObject = new Planet(element, earthDaysPerYear[index]);
    console.log(planetObject);
    planetMap.set(element, planetObject);
    const htmlString = `<option value="${element}">${element}</option>`;
    $("#planetSelect").append(htmlString);
  });
  console.log(planetMap.get("Venus"));
  return planetMap;
}

$(document).ready(function(){
  let earthlingObject;
  populatePlanets();
  $("#userInputForm").submit(function(event){
    event.preventDefault();
    const birthday = $("#birthdayInput").val();
    const gender = $("#genderSelect").val();
    earthlingObject = new Earthling(birthday, gender);
    $(".display-results").text(earthlingObject.birthday.toDateString() + " " + earthlingObject.gender);
  });
});