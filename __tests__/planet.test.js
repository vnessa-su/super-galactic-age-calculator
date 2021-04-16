import Planet from './../src/js/planet.js';

describe('Planet constructor and methods', () => {
  let planetObject;
  beforeEach(() => {
    planetObject = new Planet("Mercury", 88);
  });

  it('should create a Planet object with name, earthDaysPerYear, and earthYearsPerYear attributes', () => {
    expect(planetObject.name).toEqual("Mercury");
    expect(planetObject.earthDaysPerYear).toEqual(88);
  });

  it('should return the number of Earth years per year on the planet to two decimal points', () => {
    const earthYearsPerPlanetYear = planetObject.getEarthYearsPerYear();
    expect(earthYearsPerPlanetYear).toEqual(4.15);
  })
});