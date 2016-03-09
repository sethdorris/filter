"use strict";
let header = document.getElementById("bindedheader");
let input = document.getElementById("name");
let nameheadings = document.getElementsByTagName("h4");
let namediv = document.getElementById("names");
let hulkMovies;

//Work to populate the DOM with at least Hulk Movies, and use the filter function on that data
var getHulkMovies = function () {
	return new Promise( (resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", "https://www.omdbapi.com/?s=hulk");
		xhr.onload = resolve;
		xhr.onerror = reject;
		xhr.send();
	}); 
}

getHulkMovies()
.then( (data) => {
	let response = JSON.parse(data.target.response);
	populateDomWithHulkMovies(response);
}).catch( (error) => {
	console.log("error", error);
});

input.addEventListener("input", (e) => {
	let searchby = input.value.toUpperCase();
	let resultcount = 0;
	header.innerHTML = input.value;
	if (input.value != "") {
		for(let i = 0; i < nameheadings.length; i++) {
			let nameList = nameheadings[i].innerHTML.toUpperCase();
			if (input.value != "") {
				if(nameList.indexOf(searchby) < 0) {
					nameheadings[i].style.display = 'none';
				} else {
					resultcount++;
				}
			}
		}
		header.innerHTML += " <h2>Total Results Found: " + resultcount + "</h4>"; 
	} else {
		for(let i = 0; i < nameheadings.length; i++) {
			nameheadings[i].style.display = 'block';
		}
	}
});

var populateDomWithHulkMovies = function(movies) {
	let moviesArray = movies.Search;
	for (let i = 0; i < 10; i++) {
		namediv.innerHTML += "<h4>" + moviesArray[i].Title + "</h4>";
	}
};