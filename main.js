'use strict';


let unordered = document.querySelector('ul');

//Clicking the item and Clicking the red “X”
unordered.addEventListener('click', function (event){
	let listItem = event.target.tagName;
	console.log(unordered);
	if(listItem === 'LI'){
    event.target.classList.add('completed');
	}else if(listItem === 'SPAN'){
    event.target.parentElement.remove();
	}
});

//Adding to string
let saved = ["Butter","Milk","Peas","Sugar","Laundry Soap"]
let lowerCase = saved.map( element => element.toLowerCase ); 
function myFunction() {
   let inputValue = document.getElementById("new-item-text").value; 
   if(saved.incudes(inputValue)) {
	   alert(Item already has been added to your list);
   }esle{
	fruits.push(inputValue);
   }
}


//Adding a new item
function addto_List(item) {
	item = item.trim();
	if(item == ''){
		return;
    }else if(item != ''){
    for(let i=0; i<=saved.length; i++){
    item == saved[i];	
	}
	alert("same");
	return;
	}
	const li = document.createElement('li');
	li.innerHTML = `<li class='todo-item'> ${item} <span class='remove'></span> </li>`;
    unordered.appendChild(li);
};



//Adding a new item by Enter Key
let i = document.querySelector('input');

i.addEventListener('keydown', function(event){
	if(event.key === 'Enter'){
    console.log('Enter Key');
    addto_List(i.value);
    i.value="";
	}
});

//Adding a new item by +
let addInput = document.querySelector('a');

addInput.addEventListener('click', function (event){
	console.log('a');
	addto_List(i.value);
document.getElementById('new-item-text').value="";
	
});
