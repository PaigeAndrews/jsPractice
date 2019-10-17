var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var deleteLi = document.getElementsByClassName("deleteLi");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


for(var i=0; i<list.length; i++){
 list[i].addEventListener("click", liClick);
}
function liClick(){
  this.classList.toggle("done");
}



for(var i=0; i<list.length; i++){
 deleteLi[i].addEventListener("click", deleteClick);
 deleteClick()
}
function deleteClick(){
	//  list.removeChild(list[i]);
	// this.childNode.remove();
	list.innerHTML = "";
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);