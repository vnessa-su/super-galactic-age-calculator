export default class Earthling{
  constructor(birthday, gender){
    this.birthday = new Date(birthday);
    this.gender = gender;
  }
  
  getEarthAge(){
    const birthDate = this.birthday;
    const differenceFromTodayMilliseconds = Date.now() - birthDate.getTime();
    const differenceAsDate = new Date(differenceFromTodayMilliseconds);
    const age = Math.abs(differenceAsDate.getUTCFullYear() - 1970);
    return age;
  }
  
  getLifeExpectancy(){
    const gender = this.gender;
    let lifeExpectancy;
    if(gender === "female"){
      lifeExpectancy = 74;
    } else if (gender === "male"){
      lifeExpectancy = 70;
    } else {
      lifeExpectancy = 73;
    }
    return lifeExpectancy;
  }

  howOldOnPlanet(planetObject){
    const earthYearsInPlanetYear = planetObject.earthYearsPerYear;
    const ageOnEarth = this.getEarthAge();
    const ageOnPlanet = Math.floor(earthYearsInPlanetYear * ageOnEarth);
    return ageOnPlanet;
  }

  howManyYearsLeftOnPlanet(planetObject){
    const earthYearsInPlanetYear = planetObject.earthYearsPerYear;
    const yearsLeftOnEarth = this.getLifeExpectancy() - this.getEarthAge();
    let yearsLeftOnPlanet = earthYearsInPlanetYear * yearsLeftOnEarth;
    if(yearsLeftOnPlanet < 0){
      yearsLeftOnPlanet = Math.ceil(yearsLeftOnPlanet);
    } else {
      yearsLeftOnPlanet = Math.floor(yearsLeftOnPlanet);
    }
    return yearsLeftOnPlanet;
  }

  nextBirthdayOnPlanet(planetObject){
    const msPerDay = (1000 * 3600 * 24);
    const birthday = this.birthday;
    const earthDaysPerPlanetYear = planetObject.earthDaysPerYear;
    const today = new Date(Date.now());

    const ageOnPlanet = this.howOldOnPlanet(planetObject);
    const ageOnPlanetMilliseconds = ageOnPlanet * earthDaysPerPlanetYear * msPerDay;

    const lastPlanetBirthday = new Date(birthday.getTime() + ageOnPlanetMilliseconds);
    const msSinceLastPlanetBirthday = today.getTime() - lastPlanetBirthday.getTime();
    const daysSinceLastPlanetBirthday = Math.ceil(msSinceLastPlanetBirthday / msPerDay);

    const msUntilNextPlanetBirthday = (earthDaysPerPlanetYear - daysSinceLastPlanetBirthday) * msPerDay;
    const nextPlanetBirthday = new Date(today.getTime() + msUntilNextPlanetBirthday);
    return nextPlanetBirthday;
  }
}