const hints={
  overlay1:['It was a hot summer day'],
  overlay2:["How many sides does a circle have?"],
  overlay3:["(3*3/3+3)/2"],
  overlay4:["Wash it and it isn't clean. Don't wash it and then it's clean. What I Am?"],
  overlay5:["How can you take 2 from 5 and leave 4?"],
  overlay6:["Guess who has a cat?"],
  overlay7:["What always runs but never walks, often murmurs, never talks, has a bed but never sleeps, has a mouth but never eats?"],
  overlay8:["The dog like animal friends"],
  overlay9:["where do all the ale from the bar go?"]
  
}
const hint=document.getElementById('hint')
const again=document.getElementById('again')
const againBtn=document.getElementById('again-btn')
const result=document.getElementById('result')
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

let clickCount;
let dogId;

againBtn.addEventListener('click',()=>{
  //reload to remove previous animation
  location.reload();
  startGame()
})

startGame();

function startGame(){   

  dogId = `overlay${Math.floor(Math.random() * 9 + 1)}`;    
  clickCount=0;
  again.classList.add('hide')
  hint.innerHTML=`Hint : ${hints[dogId][0]}`
  svgContainers.forEach(x=>x.addEventListener("click",clickHandler,{once:true})); 
}

function clickHandler(e){     
    let imgId = e.target.id;
    let num = imgId.match(/[1-9]/);
     
    clickCount++; 
  
    if (imgId === dogId) {
      //dog animation      
      document.getElementById(`dog${num}`).classList.add("dog");
      document.getElementById(imgId).classList.add('found')    
      svgContainers.forEach(x=>x.removeEventListener("click",clickHandler,{once:true})); 
      setTimeout(()=>{
        again.classList.remove('hide')       
      result.innerHTML=`Yeah! You found the dog!`  
      },2000)  
      
    } else {
      // general and specific animation
      document.getElementById(`sign${num}`).classList.remove("sign")
      
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
      
      if(clickCount>=2){
        svgContainers.forEach(x=>x.removeEventListener("click",clickHandler,{once:true}));   
        setTimeout(()=>{
          again.classList.remove('hide')     
         result.innerHTML=`Better luck next time!`  
        },2000)
               
      } 
    }  
}

