import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
// import Earthling from './js/earthling.js';
// import Planet from './js/planet.js';

$(document).ready(function(){
  // populatePlanets();
  $("#userInputForm").submit(function(event){
    event.preventDefault();
    const birthday = $("#birthdayInput").val();
    const gender = $("#genderSelect").val();
    $(".display-results").text(birthday + " " + gender);
  });
});