// let x = 0,
//   y = 0,
//   dirX = 1,
//   dirY = 1;
// const speed = 2;
// const pallete = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188"];
// let friends = document.getElementById("friends");
// let prevColorChoiceIndex = 0;
// let black = document.getElementById("black");
// const friendsWidth = friends.clientWidth;
// const friendsHeight = friends.clientHeight;

// function getNewRandomColor() {
//   const currentPallete = [...pallete]
//   currentPallete.splice(prevColorChoiceIndex,1)
//   const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
//   prevColorChoiceIndex = colorChoiceIndex<prevColorChoiceIndex?colorChoiceIndex:colorChoiceIndex+1;
//   const colorChoice = currentPallete[colorChoiceIndex];
//   return colorChoice;
// }
// function animate() {
//   const screenHeight = document.body.clientHeight;
//   const screenWidth = document.body.clientWidth;

//   if (y + friendsHeight >= screenHeight || y < 0) {
//     dirY *= -1;
//     friends.style.backgroundColor = getNewRandomColor();
//   }
//   if (x + friendsWidth >= screenWidth || x < 0) {
//     dirX *= -1;

//     friends.style.backgroundColor = getNewRandomColor();
//   }
//   x += dirX * speed;
//   y += dirY * speed;
//   friends.style.left = x + "px";
//   friends.style.top = y + "px";
//   window.requestAnimationFrame(animate);
// }

// window.requestAnimationFrame(animate);
// console.log('here')
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
console.log('here');