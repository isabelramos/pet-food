var foodInfoContainer = document.getElementById("info-container");
var foodString = "";


function makeDom (data, dogCatData) {
	var currentBrand;

	if (currentBrand !== undefined) {
		return true;	
	} else {
	for (var i=0; i<data[dogCatData].length; i++) {
		currentBrand = data[dogCatData][i];
		foodString += `<div class="col-sm-4 col-md-2">`;
		foodString += `<div class="panel panel-primary">`;
		foodString += `<div class="panel-heading"`;
		foodString += `<h3>${currentBrand.name}</h3>`;
		foodString += `</div>`;

		foodString += `<p>${currentBrand.breeds}</p>`

			for (var j=0; j<currentBrand.types.length; j++) {
				var currentTypes = currentBrand.types[j];
				foodString += `<p>${currentTypes.type}</p>`;

				for (var k=0; k<currentTypes.volumes.length; k++) {
					var currentVolumes = currentTypes.volumes[k];
					foodString += `<p>${currentVolumes.name} ${currentVolumes.price}</p>`;
				
				}	
			}	

			foodString += `</div></div>`;
		}

	foodInfoContainer.innerHTML = foodString;
	}
}


function executeThisCodeAfterFileLoadDogCat () {
	var data = JSON.parse(this.responseText);
	for (key in data) {
		var dogCatData = key;
		makeDom(data, dogCatData);	
	} 
}

function executeThisCodeAfterFileFail () {
	console.log("failureeee!");
}


var myDogRequest = new XMLHttpRequest();
myDogRequest.addEventListener("load", executeThisCodeAfterFileLoadDogCat);
myDogRequest.addEventListener("error", executeThisCodeAfterFileFail);
myDogRequest.open("GET", "dog-food.json");
myDogRequest.send();

var myCatRequest = new XMLHttpRequest();
myCatRequest.addEventListener("load", executeThisCodeAfterFileLoadDogCat);
myCatRequest.addEventListener("error", executeThisCodeAfterFileFail);
myCatRequest.open("GET", "cat-food.json");
myCatRequest.send();















// {
//   "cat_brands": [
//     {
//       "name": "Meow Meal",
//       "types": [
//         {
//           "type": "Kitten",
//           "volumes": [
//             {
//               "name": "24oz",
//               "price": 19.99
//             },
//             {
//               "name": "48oz",
//               "price": 34.99
//             }
//           ]
//         },
//         {
//           "type": "Adult",
//           "volumes": [
//             {
//               "name": "28oz",
//               "price": 22.99
//             },
//             {
//               "name": "56oz",
//               "price": 40.99
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "name": "Purrina",
//       "types": [
//         {
//           "type": "Kitten",
//           "volumes": [
//             {
//               "name": "20oz",
//               "price": 19.99
//             },
//             {
//               "name": "32oz",
//               "price": 26.99
//             }
//             {
//               "name": "64oz",
//               "price": 34.99
//             }            
//         },
//         {
//           "type": "Elite",
//           "volumes": [
//             {
//               "name": "20oz",
//               "price": 24.99
//             },
//             {
//               "name": "40oz",
//               "price": 47.99
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }