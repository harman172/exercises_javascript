// let i = 0;
// for (var j=1; j<=10; j++){
//   // console.log(j);
// }
// // console.log(j);
//
// // next ex.
// let a = "hello";
//
//
// function myFunc(){
//   var b = "hello again";
//   // console.log(a);
// }
// a="new a";
// myFunc();
// console.log(a);


// // exercise1
// var age = Number(prompt("Enter your age: "));
// if (age % Math.sqrt(age) == 0){
//   console.log("Perfect square");
// } else{
//   console.log("Not a perfect square");
// }
// //exercise2
// do{
//   var input = prompt("Enter password");
// }while(input != "hahaha");
// alert("Correct password");

//exercise3
// do{
//   var number = prompt("Make your guess between 0 and 20: ");
//   if(number < 17){
//     alert("Little less");
//   } else if(number > 17){
//     alert("Little higher");
//   } else if (number > 20){
//     alert("Number should be between 0 and 20")
//   } else{
//     alert("Perfect guess!!");
//   }
//
// }while(number != 17);

//exercise dice

// function randomNumber(){
//     var randomNumber = Math.floor(Math.random() * 6) + 1;
//     return randomNumber;
// }
//
// var player1Score;
//
// function rollDice(button_id){
//
//   let number = randomNumber();
//   if(button_id == "btnPlayer1"){
//     document.getElementById("player1").src = "images/dice" + number + ".png";
//     document.getElementById(button_id).disabled = true;
//     document.getElementById("btnPlayer2").disabled = false;
//
//   } else if(button_id == "btnPlayer2"){
//     document.getElementById("player2").src = "images/dice" + number + ".png";
//     document.getElementById(button_id).disabled = true;
//     document.getElementById("btnPlayer1").disabled = false;
//
//   }
//   if(document.getElementById("btnPlayer1").disabled){
//     player1Score = number;
//   }
//
//   if(player1Score > number){
//     incrementScore("score1",player1Score);
//   } else if(player1Score < number){
//     incrementScore("score2", number);
//   }
//   if(document.getElementById("btnPlayer2").disabled){
//     if(player1Score == number){
//       alert("Draw!!");
//     }
//   }
//
//
// }
//
// function incrementScore(id, randNumber){
//   var score = document.getElementById(id);
//   let n = Number(score.innerHTML);
//   n += randNumber;
//   score.innerHTML = n;
//   if((n >= 20) && (id == "score1")){
//     alert("Player 1 wins");
//   } else if((n >= 20) && (id == "score2")){
//     alert("Player 2 wins");
//   }
//
// }

//exercise check even Number
// let n = Number(prompt("Enter a number: "));
// if (n%2 === 0){
//   alert(n + " is an even number");
// } else{
//   alert(n + " is not an even number")
// }

//exercise factorial
// let number = Number(prompt("Enter a number to find its factorial: "));
// for (let i = number; i >= 1; i--){
//
// }
// alert(number);



//exercise case conversion



arrays
var a = ["hello", "hahaha", 21, 20.4];
console.log(a);

var b = [];
console.log(b);
b[0] = "Hello";

a[4] = "fdgdg";
console.log(a);

a[4] = "new value";
console.log(a);

a.push("pushed new element");
console.log(a);

a.pop()
console.log(a);

queue
add item to the beginning of queue.
a.unshift("unshifted element");   //push
a.shift();    //pop
console.log(a);

a.forEach(function(item){
  console.log(item);
})

//
function showAlert(item){
  alert(item);
}

a.forEach(showAlert);

//array exercise1
var userList = [];
do{
  var userInput = prompt("What you want to do: add, delete, list or quit?");
  if(userInput == "add"){
    let newItem = prompt("Enter new item:");
    userList.push(newItem);
  } else if(userInput == "delete"){
    let deleteItem = prompt("Enter index of item you want to delete: ");

  } else if(userInput == "list"){



    // let list = document.createElement('ul');

    userList.forEach(function (i){
      var item = document.createElement("li");
      // item.textContent = i;
      // let text = document.createTextNode(i);
      // item.appendChild(text);

      item.appendChild(document.createTextNode(i));
      document.getElementById("users-list").appendChild(item);

      // list.appendChild(item);
    })







  }



}while(userInput != "quit");
