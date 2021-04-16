import Earthling from './../src/js/earthling.js';
import Planet from './../src/js/planet.js';

describe('Earthling constructor and methods', () =>{
  let earthlingObject;
  beforeEach(() => {
    earthlingObject = new Earthling("1995-07-09", "female");
  });
  
  it('should create an Earthling object with age, gender, and life expectancy attributes', () => {
    expect(earthlingObject.birthday).toEqual("1995-07-09");
    expect(earthlingObject.gender).toEqual("female");
    expect(earthlingObject.age).toEqual(25);
    expect(earthlingObject.lifeExpectancy).toEqual(74);
  });

  it('should return how many years old an Earthling is on a given planet', () => {
    const mercury = new Planet("Mercury", 88);
    const howOldOnMercury = earthlingObject.howOldOnPlanet(mercury);
    expect(howOldOnMercury).toEqual(103);
  });

  it('should return how many years of life an Earthling has left on a planet based on life expectancy', () => {
    const venus = new Planet("Venus", 225);
    const howManyYearsLeftOnVenus = earthlingObject.howManyYearsLeftOnPlanet(venus);
    expect(howManyYearsLeftOnVenus).toEqual(79);
  });

  it('should return a negative number of the number of years past life expectancy on a planet if Earthling is aged above life expectancy', () => {
    earthlingObject.age = 100;
    const mars = new Planet("Mars", 687);
    const howManyYearsLeftOnMars = earthlingObject.howManyYearsLeftOnPlanet(mars);
    expect(howManyYearsLeftOnMars).toEqual(-13);
  });
});