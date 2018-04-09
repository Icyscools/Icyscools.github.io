var focuson = null;
var itemid = 0;
var shaked = false;

function foc(element, type_in, id) {
	
	switch(type_in) {
		case 1:
			if(focuson != null) {
				focuson.style.borderColor = "rgba(255,255,255,0.6)";
				focuson.classList.remove('select');
			} 

			focuson = element;
			itemid = id;
			focuson.style.borderColor = "#50C878";
			focuson.classList.add('select');
			break;
		case 2:
			if(focuson != null) {
				focuson.style.borderColor = "rgba(255,255,255,0.6)";
			}

			bdc_holder = element.style.borderColor;
			element.style.borderColor = "#E60026";
			focuson = null;

			element.classList.add('shake');
			setTimeout(function() {
				element.classList.remove('shake');
				element.style.borderColor = bdc_holder;
			}, 750);
			break;
		default:
			console.log("...");
	}

}

function isVaildForm(form) {
	if(form.elements["cardtype"].value != null && form.elements["cardname"].value != null && form.elements["cardno"].value != null) {
		console.log(form.elements["cardtype"].value);
		if(focuson != null) {
			form.elements["itemId"].value = itemid;
			return true;
		} else {
			alert("Please select item!")
			return false;
		}
	} else {
		alert("Please inform the form!");
		return false;
	}
}