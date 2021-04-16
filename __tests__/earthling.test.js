import Earthling from './../src/js/earthling.js';
import Planet from './../src/js/planet.js';

describe('Earthling constructor and methods', () =>{
  let earthlingObject;
  beforeEach(() => {
    earthlingObject = new Earthling(25);
  });
  
  it('should create an Earthling object with age and default life expectancy attributes', () => {
    expect(earthlingObject.age).toEqual(25);
    expect(earthlingObject.lifeExpectancy).toEqual(73);
  });

  it('should return how many years old an Earthling is on a given planet', () => {
    const mercury = new Planet("Mercury", 88);
    const howOldOnMercury = earthlingObject.howOldOnPlanet(mercury);
    expect(howOldOnMercury).toEqual(103);
  });

  it('should return how many years of life an Earthling has left on a planet based on life expectancy', () => {
    const venus = new Planet("Venus", 225);
    const howManyYearsLeftOnVenus = earthlingObject.howManyYearsLeftOnPlanet(venus);
    expect(howManyYearsLeftOnVenus).toEqual(77);
  });
});