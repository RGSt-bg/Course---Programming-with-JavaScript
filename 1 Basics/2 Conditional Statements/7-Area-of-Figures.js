function areaOfFigures(input) {

    let figure = input[0];

    if (figure == "square")
    { let side = input[1];
      let S = side * side;
        console.log(S.toFixed(3));
    }

    else if (figure == "rectangle")
    { let side1 = input[1];
      let side2 = input[2];
      let S = side1 * side2;
        console.log(S.toFixed(3));
    }

    else if (figure == "circle")
    { let radius = input[1];
      let S = Math.PI * radius * radius;
        console.log(S.toFixed(3));
    }
    
    else if (figure == "triangle")
    { let side = input[1];
      let height = input[2];
      let S = side * height / 2;
        console.log(S.toFixed(3));
    }

    else console.log("There is no such figure!");

}

areaOfFigures(["triangles","4.5","20"]);