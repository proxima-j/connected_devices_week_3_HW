const socket = new WebSocket("ws://localhost:1880/week3_HW");

socket.addEventListener("message", handleMessage);

function handleMessage(event) {
    const data = event.data.split(","); 
    const switchState = parseInt(data[1]); 
    const potValue = parseInt(data[0]); 

    // Check the switch state
    if (switchState === 0) {
        document.body.style.backgroundColor = "black"; 
    } else {
       
        const colorIntensity = Math.round(potValue / 1023 * 255); 
        document.body.style.backgroundColor = `rgb(${colorIntensity}, ${colorIntensity}, ${colorIntensity})`;
    }
}
