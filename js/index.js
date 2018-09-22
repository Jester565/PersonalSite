$(function(){
	window.sr = ScrollReveal();

	setTimeout(() => {
		$('#from').addClass('fadeOutDown');
		$('#slogan1').addClass('fadeOutDown');
		$('#slogan2').addClass('fadeInDown');
	}, 2000);

	$(window).scroll(() => {
		$('#from').addClass('fadeOutDown');
		$('#slogan1').addClass('fadeOutDown');
		$('#slogan2').addClass('fadeInDown');
	});

	$('input.autocomplete').autocomplete({
		data: {
			"C++": null,
			"Java": null,
			"Transmission Control Protocol (TCP)": null,
			"Android": null,
			"Cloud Computing": null,
			"Unit Testing": null,
			"Shell Scripting": null,
			"Machine Learning": null,
			"Web Developement": null,
			"SQL": null,
			"Python": null,
			"AngularJS": null,
			"Node.js": null,
			"Amazon Web Services (AWS)": null,
			"RESTful WebServices": null,
			"Angular": null,
			"JavaScript": null,
			"Unix": null,
			"React.js": null,
			"Kotlin": null,
			"Google Cloud Platform (GCP)": null,
			"NoSQL": null,
			"User Datagram Protocol (UDP)": null,
			"Full-Stack Development": null,
			"CUDA": null,
			"Google Mock": null,
			"Mobile Application Developement": null,
			"Parallel Programming": null,
			"Serverless": null
		},
	});
	
	$('#linkedin').click(() => {
		window.location.href = "https://www.linkedin.com/in/ajcraig565/";
	});

	$('#github').click(() => {
		window.location.href = "https://github.com/Jester565/";
	});

  if ($(window).width() < 768) {

  	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}

  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  } else {
  	
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  }
  
  sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });


});