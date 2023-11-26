let x = 0,
  y = 0,
  dirX = 1,
  dirY = 1;
const speed = 2;
let friends = document.getElementById("friends");
const friendsWidth = friends.clientWidth;
const friendsHeight = friends.clientHeight;

function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (y + friendsHeight >= screenHeight || y < 0) {
    dirY *= -1;
  }
  if (x + friendsWidth >= screenWidth || x < 0) {
    dirX *= -1;
  }
  x += dirX * speed;
  y += dirY * speed;
  friends.style.left = x + "px";
  friends.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);