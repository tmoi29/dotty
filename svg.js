//Tiffany Moi
//SoftDev2 pd7
//K7 -- Connect the Dots
//2018-03-01



var pic = document.getElementById("vimage");
var btn = document.getElementById("clear")


var change = function(e){
    e.preventDefault();
    this.setAttribute("fill", "green");
};

var clicked = function(e){
    if(e.toElement == this){
        drawDot(e);
    }
};

var first = true;
var y = 0;
var x = 0;

var drawDot = function(e){
    var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 25);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    if (first != true){
       var l = document.createElementNS(
        "http://www.w3.org/2000/svg", "line");
        l.setAttribute("x1", x);
        l.setAttribute("y1", y);
        l.setAttribute("x2", e.offsetX);
        l.setAttribute("y2", e.offsetY);
        l.setAttribute("stroke", "red");
        pic.appendChild(l); 
    }
    
    x = e.offsetX
    y = e.offsetY
    first = false;
    
 };

var clear = function(){
    while (pic.firstChild) {
        pic.removeChild(pic.firstChild);
    }
    first = true;
};


pic.addEventListener("click", drawDot);
btn.addEventListener("click", clear);
