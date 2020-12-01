/*const hints={
  overlay1:['No stone-faced presidents in this one.'],
  overlay2:["How many sides does a circle have?"],
  overlay3:["Try to catch the sun and it would only pass you by."],
  overlay4:["Wash it and it isn't clean. Don't wash it and then it's clean. What I Am?"],
  overlay5:["How can you take 2 from 5 and leave 4?"],
  overlay6:["What does a baker need for his bread?"],
  overlay7:["What always runs but never walks, often murmurs, never talks, has a bed but never sleeps?"],
  overlay8:["Red foot push clear wave"],
  overlay9:["Where do all the ale from the bar go?"]
  
}
const hint=document.getElementById('hint')*/
const again=document.getElementById('again')
const againBtn=document.getElementById('again-btn')
const resultMessage=document.getElementById('result-message')
const svgContainers = document.querySelectorAll(".svg-container");


const monk = document.querySelector("#monk");
const monkArm = document.querySelector("#left-lower-arm");
const monkLeg = document.querySelector("#right-leg");

const greyHouse = document.querySelector("#house5");
const leftWindow = document.querySelector("#left-window");
const rightWindow = document.querySelector("#right-window");


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
  //hint.innerHTML=`Hint : ${hints[dogId][0]}`
  svgContainers.forEach(x=>x.addEventListener("click",clickHandler,{once:true})); 
}

function clickHandler(e){     
    let imgId = e.target.id;
    let num = imgId.match(/[1-9]/);
     
    clickCount++; 
  
    if (imgId === dogId) {
      //dog animation      
      gsap.to(`#dog${num}`, {xPercent: -250,skewX:-10, scale:1.5, duration: 3, ease: "sine"});  
      document.getElementById(imgId).classList.add('found')    
      svgContainers.forEach(x=>x.removeEventListener("click",clickHandler,{once:true})); 
      setTimeout(()=>{
        again.classList.remove('hide')       
      resultMessage.innerHTML=`Yeah! You found the dog with ${clickCount} click(s)!`  
      },2000)  
      
    } else {
      // general and specific animation
      gsap.fromTo(`#sign${num}`,{yPercent:-100},{yPercent:0,opacity:1,duration:1})
      switch (imgId) {
        case "overlay1":
          gsap.to("#watermill",{rotation:360,transformOrigin:'center',duration:2, ease:"linear",repeat:-1})
          break;
        case "overlay2":
          monk.classList.add("monk");
          monkArm.classList.add("left-lower-arm");
          monkLeg.classList.add("right-leg");
          break;
        case "overlay3":
          gsap.to("#eagle",{rotation:-50,x:-800,scale:2,duration:2,ease:"power1.in"})
          break;
        case "overlay4":          
          gsap.to("#top-fish",{rotation:360,transformOrigin:"bottom",yPercent:50,duration:1.5,ease:"power1",repeat:-1})
          
          gsap.to("#bottom-fish",{rotation:360,transformOrigin:"bottom",yPercent:100,duration:2,ease:"circ",repeat:-1})
         
          gsap.from("#splash1",{opacity:1,rotation:360,xPercent:-100,yPercent:-300,duration:2,ease:"circ",repeat:-1})
          
          gsap.from("#splash2",{opacity:1,rotation:360,xPercent:-100,yPercent:-300,duration:2,ease:"circ",repeat:-1})
          
          gsap.from("#splash3",{opacity:1,rotation:360,xPercent:-100,yPercent:-300,duration:2,ease:"circ",repeat:-1})
          break;
        case "overlay5":
          greyHouse.classList.add("house5");
          leftWindow.classList.add("left-window");
          rightWindow.classList.add("right-window");
          
          break;
        case "overlay6":
          gsap.to("#door",{xPercent:-100,duration:2,ease:"back"})
          gsap.to("#house6",{scale:2,transformOrigin:"center", duration:1,ease:"linear"})
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
      
      if(clickCount>=5){
        svgContainers.forEach(x=>x.removeEventListener("click",clickHandler,{once:true}));   
        setTimeout(()=>{
          again.classList.remove('hide')     
         resultMessage.innerHTML=`Better luck next time!`  
        },2000)
               
      } 
    }  
}

