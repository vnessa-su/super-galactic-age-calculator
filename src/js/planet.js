export default class Planet{
  constructor(planetName, earthDaysPerYear){
    this.name = planetName;
    this.earthDaysPerYear = earthDaysPerYear;
    this.earthYearsPerYear = Number((365 / earthDaysPerYear).toFixed(2));
  }

  getEarthYearsPerYear(){
    
  }
}