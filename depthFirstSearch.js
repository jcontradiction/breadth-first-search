// binary tree represented by the tree object
/*
		10
	   /  \
	  4    17
	 / \   / \
	1 	9 12   18
*/

// javascript object representation of the above tree
let tree = {
	"10": {
		value: "10",
		left: "4",
		right: "17",
	},
	"4": {
		value: "4",
		left: "1",
		right: "9",
	},
	"17": {
		value: "17",
		left: "12",
		right: "18",
	},
	"1": {
		value: "1",
		left: null,
		right: null,
	},
	"9": {
		value: "9",
		left: null,
		right: null,
	},
	"12": {
		value: "12",
		left: null,
		right: null,
	},
	"18": {
		value: "18",
		left: null,
		right: null,
	},
};

let DepthFirstSearch = (tree, rootNode, searchValue) => {
	let stack = [];
	stack.push(rootNode[Object.keys(rootNode)[0]]);

	while (stack.length > 0) {
        for (let i = 0; i < stack.length; i++) {

            let currentNode = stack.pop();
            console.log('currentNode', currentNode)

            if (currentNode.value === searchValue) {
                console.log("Found it!");
                return currentNode;
            }

            if (currentNode.left) {
                stack.push(tree[currentNode.left]);
            }

            if (currentNode.right) {
                stack.push(tree[currentNode.right]);
            }
        }
    }
    console.log("Sorry, no such node found :(");
    return null;
};

module.exports = DepthFirstSearch;

console.log(DepthFirstSearch(tree,{"10": {
    value: "10",
    left: "4",
    right: "17"}} , '1'))