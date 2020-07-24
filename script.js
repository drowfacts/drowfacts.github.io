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

factlist = facttext.split("\n");
salulist = salutext.split("\n");

//document.write("<p>"+facttext+"</p>");
rndsalu = salulist[getRndInteger(0, salulist.length-1)];
rndfact = factlist[getRndInteger(0, factlist.length-1)];

/*for (fact of factlist) {
  document.write("<p>"+fact+"</p>");
}*/

rndexclaimcount = getRndInteger(1,5);
rndexclaim = "";
for (i = 1; i<=rndexclaimcount; i++) {
  rndexclaim = rndexclaim + "!"
}

document.write("<p>"+rndsalu+"\n"+rndfact+" Thanks for using DrowFacts"+rndexclaim+"</p>");
});



//getSampleText()

/*document.write(doGET("facts.txt"));*/