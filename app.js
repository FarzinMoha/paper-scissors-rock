let select = document.querySelectorAll(".image");
let selectCpu = document.querySelectorAll(".image-cpu");
let again = document.querySelector("#again");
let win = 0,
  loos = 0,
  draw = 0

select.forEach((item) =>
  item.addEventListener("click", () => {
    const cpuSelected = cpuSelect();
    checkResult(item.getAttribute("data-name"),cpuSelected);
    showHideElements(item.getAttribute("data-name"),cpuSelected)
    setResultInHtml()
  })
);


again.addEventListener('click',againHandler)

function checkResult(item,cpuSelected) {
  
  if (item === cpuSelected) {
    draw += 1;
  }
  if (item === "paper" && item !== cpuSelected) {
    if (cpuSelected === "scissors") {
      loos += 1;
    } else {
      win += 1;
    }
  }
  if (item === "rock" && item !== cpuSelected) {
    if (cpuSelected === "paper") {
      loos += 1;
    } else {
      win += 1;
    }
  }
  if (item === "scissors" && item !== cpuSelected) {
    if (cpuSelected === "rock") {
      loos += 1;
    } else {
      win += 1;
    }
  }
}

function cpuSelect() {
  const type = ["paper", "scissors", "rock"];
  let number = Math.floor(Math.random() * 3);
  return type[number];
}

function setResultInHtml() {
  document.querySelector("#win").innerHTML = win;
  document.querySelector("#loos").innerHTML = loos;
  document.querySelector("#draw").innerHTML = draw;
}

function showHideElements(name,cpuSelected){
    select.forEach((item)=>{
        if(item.getAttribute('data-name')!==name){
            item.style.display = 'none'
        }
    })
    selectCpu.forEach((item)=>{
        if(item.getAttribute('data-name')===cpuSelected){
            item.style.display = 'block'
        }

    })
    
}


function againHandler(){
    select.forEach((item)=>{
        item.style.display = 'block'
    })
    selectCpu.forEach((item)=>{
        item.style.display = 'none'
    })
}