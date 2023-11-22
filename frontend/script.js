let model3={
    Hp:"100",
    year:"2021",
    price:40000
}
let submitButton=document.querySelector("#buttonClicked")
let userInput=document.querySelector("#userInput")
let price=document.querySelector("#price")
submitButton.addEventListener("click",buttonListener)

function getData(model){
    if(model=="3"){
        return model3
    }
    else{
        alert("This model does not exist")
    }
}

function buttonListener(event){
    event.preventDefault()
    carModel=userInput.value
    console.log(carModel)
    data=getData(carModel)
    price.value=data.price

}