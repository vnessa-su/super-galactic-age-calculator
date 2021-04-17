import Earthling from './../src/js/earthling.js';
import Planet from './../src/js/planet.js';

describe('Earthling constructor and methods', () =>{
  let earthlingObject;
  beforeEach(() => {
    earthlingObject = new Earthling("1995-07-09", "female");
    jest.spyOn(global.Date, 'now').mockImplementationOnce(() => new Date("2021-04-16").valueOf());
  });
  
  it('should create an Earthling object with age, gender, and life expectancy attributes', () => {
    expect(earthlingObject.birthday).toEqual(new Date("1995-07-09"));
    expect(earthlingObject.gender).toEqual("female");
  });

  it('should return the age of the Earthling object', () => {
    const earthAge = earthlingObject.getEarthAge();
    expect(earthAge).toEqual(25);
  });

  it('should return the life expectancy of 74 for the Earthling object gender female', () => {
    const lifeExpectancy = earthlingObject.getLifeExpectancy();
    expect(lifeExpectancy).toEqual(74);
  });

  it('should return the life expectancy of 70 for the Earthling object gender male', () => {
    earthlingObject.gender = "male";
    const lifeExpectancy = earthlingObject.getLifeExpectancy();
    expect(lifeExpectancy).toEqual(70);
  });

  it('should return the life expectancy of 70 for the Earthling object gender other', () => {
    earthlingObject.gender = "other";
    const lifeExpectancy = earthlingObject.getLifeExpectancy();
    expect(lifeExpectancy).toEqual(73);
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
    const olderThanLifeExpectancyEarthling = new Earthling("1920-10-20", "other");
    const mars = new Planet("Mars", 687);
    const howManyYearsLeftOnMars = olderThanLifeExpectancyEarthling.howManyYearsLeftOnPlanet(mars);
    expect(howManyYearsLeftOnMars).toEqual(-14);
  });

  it('should return the next date of Earthling birthday on a planet', () => {
    const jupiter = new Planet("Jupiter", 4333);
    const nextBirthdayOnJupiter = earthlingObject.nextBirthdayOnPlanet(jupiter);
    expect(nextBirthdayOnJupiter).toEqual(new Date("2031-02-09"));
  });
});