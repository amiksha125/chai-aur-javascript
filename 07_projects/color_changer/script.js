
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

//we can use forEach with NodeList(4)
buttons.forEach((btn) => {
//   console.log(btn);
  btn.addEventListener("click", function(e){
    console.log(e);
    console.log(e.target)// event aa kaha se raha hai its a span html element

    switch(e.target.id){
        case "grey":
          body.style.backgroundColor = e.target.id;
          break;
        case "green":
          body.style.backgroundColor = e.target.id;
          break;
        case "blue":
          body.style.backgroundColor = e.target.id;
          break;
        case "yellow":
          body.style.backgroundColor = e.target.id;
          break;
        default:
          break;
    }
    
  })
})
