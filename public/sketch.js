let socket;
function setup() {
  createCanvas(600, 400);
  background(51);
  socket = io('http://localhost:3000');

  //message received from server
  socket.on('mouse', newDrowing);
}

function newDrowing(data) {
  noStroke();
  fill(255, 0, 100);
  ellipse(data.x, data.y, 36, 36);
}

function mouseDragged() {
  const data = {
    x: mouseX,
    y: mouseY,
  };

  //message sent to server
  socket.emit('mouse', data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 36, 36);
}
