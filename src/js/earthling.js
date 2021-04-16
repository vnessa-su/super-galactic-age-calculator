export default class Earthling{
  constructor(birthday, gender){
    this.birthday = birthday;
    this.age = calculateAge(birthday);
    this.gender = gender;
    if(gender === "female"){
      this.lifeExpectancy = 74;
    } else if (gender === "male"){
      this.lifeExpectancy = 70;
    } else {
      this.lifeExpectancy = 73;
    }
  }

  howOldOnPlanet(planetObject){
    const earthYearsInPlanetYear = planetObject.earthYearsPerYear;
    const ageOnEarth = this.age;
    const ageOnPlanet = Math.floor(earthYearsInPlanetYear * ageOnEarth);
    return ageOnPlanet;
  }

  howManyYearsLeftOnPlanet(planetObject){
    const earthYearsInPlanetYear = planetObject.earthYearsPerYear;
    const yearsLeftOnEarth = this.lifeExpectancy - this.age;
    let yearsLeftOnPlanet = earthYearsInPlanetYear * yearsLeftOnEarth;
    if(yearsLeftOnPlanet < 0){
      yearsLeftOnPlanet = Math.ceil(yearsLeftOnPlanet);
    } else {
      yearsLeftOnPlanet = Math.floor(yearsLeftOnPlanet);
    }
    return yearsLeftOnPlanet;
  }

  nextBirthdayOnPlanet(planetObject){

  }
}

function calculateAge(birthday){
  const birthDate = new Date(birthday);
  const differenceFromTodayMilliseconds = Date.now() - birthDate.getTime();
  const differenceAsDate = new Date(differenceFromTodayMilliseconds);
  const age = Math.abs(differenceAsDate.getUTCFullYear() - 1970);
  return age;
}