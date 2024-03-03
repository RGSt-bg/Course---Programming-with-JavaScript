function numberPyramid(input){
    let n =input[0]
    let current=1
    let isBigger=false
    let currentline =""
    for(let rows =1;rows<=n;rows++){
        for(let cols =1;cols<=rows;cols++){
            if(current>n){
                isBigger=true
                break
            }
            currentline+=current+' '
            current++
        }
        console.log(currentline)
        currentline=''
        if(isBigger){
            break
        }
    }
}
numberPyramid(["28"])