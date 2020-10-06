class Node{
	constructor(parent=null, position=null){
		this.parent = parent;
		this.position = position;

		this.g = 0;
		this.h = 0;
		this.f = 0;
	}

	isEqual(other){
		if(this.position[0] == other.position[0] && this.position[1] == other.position[1]){
			return true;
		}
		return false;
	}
}

function aStar(grid, start, end){
	let startNode = new Node(null, start);
	let endNode = new Node(null, end);

	let openList = [];
	let closedList = [];

	openList.push(startNode);

	while(openList.length > 0){
		let currentNode = openList[0];
		let currentIndex = 0;

		for(let i = 0; i < openList.length; i++){
			if(openList[i].f < currentNode.f){
				currentNode = openList[i];
				currentIndex = i;
			}
		}

		openList.splice(currentIndex, 1);
		closedList.push(currentNode);

		if(currentNode.isEqual(endNode)){
			let path = [];
			let current = currentNode;
			while(current != null){
				path.push(current.position);
				current = current.parent;
			}
			return path.reverse();
		}

		// generate children
		let children = [];
		let adjacent = [[0,-1], [0,1], [-1,0], [1,0], [-1,-1], [-1,1], [1,-1], [1,1]];
		for(let i  = 0; i < adjacent.length; i++){
			let nodePosition = [currentNode.position[0] + adjacent[i][0], currentNode.position[1] + adjacent[i][1]];

			if(nodePosition[0] > grid.length - 1 || nodePosition[0] < 0 || nodePosition[1] > (grid[grid.length - 1].length - 1) || nodePosition[1] < 0){
				continue;
			}

			if(grid[nodePosition[0]][nodePosition[1]] != 0){
				continue;
			}

			newNode = new Node(currentNode, nodePosition);
			children.push(newNode);
		}		

		for(let i = 0; i < children.length; i++){
			let flag = false;
			// if child is in closed list
			for(let j = 0; j < closedList.length; j++){
				if(children[i].isEqual(closedList[j])){
					flag = true;
					break;
				}			
			}

			if(flag){
				continue;
			} else {
				children[i].g = currentNode.g + 1;
				children[i].h = Math.pow((children[i].position[0] - endNode.position[0]), 2) + Math.pow((children[i].position[1] - endNode.position[1]), 2);
				children[i].f = children[i].g + children[i].h;

				let flag2 = false;
				for(let j = 0; j < openList.length; j++){
					if(children[i].isEqual(openList[j]) && children[i].g >= openList[j].g){
						flag2 = true;
						break;
					}
				}

				if(flag2){
					continue;
				} else {
					openList.push(children[i]);
				}
			}
		}
	}
}


function driver(){
	let grid = [
		[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]];

	let start = [0, 0];
	let end = [0, 2];

	let path = aStar(grid, start, end);
	console.log(path);
}

driver();
