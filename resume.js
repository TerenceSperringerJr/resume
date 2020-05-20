(function() {
	function loadXMLDoc(filename) {
		if (window.ActiveXObject) {
			xhttp = new ActiveXObject("Msxml2.XMLHTTP");
		}
		else {
			xhttp = new XMLHttpRequest();
		}
		
		xhttp.open("GET", filename, false);
		
		try {
			xhttp.responseType = "msxml-document"
		}
		catch(err) {} // Helping IE11
		
		xhttp.send("");
		
		return xhttp.responseXML;
	}
	
	function loadContact() {
		var contact_info = document.getElementById("contact-info"),
			xml = loadXMLDoc("resume.xml"),
			xsl = loadXMLDoc("contact_info.xsl");
		
		// code for Chrome, Firefox, Opera, etc.
		if (document.implementation && document.implementation.createDocument) {
			var xsltProcessor = new XSLTProcessor(),
				resultDocument;
			
			xsltProcessor.importStylesheet(xsl);
			resultDocument = xsltProcessor.transformToFragment(xml, document);
			contact_info.appendChild(resultDocument);
		}
		// code for IE
		else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
			var ex = xml.transformNode(xsl);
			contact_info.innerHTML = ex;
		}
	}
	
	document.body.onbeforeprint = loadContact;
})();
