function histogram(input)
{
    let n = Number(input[0]);
    let numb = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (i = 1; i <= n; i++)
        {
            numb = Number(input[i]);
            if (numb < 200) p1++;
            else if (numb >= 200 && numb < 400) p2++;
            else if (numb >= 400 && numb < 600) p3++;
            else if (numb >= 600 && numb < 800) p4++;
            else p5++;
        }
    p1 = (p1 / n * 100).toFixed(2);
    p2 = (p2 / n * 100).toFixed(2);
    p3 = (p3 / n * 100).toFixed(2);
    p4 = (p4 / n * 100).toFixed(2);
    p5 = (p5 / n * 100).toFixed(2);
    console.log(`${p1}%`);
    console.log(`${p2}%`);
    console.log(`${p3}%`);
    console.log(`${p4}%`);
    console.log(`${p5}%`);
}

histogram(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"]);