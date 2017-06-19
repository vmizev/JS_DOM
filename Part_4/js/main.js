document.addEventListener('DOMContentLoaded', function () {
	console.clear();
	const log = console.log;

 	// Задача 1
	let nodeUl = document.querySelector('ul');
	nodeUl.classList.add('list');

 	// Задача 2
 	var el = document.querySelector('ul').nextSibling;

 	while(el) { 		
 		el = el.nextSibling;
 		
 		if (el == null) {
 			break;
 		} else if (el.nodeName == "A") { 			
 			el.id = "link";
 			log(el);
 		} 
 	}	
	
	//Задача 3
	let list = document.getElementsByTagName("li");
	for (let i = 0; i < list.length; i+=2){
		list[i].classList.add('item');
	}
	log(list);

	//Задача 4
	let links = document.links;
	for (let j = 0; j < links.length; j++){
		links[j].classList.add('custom-link');
	}
	log(links);

});

