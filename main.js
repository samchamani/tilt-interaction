import './style.css'

const word = document.querySelector(".tilting-word")
window.addEventListener('deviceorientation', handleDeviceOrientation, false)

let count = 0
function handleDeviceOrientation(event) {
  count += 1;
  if (count % 5 === 0){
    word.style.filter = `drop-shadow(${-event.gamma}px ${-event.beta}px 2px salmon)`
    word.style.transform = `skewX(${event.gamma/3}deg)`
    console.log(word.style.transform)
  }
}














// function endlessLoop() {
//   setTimeout(doAnimation, 100)
// }
// let x = 0
// let y = 0

// function doAnimation(){
//   word.style.filter = `drop-shadow(${x}px ${40 + y/10}px 2px salmon)`

//   // x++
//   // y++
//   console.log(x,y, word.style.filter)
//   endlessLoop()
// }

// endlessLoop()

// filter: drop-shadow(0px 0px 2px salmon); style="filter: drop-shadow(42px 42px 2px salmon)"
// transform: rotate3d(0, 0, 0, 45deg);

{/* <button class="request-button">Request</button> */}
