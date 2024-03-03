function yardGreening(input) {

    let squares = Number(input[0]);
    let discount = squares * 7.61 * 0.18;
    let price = squares * 7.61 - discount;
    
    console.log(`The final price is: ${price} lv.`);
    console.log(`The discount is: ${discount} lv.`);

};

yardGreening(["550"]);