document.addEventListener('DOMContentLoaded', function () {
	console.clear();
	const log = console.log;

	let p = document.querySelector('p');

	// Задача 1
	log('Текстовое содержимое параграфа без тегов: ', p.textContent);

	// Задача 2.1
	function nodeInfo(node) {		
		this.node = document.querySelector(`${node}`);

		let res = {
			type: this.node.nodeType,
			name: this.node.nodeName,
			childCount: this.node.childNodes.length
		};

		log(`Информация об узле <${node}>:`, res);
		return res;
	}

	nodeInfo('p');
	nodeInfo('span');
	nodeInfo('div');

    // Задача 2.2
	function nodeInfo2(node) {
		let res = {
			type: node.nodeType,
			name: node.nodeName,
			childCount: node.childNodes.length
		};

		log('Информация об узле :', res);
		return res;
	}

	nodeInfo2(document.body.childNodes[0]);
	nodeInfo2(document.body.childNodes[3]);

	// Задача 3
	function getTextFromUl(ul) {
		let res = [];

		for (let i = 0; i < ul.children.length; i++){
			res.push(ul.children[i].textContent)
		}

		log('Текстовое содержимое ссылок внутри списка: ',res);
		return res

	}
	getTextFromUl(document.querySelector('ul'));

	// Задача 4
	for (let j = 0; j < p.childNodes.length; j++){
		if (p.childNodes[j].nodeType == 3) {
			p.childNodes[j].textContent = '-text-';			
		}
	}
	log('Текстовое содержимое параграфа после замены текстовых узлов: ', p.innerHTML)
});

