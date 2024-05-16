import "./style.css";



// add click listener to tilting word
const word = document.querySelector(".tilting-word");

word.addEventListener("click", () => {
  // Permission check on click and then removal of click listener
  DeviceOrientationEvent["requestPermission"]();
  word.innerHTML = "TILT ME"
  word.removeEventListener("click")
})

// add device orientation listener to window and with handleDeviceOrietantion
// as event handler
window.addEventListener("deviceorientation", handleDeviceOrientation, false);

// use count to reduce the changes to the DOM
let count = 0;
function handleDeviceOrientation(event) {
  count += 1;
  if (count % 5 === 0) {

    // apply styles based on device orientation angles
    word.style.filter = `drop-shadow(${-event.gamma}px ${-event.beta}px 6px salmon)`;
    word.style.transform = `skewX(${event.gamma / 3}deg)`;
  }
}