export default class Earthling{
  constructor(age){
    this.age = age;
    this.lifeExpectancy = 73;
  }

  howOldOnPlanet(planetObject){
    const daysInEarthYear = 365;
    const earthDaysInPlanetYear = planetObject.earthDaysPerYear;
    const ageOnEarth = this.age;
    const ageOnPlanet = Math.floor((daysInEarthYear / earthDaysInPlanetYear) * ageOnEarth);
    return ageOnPlanet;
  }

  howManyYearsLeftOnPlanet(planetObject){
    const daysInEarthYear = 365;
    const earthDaysInPlanetYear = planetObject.earthDaysPerYear;
    const yearsLeftOnEarth = this.lifeExpectancy - this.age;
    const yearsLeftOnPlanet = Math.floor((daysInEarthYear / earthDaysInPlanetYear) * yearsLeftOnEarth);
    return yearsLeftOnPlanet;
  }
}