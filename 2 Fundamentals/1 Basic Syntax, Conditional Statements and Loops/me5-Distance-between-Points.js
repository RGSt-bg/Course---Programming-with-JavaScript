function distanceBetweenPoints(x1, y1, x2, y2)
{
    let a = 0;
    let b = 0;
    let c = 0;
    
    if (x1 > x2) a = x1 - x2;
    else a = x2 - x1;
    if (y1 > y2) b = y1 - y2;
    else b = y2 - y1;
    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    console.log(c);
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);