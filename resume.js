(function() {
	function showContact() {
		document.body.onbeforeprint = null;

		let email = document.getElementById('email'),
			phone = document.getElementById('phone'),
			label = document.createElement('span'),
			content = document.createElement('a');

		label.innerHTML = 'Email: ';
		email.appendChild(label);
		content.innerHTML = email.getAttribute('local') + '@' + email.getAttribute('domain');
		content.href = "mailto:" + content.innerHTML;
		email.appendChild(content);

		label = document.createElement('span');
		label.innerHTML = 'Phone: ';
		phone.appendChild(label);
		content = document.createElement('a');
		
		let area_values = phone.getAttribute('area'),
			office_values = phone.getAttribute('office'),
			line_values = phone.getAttribute('line'),
			phone_string = "(";

		for(let i = 0, length = area_values.length; i < length; i++) {
			phone_string += String.fromCodePoint(area_values.codePointAt(i) - 19);
		}

		phone_string += ") ";

		for(let i = 0, length = office_values.length; i < length; i++) {
			phone_string += String.fromCodePoint(office_values.codePointAt(i) - 19);
		}

		phone_string += '-';

		for(let i = 0, length = line_values.length; i < length; i++) {
			phone_string += String.fromCodePoint(line_values.codePointAt(i) - 19);
		}

		content.innerHTML += phone_string;
		content.href = "tel:" + content.innerHTML;
		phone.appendChild(content);

		return;
	}

	if (!top.document.title.length) {
		top.document.title = document.title;
	}

	document.body.onbeforeprint = showContact;
})();
