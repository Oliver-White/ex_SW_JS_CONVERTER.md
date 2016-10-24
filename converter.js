var submit = document.getElementById("submit");
var clear = document.getElementById("clear");


function check_input () {
	input = document.getElementById("temp_input").value;
	if ( input ) {
		determine_converter( input );
	} else {
		alert("Please add a temp.");
	}
}

function determine_converter (user_temp) {
    var f = document.getElementById("f");
	var c = document.getElementById("c");

	if (f.checked) {
		to_fahrenheit(user_temp);
	} else if (c.checked) {
		to_celsius(user_temp);
	} else {
		alert("Please select a temperature type.");
	}
}

function to_celsius (user_temp) {
	var output_temp = ((user_temp - 32) / 1.8);
	output_to_dom(output_temp, "c");
}
	
function to_fahrenheit (user_temp) {
	var output_temp = (user_temp * 1.8 + 32);
	output_to_dom(output_temp, "f");
}

function output_to_dom (output_temp, temp_type) {
	var output = document.getElementById("output");
	var fixed = output_temp.toFixed(1)
	if (temp_type === "c") {
		if (output_temp > 32) {
			output.innerHTML = "<p class='red'>" + fixed + "</p>";
		} else if (output_temp < 0) {
			output.innerHTML = "<p class='blue'>" + fixed + "</p>";
		} else {
			output.innerHTML = "<p class='green'>" + fixed + "</p>";
		}
	} else {
		if (output_temp > 90) {
			output.innerHTML = "<p class='red'>" + fixed + "</p>";
		} else if (output_temp < 32) {
			output.innerHTML = "<p class='blue'>" + fixed + "</p>";
		} else {
			output.innerHTML = "<p class='green'>" + fixed + "</p>";
		}
	}
}

function reset_form () {
	document.getElementById("input").reset();
	console.log("Reset", reset_form);
}


submit.addEventListener("click", check_input);

clear.addEventListener("click", reset_form);





























