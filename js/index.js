let desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i)
let orientationSupport = !!window.DeviceOrientationEvent && !desktop
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--moveX', `${(e.clientX - window.innerWidth / 2) * -0.005}deg`)
    document.documentElement.style.setProperty('--moveY', `${(e.clientY - window.innerHeight /2) * -0.01}deg`)
    /*Object.assign(document.documentElement, {
        style: `
            --moveX: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
            --moveY: ${(e.clientY - window.innerHeight /2) * -0.01}deg;
        `
    })*/
})


window.addEventListener('deviceorientation', handleDeviceOrientation);

function handleDeviceOrientation(event) {
    const moveX = (event.beta - 90) * -0.5;
    const moveY = (event.gamma - 90) * -0.5;
    if (orientationSupport) {
        document.documentElement.style.setProperty('--moveX', moveX + 'deg');
        document.documentElement.style.setProperty('--moveY', moveY + 'deg');
    }
}
