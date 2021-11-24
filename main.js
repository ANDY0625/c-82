var mouseEvent="empty";
var last_xp,last_yp;
canvas=document.getElementById("myCanvas");
ppx=canvas.getContext("2d");
color="black";
width_line=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseEvent="mouseDown";

}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent="mouseup";
    
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";
    
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
current_xp=e.clientX-canvas.offsetLeft;
current_yp=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
    ppx.beginPath();
    ppx.strokeStyle=color;
    ppx.linewidth=width_line;
    ppx.moveTo(last_xp,last_yp);
    ppx.lineTo(current_xp,current_yp);
    ppx.stroke();
}
last_xp=current_xp;
last_yp=current_yp;
}