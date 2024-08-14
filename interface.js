(function() {
	let n_red = "#e60012",
		resume_frame = document.getElementById("resume-frame");
	
	resume_frame.onload = function() {
		resume_frame.contentDocument.getElementsByTagName("legend")[0].style.color = n_red;
	};
})();
