window.onload = function() {
  const body = document.body;

  function createDuck(){

  let ducky = document.createElement('div')
  ducky.setAttribute('class','duck')
  body.appendChild(ducky)
  randomPosition(ducky)


  ducky.addEventListener("click", () =>{
    ducky.classList.add('shot')
    setTimeout( () => {
      body.removeChild(ducky)
     }, 2000)
  })

  const toggleFlap = function() {
    ducky.classList.toggle("flap")
  }

setInterval( () => {
 toggleFlap()
}, 250)

function randomPosition(ducky) {
  ducky.style.left = (Math.random() * window.innerWidth) + "px"
  ducky.style.top = (Math.random() * window.innerHeight) + "px"
}

function moveDuck(ducky){
  ducky.style.left = (Math.random() * window.innerWidth) + "px"
  ducky.style.top = (Math.random() * window.innerHeight) + "px"
 }

setInterval( () => {moveDuck(ducky)}, 1000 )}

for (let i = 0; i < 5; i ++){
  createDuck()
}

const checkForWinner = () => { let ducks = body.querySelectorAll('.duck')
  if (ducks.length === 0) {alert('You Win!')} } 

setInterval( () => {checkForWinner()}, 1000)}
 

  

