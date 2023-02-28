const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
  }

Park.prototype.addDinosaur = function (dinosaur) {
  return this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaurByName = function (dinosaur) {
  const dinosaurIndex = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(dinosaurIndex, 1);
}

Park.prototype.mostVisitedDinosaur = function () {
  let popularDinosaur;
  let mostVisitors = 0;

  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].guestsAttractedPerDay > mostVisitors ) {
      mostVisitors = this.dinosaurs[i].guestsAttractedPerDay;
      popularDinosaur = this.dinosaurs[i];
    }
  }
  return popularDinosaur;
}

Park.prototype.findDinosaurBySpecies = function (species) {
  let sameSpecies = [];
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === species) {
      sameSpecies.push(dinosaur);
    }
  }
  return sameSpecies;
}

Park.prototype.visitorsPerDay = function () {
  let visitors = 0;
  for (let i = 0; i < this.dinosaurs.length; i++) {
    visitors += this.dinosaurs[i].guestsAttractedPerDay;
  }
  return visitors;
}

Park.prototype.visitorsPerYear = function () {
  let visitors = 0;
  for (let i = 0; i < this.dinosaurs.length; i++) {
    visitors += this.dinosaurs[i].guestsAttractedPerDay;
  }
  return visitors * 365;
}

Park.prototype.annualRevenue = function () {
  let visitors = 0;
  for (let i = 0; i < this.dinosaurs.length; i++) {
    visitors += this.dinosaurs[i].guestsAttractedPerDay;
  }
  return visitors * 365 * this.ticketPrice;
} 

module.exports = Park;
