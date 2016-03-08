"use strict";
let header = document.getElementById("bindedheader");
let input = document.getElementById("name");
let nameheadings = document.getElementsByTagName("h4");
let namediv = document.getElementById("names");
		
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




