const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park("Jurassic Park", 50, []);
    dinosaur1 = new Dinosaur("Velociraptor", "carnivore", 30);
    dinosaur2 = new Dinosaur("T-Rex", "carnivore", 50);
    dinosaur3 = new Dinosaur("Stegosaurus", "herbivore", 20);
    dinosaur4 = new Dinosaur("T-Rex", "carnivore", 40);
  })

  it('should have a name', function () {
    const actual = park.name;
    const expected = "Jurassic Park";
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    const expected = 50;
    assert.deepStrictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });
  
  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaurByName(dinosaur2);
    const actual = park.dinosaurs;
    const expected = [dinosaur1];
    assert.deepStrictEqual(actual, expected);
  });
  
  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.mostVisitedDinosaur();
    const expected = dinosaur2;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.findDinosaurBySpecies("T-Rex");
    const expected = [dinosaur2, dinosaur4];
    assert.deepStrictEqual(actual, expected);
  });
  
  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.visitorsPerDay();
    const expected = 140;
    assert.deepStrictEqual(actual, expected);
  });
  
  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.visitorsPerYear();
    const expected = 51100;
    assert.strictEqual(actual, expected);
  });
  
  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.annualRevenue();
    const expected = 2555000;
    assert.strictEqual(actual, expected);
  });

});
