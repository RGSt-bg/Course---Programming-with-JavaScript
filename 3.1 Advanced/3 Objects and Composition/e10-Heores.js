function solve() {

    return {
        fighter: function(name) {
          const fighter = {
            name: name,
            health: 100,
            stamina: 100,
            fight: function() {
              if (this.stamina > 0) {
                this.stamina--;
                console.log(`${this.name} slashes at the foe!`);
              } else {
                console.log(`${this.name} is too tired to fight.`);
              }
            },
          };
          return fighter;
        },
        mage: function(name) {
          const mage = {
            name: name,
            health: 100,
            mana: 100,
            cast: function(spell) {
            if (this.mana > 0) {
              this.mana--;
              console.log(`${this.name} cast ${spell}`);
            } else {
              console.log(`${this.name} is out of mana.`);
            }
          },
        };
        return mage;
      },
    };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
console.log("-------------------------------------------");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);