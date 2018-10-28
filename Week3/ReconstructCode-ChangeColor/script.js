var blue = "#3BB0B5";
var pink = "#FF92B1";
var orange = "#FB9B1B";
var green = "#296326";
var purple = "#9F5AAD";
var red = "#B32000";
var magnet = "#B40486";
var lemon = "#86B404";
var yellow = "#FED01B";

var colorArray = [
blue, pink, orange, green, red, purple, magnet, lemon
];



var element = document.getElementsByClassName('block');
function changeColor(){
for (var i = 0; i < element.length; i++) {
    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    element[i].style.backgroundColor = randomColor;
}}
changeColor();

//Javascript version 

element.onclick=changeColor();

let bl = document.getElementsByClassName("grid")[0];

bl.addEventListener("mouseover", function(e){
                    e.target.style.opacity = 0.5
                    });
bl.addEventListener("mouseout", function(e){
                    e.target.style.opacity = 1
                    });




//Jquery version 

//$(".block").each(function () {
//    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
//    $(this).css("background-color", randomColor);
//
//});

//$(".block").click(function () {
//    changeColor();
//});


//$(".block").mouseover(function () {
//    $(this).animate({
//        opacity: 0.8
//    }, 200);
//});
//
//$(".block").mouseout(function () {
//    $(this).animate({
//        opacity: 1
//    }, 200);
//});
