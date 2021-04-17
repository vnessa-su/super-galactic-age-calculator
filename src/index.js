import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import Earthling from './js/earthling.js';
import Planet from './js/planet.js';

$(document).ready(function(){
  const planetMap = populatePlanets();
  $("#userInputForm").on("submit", function(event){
    event.preventDefault();
    const birthday = $("#birthdayInput").val();
    const gender = $("#genderSelect").val();
    const planet = $("#planetSelect").val();
    const planetObject = planetMap.get(planet);
    console.log(planetObject);
    if(birthday && planet){
      $("#inputBirthdayWarning").addClass("d-none");
      $("#inputPlanetWarning").addClass("d-none");
      let earthlingObject = new Earthling(birthday, gender);
      displayBirthdayOnPlanet(earthlingObject, planetObject);
      if(gender){ 
        displayLifeExpectancyOnPlanet(earthlingObject, planetObject); 
      }
      $("#userInputForm").addClass("d-none");
      $("#displayContainer").removeClass("d-none");
    } else {
      $("#inputBirthdayWarning").removeClass("d-none");
      $("#inputPlanetWarning").removeClass("d-none");
    }
  });

  $("#resetFormButton").on("click", function(){
    $("#birthdayInput").val("").toChange();
    $("#genderSelect").prop('selectedIndex', 0);
    $("#planetSelect").prop('selectedIndex', 0);
  });

  $("#goBackButton").on("click", function(){
    $("#displayContainer").addClass("d-none");
    $("#userInputForm").removeClass("d-none");
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
  let displayString;
  if(ageOnPlanet === 0){
    displayString = `<p>You are less than a year old on ${planetName}!<br>`;
  } else {
    displayString = `<p>You are ${ageOnPlanet} years old on ${planetName}!<br>`;
  }
  displayString += `Next Birthday: ${nextBirthdayOnPlanet.toDateString()}</p>`;
  $(".display-results").html(displayString);
}

function displayLifeExpectancyOnPlanet(earthlingObject, planetObject){
  const planetName = planetObject.name;
  const lifeExpectancyOnEarth = earthlingObject.getLifeExpectancy();
  const yearsLeftOnPlanet = earthlingObject.howManyYearsLeftOnPlanet(planetObject);
  let displayString = `<p>Based on your life expectancy of ${lifeExpectancyOnEarth} years on Earth, `;
  if(yearsLeftOnPlanet < 0){
    displayString += `you've outlived your life expectancy on ${planetName} by ${yearsLeftOnPlanet * -1} years!</p>`;
  } else if(yearsLeftOnPlanet === 0){
    displayString += `you have less than a year left of your life on planet ${planetName}...</p>`;
  } else if(yearsLeftOnPlanet === 1){
    displayString += `you have around 1 year left of your life on planet ${planetName}...</p>`;
  } else {
    displayString += `you have around ${yearsLeftOnPlanet} years left of your life on planet ${planetName}...</p>`;
  }
  $(".display-results").append(displayString);
}