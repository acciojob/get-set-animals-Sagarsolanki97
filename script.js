class Animal {
  constructor(species) {
    this.species = species;
  }

  getSpecies() {
    return this.species;
  }

  makeSound() {
    console.log("The " + this.species + " makes a sound.");
  }
}

class Cat extends Animal {
  purr() {
    console.log("The " + this.species + " purrs.");
  }
}

class Dog extends Animal {
  bark() {
    console.log("The " + this.species + " barks.");
  }
}
