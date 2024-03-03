function cityTaxes(name, population, treasury) {

    let cityTax = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        }
    };

    return cityTax;
}

cityTaxes('Sofia', 2000000, 1000000);
console.log("-----------------------------");
cityTaxes('Tortuga', 7000, 15000);