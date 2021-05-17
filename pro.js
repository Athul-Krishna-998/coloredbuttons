alert("press the coloured BUTTONS!!");
var x = document.getElementById("myAudio"); 
var y = document.getElementById("myAudio1");
var z = document.getElementById("myAudio2");
function green()
{
 document.body.style.background="#34eb52"
 x.play();
}
function red()
{
    document.body.style.background="red"
    y.play();
}
function blue()
{
    document.body.style.background="blue" 
    z.play();
}