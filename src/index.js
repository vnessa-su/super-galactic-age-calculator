import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import Earthling from './js/earthling.js';
// import Planet from './js/planet.js';

$(document).ready(function(){
  let earthlingObject;
  // populatePlanets();
  $("#userInputForm").submit(function(event){
    event.preventDefault();
    const birthday = $("#birthdayInput").val();
    const gender = $("#genderSelect").val();
    earthlingObject = new Earthling(birthday, gender);
    $(".display-results").text(earthlingObject.birthday + " " + earthlingObject.gender);
  });
});