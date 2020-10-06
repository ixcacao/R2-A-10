const userAction = async () => {
	let initLat = 16.400393;
	let initLng = 120.601372;

	let inc = (1 / 111120) * 1000; // 1000 meter increments
	let latLng = "";

	// looping through to make a 10 x 10 area 
	// from (initLat, initLng) to (initLat + 10*inc, initLng + 10*inc)
	for(let i = 0; i < 10; i++){
		for(let j = 0; j < 10; j++){
			latLng += (initLat + inc * i).toString() + "," + (initLng + inc * j).toString() + ",";
		}
	}

	let reqStr = 'http://open.mapquestapi.com/elevation/v1/profile?key=M300DEIjTJNjTiiibYvSJfDeBw5LGSKu&shapeFormat=raw&latLngCollection=' + latLng;

	const response = await fetch(reqStr);
	const myJson = await response.json(); 
	console.log(myJson);
}

userAction();

let arr = [];
let newArr = [];

for(let i = 0; i < 10; i++){
	newArr.push([]);
}

// list of values goes from top to bottom then left to right (first column fills up, then second column)

for(let i = 0; i < data.elevationProfile.length; i++){
	let temp = [];
	temp.push(data.elevationProfile[i]["height"]);
	temp.push([data.shapePoints[i * 2], data.shapePoints[(i * 2) + 1]]);
	arr.push(temp);
}

for(let i = 0; i < arr.length; i++){
	newArr[i % 10].push(arr[i]);
}

console.log(newArr);

