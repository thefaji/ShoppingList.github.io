/*Initializes cache selectors*/
var button = document.getElementById("enter");
var input = document.getElementById("item");
var ul = document.querySelector("ul");
var dButtons = document.querySelectorAll(".delbtn");

/*function that creates a list element from the input*/
function createListElement(){
		
		//creates and declares an li element
		//with the value the user input
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		
		//adds the function that the item gets
		//crossed out when clicked
		li.addEventListener("click",strikeOut(event));

		//adds the li item it to the end of the list;
		ul.appendChild(li);

		//clears input box
		input.value="";

		//adds delete button that deletes the
		//corresponding item when clicked
		//next to the item name
		var del = document.createElement("i");
		var delbtn = document.createElement("button");
		del.classList.add('fas', 'fa-times');
		delbtn.classList.add('delbtn');
		delbtn.appendChild(del);
		delbtn.onclick=deleteItem;
		li.append(delbtn);
}


//function that adds input item after the enter button is clicked by the mouse
function addListAfterClick(){
	if (input.value.length > 0){
		createListElement();
	}

}

//function that adds input item after if the user input 
//something into the input field and clicked enter on 
//the keyboard
function addListAfterKeypress(event){
	if (input.value.length > 0 && event.keyCode==13){
		createListElement();
	}
}


//function that gets the target object (listItem)for the event
//that its clicked on so the strick out function
//can strick the item on the list
function getEventTarget(event){
	event = event ;
	return event.target ;
}

//function that accepts the event parameter and if the 
//target of the event has a tag of LI
//then toggle the class done to give
//the effect of item being crossed off the list.
function strikeOut(event){
	if(event.srcElement.nodeName == "LI"){
		var target = getEventTarget(event);
		target.classList.toggle("done");}
}


//function that accepts event and removes the parent li node
//of the delete button that was clicked
function deleteItem(event){
	this.parentNode.remove();
}

//function that initializes all the delete buttons next to items
//already on the list to have an action
//listener 
function initDeleteButtons(){
	for(var i = 0; i<dButtons.length; i++){
		dButtons[i].onclick=deleteItem;
	}	
}


//Initializes delete buttons
initDeleteButtons();

//adds event listener to enter button
button.addEventListener("click", addListAfterClick);

//adds event listener to input field 
input.addEventListener("keypress", addListAfterKeypress);

//adds event handler to the list so each item is crossed
//off when clicked
ul.onclick = strikeOut;






