
function okfunction(val){
    var userQuestion
    var response = "";
    userQuestion = document.getElementById("sure").value;
document.getElementById("question").innerHTML = userQuestion;
var randomNum = Math.floor(Math.random() * 10 + 1);
console.log(randomNum)
switch (randomNum){
    case 1:
      response = "Woah not gonna happen man";
      document.getElementById("response").innerHTML = "Woah not gonna happen man";
      break;
      case 2:
      response = "Yeah that is totally gonna happen";
      document.getElementById("response").innerHTML = "yeah that is totally gonna happen";
      break;
      case 3:
      response = "pretty likely";
      document.getElementById("response").innerHTML = "pretty likely";
      break;
      case 4:
      response = "Not likely";
      document.getElementById("response").innerHTML = "Not likely";
      break;
      case 5:
      response = "Sure it is totally gonna happen, Not";
      document.getElementById("response").innerHTML = "Sure it is totally gonna happen, Not";
      break;
      case 6:
      response = "Take the L";
      document.getElementById("response").innerHTML = "Take the L";
      break;
      case 7:
      response = "Got the W";
      document.getElementById("response").innerHTML = "Got the W";
      break;
      case 8:
      response = "Sure why not";
      document.getElementById("response").innerHTML = "Sure why not";
      break;
      case 9:
      response = "Hard No";
      document.getElementById("response").innerHTML = "Hard No";
      break;
      case 10:
      response = "pass";
      document.getElementById("response").innerHTML = "pass";
      break;
}
console.log(response)
}
