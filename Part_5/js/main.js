document.addEventListener('DOMContentLoaded', function () {
	console.clear();
	const log = console.log;

	let node = new DomNode(document.querySelector('ul'));

	node.getInfo();

	node.attr('id', 'someId');
	node.attr('id');
	node.attr();	
	
	node.text();
	node.text(' Содержимое узла заменено через node.text(value) ');
	
	node.append('<mark> node.append() </mark>');
	node.prepend('<mark> node.prepend() </mark>');
	node.before('<span style="color: red;"> node.before() </span>');
	node.after('<span style="color: red;"> node.after() </span>');
	
	node.html();
	node.html('Замена через node.html()');

	log("Результат node.getElement(): ", node.getElement());
});

