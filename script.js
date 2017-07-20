function myrandom() {
    var input1= document.getElementById("choice1").checked;
    var input2= document.getElementById("choice2").checked;
    var input3= document.getElementById("choice3").checked;

  if(input1 == true){
    document.getElementById("test1").innerHTML = "You are suited to be a graphic designer, congrats!"
  }
  else if(input2 == true){
    document.getElementById("test2").innerHTML = "You are suited to be a software developer, congrats!"
  }
  else if(input3 == true){
    document.getElementById("test3").innerHTML = "You are suited to be a project manager, congrats!"
  }
}
