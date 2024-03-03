function speedInfo(input) {

    let speed = Number(input[0]);

    // switch (speed) {
    //     case (speed <= 10):
    //         console.log("slow");
    //     break;
    //     case (speed > 10 && speed <= 50):
    //         console.log("average");
    //     break;
    //     case (speed > 50 && speed <= 150):
    //         console.log("fast");
    //     break;
    //     case (speed > 150 && speed <= 1000):
    //         console.log("ultra fast");
    //     break;
    //     case (speed > 1000):
    //         console.log("extremely fast");
    //     break;
    // }

    if (speed <= 10) {console.log("slow");}
        
    else if (speed > 10 && speed <= 50) {console.log("average");}
        
    else if (speed > 50 && speed <= 150) {console.log("fast");}
        
    else if (speed > 150 && speed <= 1000) {console.log("ultra fast");}
        
    else {console.log("extremely fast");}
        

}

speedInfo(["1201"]);