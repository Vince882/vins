// Make Countdown using Loop
{
    const countdown = 10;
 
     for (let i = countdown; i >= 1; i--) {
     document.write( i + "<br>")
    }
    document.write("Countdown Is  Over" + "<br>")
}

{
    document.write("<br>")
    let i = 10;
     while (i >= 1) {
     document.write( i + "<br>")
     i--;
     }
     document.write("Countdown Is Over" + "<br>")
}

{
    document.write("<br>")
    let i = 10;
    do {
        document.write( i + "<br>")
        i--;
    }while (i >= 1)
    document.write("Countdown Is Over" + "<br>")
}

document.write("<br>")

// Sum of 1 to 10
{
    let a; s=0;

    for(a=1; a<=10; a++){
        s=s+a;
    }
    document.write("The Sum Of 1 to 10 is " + s + "<br>")
}

{
    let a=1; s=0;

    while(a <= 10){
        s=s+a;
        a++;
    }
    document.write("The Sum Of 1 to 10 is " + s + "<br>")
}

{
    let a=1; s=0;
    do{
        s=s+a;
        a++;
    }while(a <= 10)
    document.write("The Sum Of 1 to 10 is " + s + "<br>")
}

document.write("<br>")  

//  Multiplication using Loop

{
    const num = 3;

    for(let i = 1; i <= 10; i++){
        const res = i * num;
        document.write(num + "*" + i + "=" + num * i + "<br>");
    }
}

document.write("<br>") 

{
    const num = 4;
    let i = 1;

    while (i <= 10) {
      document.write(num + "*" + i + "=" + num * i + "<br>");
      i++;
    }
}

document.write("<br>") 

{
    const num = 5;
    let i = 1;

    do{
        document.write(num + "*" + i + "=" + num * i + "<br>");
        i++;
    }while (i <= 10)
}

document.write("<br>") 

