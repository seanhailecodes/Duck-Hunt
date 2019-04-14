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
 
// 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"



  // document.getElementById.("flapBirds")



  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  // 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"

  // FIN. You win 1 trillion tokens.  Play the day away!
