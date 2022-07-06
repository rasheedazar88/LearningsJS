
//Specific elements click listeners
var element = document.getElementById("elementsID")
element.addEventListener("click", function(){
    console.log("Specific Element Clicked")
})

//math360
//get element by classname
var ele = document.getElementsByClassName("banner__heading")
for(var i=0; i<=ele.length; i++) {
    ele[i].addEventListener("click", function(){
        console.log("Click Event Triggered on Class Selector")
    })
}

//target span into the class
var ele = document.querySelectorAll(".banner__heading span")
for(var i=0; i<=ele.length; i++) {
    ele[i].addEventListener("click", function(){
        console.log("Class Event Span Triggered")
    })
}

var tagSelect = document.getElementsByTagName('h2')
for(var j=0; j<=tagSelect.length; j++){
    tagSelect[j].addEventListener("click", function(){
        console.log("tag clicked")
    })
} 

var img = document.getElementsByClassName("card__content")
for(i=0; i<=img.length; i++){
   img[i].querySelector("div").addEventListener("mousemove", function(){
    console.log("mouse move triggered")
   })
}


var content = document.querySelectorAll(".card__content .card__information")
for(i=0; i<content.length; i++){
    content[i].addEventListener("click", function(event){
        console.log("CLICKED Query Selector")
    })
}


