(function() {
	function createResume() {
		function parseXML(xml) {
			let resume = xml.getElementsByTagName('resume')[0],
				temp,
				text;

			//name
			document.getElementById('title').innerHTML = resume.getElementsByTagName("name")[0].childNodes[0].nodeValue;
			document.getElementById('resume-name').innerHTML = document.getElementById('title').innerHTML;

			//contact
			temp = resume.getElementsByTagName('linkedin')[0].childNodes[0].nodeValue;
			document.getElementById('linked-in').innerHTML = temp;
			document.getElementById('linked-in').setAttribute("href", temp);

			temp = resume.getElementsByTagName('portfolio')[0].childNodes[0].nodeValue;
			document.getElementById('portfolio').innerHTML = temp;
			document.getElementById('portfolio').setAttribute("href", temp);

			temp = resume.getElementsByTagName('email')[0];
			document.getElementById('email').setAttribute("local", temp.getElementsByTagName('local')[0].childNodes[0].nodeValue);
			document.getElementById('email').setAttribute("domain", temp.getElementsByTagName('domain')[0].childNodes[0].nodeValue);

			temp = resume.getElementsByTagName('phone')[0];
			document.getElementById('phone').setAttribute("area", temp.getElementsByTagName('area')[0].childNodes[0].nodeValue);
			document.getElementById('phone').setAttribute("office", temp.getElementsByTagName('office')[0].childNodes[0].nodeValue);
			document.getElementById('phone').setAttribute("line", temp.getElementsByTagName('line')[0].childNodes[0].nodeValue);

			//qualifications
			temp = resume.getElementsByTagName('qualifications')[0];
			document.getElementById('qualifications-summary').innerHTML = temp.getElementsByTagName('summary')[0].childNodes[0].nodeValue;
			document.getElementById('qualifications-languages').innerHTML = temp.getElementsByTagName('languages')[0].childNodes[0].nodeValue;
			document.getElementById('qualifications-technologies').innerHTML = temp.getElementsByTagName('technologies')[0].childNodes[0].nodeValue;

			//experience
			for (let jobs = resume.getElementsByTagName("work_experience")[0].getElementsByTagName("job"),
				section, experience_section = document.getElementById("experience"),
				j = 0; j < jobs.length; j++) {
				temp = jobs[j];
				text =
					"<div class='item'>" +
						"<div>" +
							"<div style='width: 45%; display: inline-block; vertical-align: top;'>" +
								"<span class='item-heading'>" + temp.getElementsByTagName("company")[0].childNodes[0].nodeValue + "</span>" +
							"</div>" +

							"<div style='width: 35%; display: inline-block; text-align: right; vertical-align: top;'>";
								section = temp.getElementsByTagName("locations")[0].getElementsByTagName("location");
								text += "<span>" + section[0].childNodes[0].nodeValue + "</span>";
								for (let l = 1; l < section.length; l++) {
									text +=
										"<span> | </span>" +
										"<span>" + section[l].childNodes[0].nodeValue + "</span>";
								}
							text += "</div>" +

							"<div style='width: 20%; display: inline-block; text-align: right; vertical-align: top;'>" +
								"<span>" + temp.getElementsByTagName("date")[0].childNodes[0].nodeValue + "</span>" +
							"</div>" +
						"</div>" +
						"<div class='sub-section'>" +
							"<h3>" + temp.getElementsByTagName("position")[0].childNodes[0].nodeValue + "</h3>";
							
							section = temp.getElementsByTagName("role");
							for(let r = 0, title, tools, tasks; r < section.length; r++) {
								text +=
									"<div class='item'>" +
										"<div><em>" + section[r].getElementsByTagName("department")[0].childNodes[0].nodeValue + "</em></div>" +
										"<div style='clear: both;'>";

								title = section[r].getElementsByTagName("title");
								if (title.length) {
									text += "<span>" + title[0].childNodes[0].nodeValue + "</span>";
								}

								tools = section[r].getElementsByTagName("tools");
								if (tools.length) {
									text += "<span style='margin-left: 25px;'>" + tools[0].childNodes[0].nodeValue + "</span>";
								}

								text +=		"</div>" +
										"<ul>";

								tasks = section[r].getElementsByTagName("tasks");
								if (tasks.length) {
									for (let task = tasks[0].getElementsByTagName("task"), t = 0; t < task.length; t++) {
										text += "<li>" + task[t].childNodes[0].nodeValue + "</li>";
									}
								}
								text +=	"</ul>" +
									"</div>";
							}
						temp += "</div>" +
					"</div>";
				
				experience_section.innerHTML += text;

				if ((j + 1) < jobs.length) {
					experience_section.innerHTML += "<hr>";
				}
			}

			//education
			for(let universities = resume.getElementsByTagName("education")[0].getElementsByTagName("university"),
				education_section = document.getElementById("education"), u = 0; u < universities.length; u++) {
				text =
					"<div class='item'>" +
						"<div>" +
							"<div style='width: 45%; display: inline-block;'>" +
								"<span class='item-heading'>" + universities[u].getElementsByTagName("school")[0].childNodes[0].nodeValue + "</span>" +
							"</div>" +
							
							"<div style='width: 35%; display: inline-block; text-align: right;'>" +
								"<span>" + universities[u].getElementsByTagName("location")[0].childNodes[0].nodeValue + "</span>" +
							"</div>" +
							
							"<div style='width: 20%; display: inline-block; text-align: right;'>" +
								"<span>" + universities[u].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</span>" +
							"</div>" +
						"</div>" +
						
						"<div class='sub-section'>";
				for (let degrees = universities[u].getElementsByTagName("degree"), d = 0; d < degrees.length; d++) {
					text +=
							"<div>" +
								"<strong>" + degrees[d].childNodes[0].nodeValue + "</strong>" +
							"</div>";
				}

				for (let certificates = universities[u].getElementsByTagName("certificate"), c = 0; c < certificates.length; c++) {
					text +=
							"<div>" +
								"<span>Certificate: " + certificates[c].childNodes[0].nodeValue + "</span>" +
							"</div>"
				}

				for (let others = universities[u].getElementsByTagName("other"), o = 0; o < others.length; o++) {
					text +=
							"<div>" +
								"<span><em>" + others[o].childNodes[0].nodeValue + "</em></span>" +
							"</div>";
				}

				text +=
						"</div>" +
					"</div>";

				if ((u + 1) < universities.length) {
					text += "<hr>";
				}

				education_section.innerHTML += text;
			}

			return;
		}

		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				parseXML(this.responseXML);
			}
		};
		xhttp.open("GET", "resume.xml", true);
		xhttp.send();
	}

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

	createResume();

	if (!top.document.title.length) {
		top.document.title = document.title;
	}

	document.body.onbeforeprint = showContact;
})();
