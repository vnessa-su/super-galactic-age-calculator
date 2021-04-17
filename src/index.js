import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import Earthling from './js/earthling.js';
import Planet from './js/planet.js';

$(document).ready(function(){
  const planetMap = populatePlanets();
  $("#userInputForm").submit(function(event){
    event.preventDefault();
    const birthday = $("#birthdayInput").val();
    const gender = $("#genderSelect").val();
    const planet = $("#planetSelect").val();
    const planetObject = planetMap.get(planet);
    console.log(planetObject);
    if(birthday){
      $("#inputBirthdayWarning").addClass("d-none");
      let earthlingObject = new Earthling(birthday, gender);
      displayBirthdayOnPlanet(earthlingObject, planetObject);
    } else {
      $("#inputBirthdayWarning").removeClass("d-none");
    }

  });
});

function populatePlanets(){
  const planets = ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  const earthDaysPerYear = [88, 225, 687, 4333, 10759, 30687, 60190];
  let planetMap = new Map();
  planets.forEach((element, index) => {
    const planetObject = new Planet(element, earthDaysPerYear[index]);
    const htmlString = `<option value="${element}">${element}</option>`;
    planetMap.set(element, planetObject);
    $("#planetSelect").append(htmlString);
  });
  return planetMap;
}

function displayBirthdayOnPlanet(earthlingObject, planetObject){
  const planetName = planetObject.name;
  const ageOnPlanet = earthlingObject.howOldOnPlanet(planetObject);
  const nextBirthdayOnPlanet = earthlingObject.nextBirthdayOnPlanet(planetObject);
  const displayString = 
  `<p>You are ${ageOnPlanet} years old on ${planetName}!<br>
  Your next birthday will on ${nextBirthdayOnPlanet.toDateString()}</p>`;
  $(".display-results").html(displayString);
}