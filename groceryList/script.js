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

// function deleteClick(){
//     this.parentNode.removeChild(list[i]);
// }

for(var i=0; i<list.length; i++){
	list[i].addEventListener("click", liClick);
}


function liClick(){
  this.classList.toggle("done");
}


// function deleteClick(){
// 	//   list.parentNode.removeChild(list);
// 	this.classList.parentNode.removeChild(list);
// }


// for(var i=0; i<list.length; i++){
// 	deleteLi[i].addEventListener("click", deleteClick);
// }

Array.prototype.slice.call(deleteLi).forEach(function(deleteClick) {
  // iterate and add the event handler to it
  deleteClick.addEventListener("click", function(e) {
    e.target.parentNode.remove()
  });

})
// add event listener to first 6 btns in HTML file
// for(var i = 0; i < deleteLi.length; i++){
// 	deleteLi[i].addEventListener("click", removeChild, false);
// }


// from StackOverflow:
// function removeChild(evt) {
//   evt.target.removeEventListener("click", removeChild, false);
//   evt.target.childNode.remove();
// }
//  $(document).ready(function(){
// $("deleteLi").click(function(){
// $(this).hide("list");
// });
// });

    

// deleteLi.addEventListener("click", deleteClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

deleteClick()