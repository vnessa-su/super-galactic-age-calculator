import Earthling from './../src/js/earthling.js'

describe('Earthling constructor and methods', () =>{
  let earthlingObject;
  beforeEach(() => {
    earthlingObject = new Earthling(25);
  });
  
  it('should creat an Earthling object with age and default life expectancy attributes', () => {
    expect(earthlingObject.age).toEqual(25);
    expect(earthlingObject.lifeExpectancy).toEqual(73);
  });
});