// HTML website ke liye javascript ka kaam karne ke liye Typescript ka code likh rhy hain...

// case 1
// let a = 100;
// let b = 200;

// console.log(a + b);


// case 2
// console.log("Shoaib");


// case 3
// alert("Hello");


// case 4
// let myName = prompt("What is your name")


// case 5
// alert(`Your name is not ${myName}`);


// case 6
// alert(" Your are bandar 🐵")


// case 7
// function myfunc(){
//     console.log("My Name is Taha");
// }


// case 8
// function myfunc(){
//     alert("Shoaib");
// }


// <--------------------------------------------------END------------------------------------------------->
// case 9

// let myScreen: any = document.getElementById('screen');

// function myfunc(){
//     myScreen.value = 1234567890;
// }


// hamne html se aik id ko get kiyya jo thi screen ki id usy hamne aik veriable mein save krwa diyya
// phir us veriable ko hamne aik function mein acces kiyya or uski value set kardi
// or wo jo function hai usy hamne html ke kisi button pe onclick pe set kar diyya
// ab jab bhi onclick button pe click hoga screen ko 1234567890 ye wali value assign kardi jaegi


// <--------------------------------------------------END------------------------------------------------->
// case 10

// let myScreen: any = document.getElementById('screen');

// function myfunc(){
//     myScreen.style.background = "blue";
// }


// <--------------------------------------------------END------------------------------------------------->
// case 11

// let myScreen: any = document.getElementById('screen');

// function myfunc(){
//     myScreen.style.background = "blue";
//     myScreen.value = 1234567890;
//     myScreen.style.fontSize = "70px"
    
// }


// <--------------------------------------------------END------------------------------------------------->
// case 11

// let myScreen: any = document.getElementById('screen');

// function myfunc(){
//     myScreen.value = 1234567890;
    
//     console.log(typeof myScreen.value);
    
// }


// <--------------------------------------------------END------------------------------------------------->
// case 11

// let Screen_On: any = document.getElementById("screen"); // input tag ko screen id ke zariye acces kar ke yahn la kar aik veriable mein save krwa diyya

// Offunc();   // Off ka function yahn call isliye karwaya hai kiyun ke ham chahty hain jab bhi page refresh karen by default screen ka colour black ho jaye.

// function Onfunc(){
//     Screen_On.style.backgroundColor = "white";   // jese hi ON ka button click hoga screen on ho jaegi matlab screen pe white color apply ho jaega.
// }

// function Offunc(){
//     Screen_On.style.backgroundColor = "black";  // jese hi OFF ka button click hoga screen off ho jaegi matlab screen pe black color apply ho jaega
// }


// <--------------------------------------------------END------------------------------------------------->
// case 12


let On_Off: any = document.getElementById('screen');

function PerfomAction(action: any){
 
    switch(action){
        case "Off":
            On_Off.style.backgroundColor = "black";
            On_Off.value = "";
            break;
         
        case "On":
            On_Off.style.backgroundColor = "white";
            
            default:
                console.log("error");
    }

};


