function openNav() {

	var x = document.getElementById("navegation");

	if (x.className === "navegation") {
		x.className += " menujs";
		document.getElementById('menu').innerHTML = '&Cross;';
	} else {
		x.className = "navegation"
			document.getElementById('menu').innerHTML = '&#9776;';
	}
}