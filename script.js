function init(){
    let image = document.createElement("img");
    image.setAttribute("src","flower2.png");
    document.getElementById("new_element").appendChild(image);
    let spans = document.getElementById("rainbow").getElementsByTagName("span")
    let colors= ["red", "orange","yellow","green","blue","purple","pink"];
     
     for (var i = spans.length -1 ; i >= 0; i--) {
       
	   spans[i].style.color = colors[i];
}
var changeSrc = function(event) {
    let filename = event.target.src.replace(/^.*[\\\/]/, '');
    if (event.target.src) {
      event.target.src = "flower2.png";
      let filename = event.target.src.replace(/^.*[\\\/]/, '');
    }
    
    if(filename==event.target.src.replace(/^.*[\\\/]/, '')){
        event.target.src="flower1.png"
    }
  };
  
  document.getElementById("event").addEventListener("mouseover", changeSrc);
  

}
