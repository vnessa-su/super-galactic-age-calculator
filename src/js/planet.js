export default class Planet{
  constructor(planetName, earthDaysPerYear){
    this.name = planetName;
    this.earthDaysPerYear = earthDaysPerYear;
  }

  getEarthYearsPerYear(){
    return Number((365 / this.earthDaysPerYear).toFixed(2));
  }
}