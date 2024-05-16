import "./style.css";

// Permission check
if (DeviceOrientationEvent.requestPermission) {
  (async () => {
    const granted = await DeviceOrientationEvent.requestPermission();
    if (granted === "granted") {

      // add listener
      const word = document.querySelector(".tilting-word");
      window.addEventListener("deviceorientation",handleDeviceOrientation,false);

      let count = 0;
      function handleDeviceOrientation(event) {
        count += 1;
        // use count to reduce the changes to the DOM
        if (count % 5 === 0) {

          // apply styles based on device orientation angles
          word.style.filter = `drop-shadow(${-event.gamma}px ${-event.beta}px 2px salmon)`;
          word.style.transform = `skewX(${event.gamma / 3}deg)`;
        }
      }
    }
  })();
}