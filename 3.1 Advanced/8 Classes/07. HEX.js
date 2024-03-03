class Hex {
    constructor(value) {
        if (typeof value === 'number') this.value = value;
        else this.value = this.parse(value);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${(this.value.toString(16).toUpperCase())}`;
    }

    plus(number) {
        if (number !== "number") number = number.valueOf();
        let newValue = this.value + number;
        return new Hex(newValue);
    }

    minus(number) {
        if (number !== "number") number = number.valueOf();
        let newValue = this.value - number;
        return new Hex(newValue);
    }

    parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());                 // 0XFF
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());          // 0XF
console.log(a.plus(b).toString()==='0xF');  // true
console.log(FF.parse('AAA'));               // 2730

/* toString() { // Това е първоначалната версия на функцията ми.

    let hexSigns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexNumb = "0x";
    let hexArr = [];
    let wholeNumb = 1;
    let remainder = 0;

    while (wholeNumb > 0) {
        wholeNumb = Math.floor(this.value / 16);
        remainder = this.value % 16;
        this.value = wholeNumb;
        hexArr.unshift(hexSigns[remainder]);
    }
    
    hexNumb += hexArr.join("");
} */
