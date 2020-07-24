/*async function getSampleText() {
  console.log( (await fetch('facts.txt')).text() );
  console.log( (await fetch('salutations.txt')).text() );
}*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


Promise.all([
  fetch('facts.txt').then(x => x.text()),
  fetch('salutations.txt').then(x => x.text())
]).then(([facttext, salutext]) => {

    window.factlist = facttext.split("\n");
    window.salulist = salutext.split("\n");

});

function setUpTheButton(){

    document.getElementById("BTN1").addEventListener("click", function(){
        //document.write("<p>"+facttext+"</p>");
        rndsalu = salulist[getRndInteger(0, window.salulist.length-1)];
        rndfact = factlist[getRndInteger(0, window.factlist.length-1)];

        rndexclaimcount = getRndInteger(1,5);
        rndexclaim = "";
        for (i = 1; i<=rndexclaimcount; i++) {
          rndexclaim = rndexclaim + "!"
        }

        document.getElementById("textbox").innerHTML = "<p>"+rndsalu+"<br><br>"+rndfact+" <br><br>Thanks for using DrowFacts"+rndexclaim+"</p>";

    
    });

 }

