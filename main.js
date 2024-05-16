import './style.css'

document.querySelector('#app').innerHTML = `

  <div class="tilt-container">
    <button class="request-button">Request</button>
    <div class="tilting-word" style="filter: drop-shadow(42px 42px 2px salmon)">
      TILT ME
    </div>
  </div>

`
// // Check if the browser supports the Permissions API
// if (navigator.permissions && navigator.permissions.query) {
//   // Request permission for device orientation
//   navigator.permissions.query({ name: 'accelerometer' }).then(permissionStatus => {
//       if (permissionStatus.state === 'granted') {
//           // Permission already granted
//           console.log('Permission for device orientation granted');
//           // Set up event listener for deviceorientation
//           window.addEventListener('deviceorientation', handleOrientation, false);
//       } else if (permissionStatus.state === 'prompt') {
//           // Permission prompt needed
//           console.log('Permission prompt needed for device orientation');
//           // Handle permission prompt if necessary
//           // For example, you might prompt the user to allow device orientation access
//       } else {
//           // Permission denied
//           console.log('Permission for device orientation denied');
//           // Handle denied permission if necessary
//       }
//   }).catch(error => {
//       // Error handling
//       console.error('Error requesting permission:', error);
//   });
// } else {
//   // Permissions API not supported
//   console.log('Permissions API not supported');
//   // Handle lack of support if necessary
// }

document.querySelector('.request-button').addEventListener("click", handleClick)

function handleClick(){
  DeviceOrientationEvent['requestPermission']()
}

if (window.DeviceOrientationEvent){
  DeviceOrientationEvent['requestPermission']()
}


window.addEventListener('deviceorientation', handleDeviceOrientation)

function handleDeviceOrientation(event) {
  console.log(event)
}


// filter: drop-shadow(0px 0px 2px salmon);
// transform: rotate3d(0, 0, 0, 45deg);