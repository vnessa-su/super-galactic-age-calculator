export default class Earthling{
  constructor(age){
    this.age = age;
    this.lifeExpectancy = 73;
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
    const yearsLeftOnPlanet = Math.floor(earthYearsInPlanetYear * yearsLeftOnEarth);
    return yearsLeftOnPlanet;
  }
}