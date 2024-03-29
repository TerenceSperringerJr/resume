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
		content.innerHTML = '(' + phone.getAttribute('area') + ') ' + phone.getAttribute('office') + '-' + phone.getAttribute('line');
		content.href = "tel:" + content.innerHTML;
		phone.appendChild(content);

		return;
	}

	if (!top.document.title.length) {
		top.document.title = document.title;
	}

	document.body.onbeforeprint = showContact;
})();
