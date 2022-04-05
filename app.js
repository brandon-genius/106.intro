

function loadData(){
    let total = 9;
    console.log("Getting data");
    total += 10;
}

function sayHello(name){
    console.log("Hello " + name);
}

function sayHello10Times(){
    for(let i=0; i<10; i++){
        console.log("Hellox10");
    }
}

function printSomeNumbers(){
    for(let i=0; i<21; i++){
        if(i != 7 && i != 13){
            console.log(i);
        }
    }
}

function sumAll(list){
    let total = 0;
    for(let i=0; i<list.length; i++){
        let num = list[i];
        total += num;
    }
    console.log("Total", total);
}

function findOldest(list) {
    let solution = list[0];

    for(let i=0; i<list.length; i++){
        let num = list[i];
        if(num > solution){
            solution = num;
        }
    }
    console.log("Oldest", solution);
}

function countLowerThan(pivot, list){
    let count = 0;
    for(let i=0; i<list.length; i++){
        let num = list[i];
        if(num< pivot){
            count+= 1;
        }
    }
    console.log("There are ", count, "nums lower than ", pivot)
}

function init() {
   console.log("Page Loaded");


    loadData();
    sayHello("Brandon");
    sayHello("Mary");

    sayHello10Times();
    printSomeNumbers(); //print numbers 0 to 20

    let ages = [12,43,12,87,34,67,40,24,89,38,623,20,5,24,13,84,22,55];
    sumAll(ages);

    findOldest(ages); //print the largest number

    countLowerThan(25, ages); //print # less than 25
}




window.onload = init;