import Planet from './../src/js/planet.js';

describe('Planet constructor and methods', () => {
  let planetObject;
  beforeEach(() => {
    planetObject = new Planet("Mercury", 88);
  });

  it('should create a Planet object with name and earthDaysPerYear attributes', () => {
    expect(planetObject.name).toEqual("Mercury");
    expect(planetObject.earthDaysPerYear).toEqual(88);
  });
});