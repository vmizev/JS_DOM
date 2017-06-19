document.addEventListener('DOMContentLoaded', function () {
	console.clear();

	let nodeUl = document.querySelector('ul');

	function isParent(parent, child) {
		if (parent.contains(child)){
			console.log("true");
			return true;
		} else {
			console.log("false");
			return false;
		}		
	}
	isParent(document.body.children[0], document.querySelector('mark'));
	isParent(document.querySelector('ul'), document.querySelector('mark'));

	console.log("Список ссылок, которые НЕ находятся в <ul>");
	let allLinks = document.links;
	for (i = 0; i < allLinks.length; i++) {
		if (nodeUl.contains(allLinks[i])) {
			continue;
		} else {
			console.log(allLinks[i]);
		}
	}

	console.log("Элемент перед списком ul:", nodeUl.previousElementSibling);	
	console.log("Элемент после списка ul:", nodeUl.nextElementSibling);	

	console.log("Количество элементов li в списке ul:", nodeUl.children.length);	
});

