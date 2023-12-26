document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--moveX', `${(e.clientX - window.innerWidth / 2) * -0.005}deg`)
    document.documentElement.style.setProperty('--moveY', `${(e.clientY - window.innerHeight /2) * -0.01}deg`)
})


window.addEventListener('deviceorientation', handleDeviceOrientation);

function handleDeviceOrientation(event) {
    let moveX = (event.beta - 90) * -0.5;
    let moveY = (event.gamma - 90) * -0.5;

    moveX = Math.max(Math.min(moveX, 3.5), -3.5);
    moveY = Math.max(Math.min(moveY, 3.5), -3.5);

        document.documentElement.style.setProperty('--moveX', moveX + 'deg');
        document.documentElement.style.setProperty('--moveY', moveY + 'deg');
}
