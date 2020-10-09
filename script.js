const svgContainers = document.querySelectorAll(".svg-container");
const door = document.querySelector("#door");
console.log(door);
const watermill = document.querySelector("#watermill");
const monk = document.querySelector("#monk");
const monkArm = document.querySelector("#left-lower-arm");
const monkLeg = document.querySelector("#right-leg");
const eagle = document.querySelector("#eagle");
const greyHouse = document.querySelector("#house5");
const leftWindow = document.querySelector("#left-window");
const rightWindow = document.querySelector("#right-window");
const brownHouse = document.querySelector("#house6");
const topFish = document.querySelector("#top-fish");
//const topSplashes = document.querySelector("#top-splashes");
const bottomFish = document.querySelector("#bottom-fish");
const bottomSplashes = document.querySelector("#bottom-splashes");
const trees = document.querySelectorAll(".tree");
const duckOne = document.getElementById("duck-one");
const duckTwo = document.getElementById("duck-two");
const duckThree = document.getElementById("duck-three");
const upperFeet = document.querySelectorAll(".upper-foot");
const lowerFeet = document.querySelectorAll(".lower-foot");
const head = document.getElementById("girl-head");
const girlArm = document.getElementById("left-arm");
const pavilion = document.getElementById("pavilion");
let dogId = `overlay${Math.floor(Math.random() * 9 + 1)}`;
console.log(dogId);
for (let i = 0; i < svgContainers.length; i++) {
  svgContainers[i].addEventListener("click", (e) => {
    let imgId = e.target.id;
    let num = imgId.match(/[1-9]/);
    console.log(num);
    if (imgId === dogId) {
      //dog animation
      document.getElementById(`dog${num}`).classList.add("dog");
     
      document.getElementById(imgId).classList.add('found')
    } else {
      // general and specific animation
      setTimeout(
        () => document.getElementById(`sign${num}`).classList.remove("sign"),
        1200
      );
      switch (imgId) {
        case "overlay1":
          watermill.classList.add("watermill");

          break;
        case "overlay2":
          monk.classList.add("monk");
          monkArm.classList.add("left-lower-arm");
          monkLeg.classList.add("right-leg");
          break;
        case "overlay3":
          eagle.classList.add("eagle");
          break;
        case "overlay4":
          topFish.classList.add("fish");
          bottomFish.classList.add("fish");
          //topSplashes.classList.add("splashes");
          bottomSplashes.classList.add("splashes");
          break;
        case "overlay5":
          greyHouse.classList.add("house5");
          leftWindow.classList.add("left-window");
          rightWindow.classList.add("right-window");
          break;
        case "overlay6":
          door.classList.add("door");
          brownHouse.classList.add("house6");
          break;
        case "overlay7":
          [...trees].forEach((tree) => tree.classList.add("tree-move"));
          break;
        case "overlay8":
          duckOne.classList.add("ducks");
          duckTwo.classList.add("ducks");
          duckThree.classList.add("duck");
          upperFeet.forEach((foot) => foot.classList.add("upper-feet"));
          lowerFeet.forEach((foot) => foot.classList.add("lower-feet"));
          break;
        case "overlay9":
          girlArm.classList.add("left-arm");
          head.classList.add("head");
          pavilion.classList.add("pavilion");
          break;
      }
    }
  });
}
