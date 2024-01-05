// alert("hey");

// var ans = prompt("how are yoy?");
// ans = alert(ans);

// console.log(hey);
// console.warn(good);
// console.error(hey)



// var a = 22;

// if(a==="22"){
//     console.log("Hey");
// }else{
//     console.log("hello");
// }

// var  math = Number(prompt("enter math no"));

// var  eng = Number(prompt("enter english no"));

// var  hin = Number(prompt("enter hindi no"));

// console.log(math);
// console.log(eng);
// console.log(hin);

// console.log("Total no.",math+eng+hin);

// var username = prompt("whats up");

// if(username ==="ram"){
//     console.log("hello")
// }else{
//     console.log("byy")
// }


// var user1 = prompt("your name");
// var user2 = prompt("your name");

// if(user1 == user2){
//     console.log("perfect");
// }

// var age = Number((prompt("ur age")));

// if(age === 10){
//     console.log("valid")

// }else{
//     console.log("bhaad mai jaa")
// }

// 

// 

// var h1 = document.querySelector("h1")

// h1.innerHTML = "<button>Byee</button>";

// h1.textContent = ("good")




var a1 = document.querySelector("#anime1")
var a2 = document.querySelector("#anime2")
var a3 = document.querySelector("#anime3")
var i = document.querySelector("#right")


a1.addEventListener("click",function(){
    i.style.backgroundImage ="url(https://static.toiimg.com/thumb/msid-56833673,imgsize-141560,width-400,resizemode-4/56833673.jpg)"
    i.style.borderRadius = "50%"
    // i.style.scale = "1.5"
})

a2.addEventListener("click",function(){
    i.style.backgroundImage ="url(https://staticg.sportskeeda.com/editor/2022/10/fd2b9-16652598039107-1920.jpg)"
    i.style.borderRadius = "0"
    i.style.backgroundSize = "cover"
})

a3.addEventListener("click",function(){
    i.style.backgroundImage ="url(https://m.media-amazon.com/images/M/MV5BMmQ3NzVmOWUtNTQ5Yi00MDczLWIxMDYtNGU5ZGU2YjI1NDY2XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg)"
    i.style.borderRadius = "50%"
})