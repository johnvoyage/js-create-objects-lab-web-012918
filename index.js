'use strict';

function Dog(name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age;
}

// dog = new Dog("name", "breed", 15)

function Cat(name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age;
}

// cat = new Cat("name", "breed", 15)

function Ferret(name, age, foodRequirements){
  this.name = name;
  this.age = age;
  this.foodRequirements = foodRequirements;
}

// ferret = new Ferret("name", 15, ["soy"])

function Bird(name, breed){
  this.name = name;
  this.breed = breed;
}

function Fish(name, species, waterConditions){
  this.name = name;
  this.species = species;
  this.waterConditions = waterConditions;
}
