function addItem(){
var val = document.getElementById("item1").value
var ul=document.getElementById("list1")
var text=document.createTextNode(val)
var li=document.createElement("li")

li.appendChild(text)
li.setAttribute("test",text)
ul.appendChild(li)




var che1=document.getElementById("ch1").checked
var che2=document.getElementById("ch2").checked

if(che1){
    
   
    li.style.color="red"
}
if(che2){
    
    li.style["text-decoration"] = "underline"
    
}
}
function remouve(){
    let valeur = document.getElementById("r1").value;
    let list = document.getElementById("list1");
    list.removeChild(list.childNodes[valeur-1]);
    
}