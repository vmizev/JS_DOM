console.log(document.head);
console.log(document.body);
console.log(document.body.childNodes);

let divCollection = document.getElementsByTagName("div");
let firstDiv = divCollection[0];

console.log(firstDiv.children);

for (let i = 1; i < firstDiv.children.length - 1; i++){
	console.log(firstDiv.children[i]);
}