// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /*getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
// ...

function step1(callback){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[0]}</li>`;
  callback();
}
function step2(callback){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[1]}</li>`;
  callback();
}
function step3(callback){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[2]}</li>`;
  callback();
}
function step4(callback){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[3]}</li>`;
  callback()
}
function step5(){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[4]}</li>`;
  document.querySelector("#mashedPotatoes").innerHTML += `<li>mashed Potatoes Are Ready</li>`;

}

step1(function(){
  step2(()=>{
    step3(()=>{
      step4(step5)
    })
  })
})
// Iteration 2 - using promises
// ...







obtainInstruction("steak", 0)
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 1)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 2)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 3)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 4)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 5)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 6)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 7)})
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 8)})
  .catch((e) => {
    console.log(e);
  });

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...