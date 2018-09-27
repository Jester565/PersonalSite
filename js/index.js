var inputType

var ElmCategories = {
	education: "education",
	work: "work",
	project: "project"
};

var inputState = {
	searchText: "",
	education: false,
	work: false,
	project: false
};

var sections = 
[
	{
		"label": "timeline",
		"img": "./imgs/hiking.jpg",
		"elms": [
			{
				"category": ElmCategories.education,
				"endDate": `ONGOING`,
				"startDate": `SEPT 2016`,
				"title": `Cal Poly Pomona`,
				"description": `
					GPA: 3.92<br />Relevant Coursework: Parallel Processing, Data Structures, Advanced Algorithms, Public Speaking`
			},
			{
				"category": ElmCategories.project,
				"endDate": `ONGOING`,
				"startDate": `SEPT 2017`,
				"img": `./imgs/parkhero.png`,
				"title": `Park Hero`,
				"description": `Android and WearOS Disneyland app that uses <b>machine learning</b> to rate wait times, allows users to share
					photos and FastPasses,
					and provides park schedules. The Kotlin front end is powered by a <b>serverless</b> back end
					utilizing <b>over a dozen cloud services.</b>`,
				"more": () => {
					window.location.href = "https://github.com/Jester565/ParkHero/blob/master/README.md"
				},
				"tech": {
					"Cloud Services": {
						"msg": null
					},
					"Amazon Web Services (AWS)": {
						"msg": null
					},
					"Google Cloud Platform (GCP)": {
						"msg": null
					},
					"Kotlin": {
						"msg": null
					},
					"Java": {
						"msg": null
					},
					"Python": {
						"msg": null
					},
					"JavaScript": {
						"msg": null
					},
					"Node.js": {
						"msg": null
					},
					"Machine Learning (ML)": {
						"msg": null
					},
					"Computer Vision": {
						"msg": null
					},
					"Firebase": {
						"msg": null
					},
					"Lambda": {
						"msg": null
					},
					"Simple Notification Service (SNS)": {
						"msg": null
					},
					"Simple Storage Service (S3)": {
						"msg": null
					},
					"API Gateway": {
						"msg": null
					},
					"AppSync": {
						"msg": null
					},
					"GraphQL": {
						"msg": null
					},
					"Serverless": {
						"msg": null
					},
					"Data Pipeline": {
						"msg": null
					},
					"Authentication": {
						"msg": null
					},
					"Cognito": {
						"msg": null
					},
					"PubSub": {
						"msg": null
					},
					"MySQL": {
						"msg": null
					},
					"Front End": {
						"msg": null
					},
					"Back End": {
						"msg": null
					},
					"Google Protocol Buffers": {
						"msg": null
					},
					"Analytics": {
						"msg": null
					},
					"QuickSight": {
						"msg": null
					},
					"Android": {
						"msg": null
					},
					"Mobile Application": {
						"msg": null
					},
					"Media": {
						"msg": null
					},
					"Asynchronous": {
						"msg": null
					},
					"Gradle": {
						"msg": null
					},
					"WearOS": {
						"msg": null
					},
					"REST": {
						"msg": null
					}
				}
			},
			{
				"category": ElmCategories.work,
				"endDate": `AUG 2018`,
				"startDate": `JUNE 2018`,
				"title": `Northrop Internship 2`,
				"description": `Created a <b>C++</b> HTTPS server to provide real-time and historical hardware status to an <b>Angular</b>
				front end. The server
				facilitated a fully-featured editor for creating <b>embedded Python</b> scripts that could derive data from the hardware.`,
				"tech": {
					"JavaScript": {
						"msg": null
					},
					"C++": {
						"msg": null
					},
					"Asynchronous": {
						"msg": null
					},
					"Python": {
						"msg": null
					},
					"HTTPS": {
						"msg": null
					},
					"Front End": {
						"msg": null
					},
					"Back End": {
						"msg": null
					},
					"Google Protocol Buffers": {
						"msg": null
					},
					"Transmission Control Protocol (TCP)": {
						"msg": null
					},
					"Public Key Infrastructure (PKI)": {
						"msg": null
					},
					"Unit Testing": {
						"msg": null
					},
					"CMake": {
						"msg": null
					},
					"Authentication": {
						"msg": null
					},
					"Collaboration": {
						"msg": null
					},
					"Web Application": {
						"msg": null
					},
					"REST": {
						"msg": null
					}
				}
			},
			{
				"category": ElmCategories.project,
				"endDate": `MARCH 2018`,
				"startDate": `FEB 2018`,
				"img": `./imgs/circles.png`,
				"title": `Packing Density Simulation`,
				"description": `Performs 2D and 3D packing density optimization for 3D printing particles.
				The simulations, built with <b>CUDA</b>, can be executed and viewed in the <b>React.js</b> front end
				by utilizing GPU instances, <b>NoSQL</b> databases, and queues from <b>AWS</b> and <b>GCP</b>.`,
				"more": () => {
					window.location.href = "https://github.com/Jester565/PackingDensityOptimizer_Frontend/blob/master/README.md"
				},
				"tech": {
					"CUDA": {
						"msg": null
					},
					"C++": {
						"msg": null
					},
					"JavaScript": {
						"msg": null
					},
					"React": {
						"msg": null
					},
					"Asynchronous": {
						"msg": null
					},
					"Simple Queue Service (SQS)": {
						"msg": null
					},
					"NoSQL": {
						"msg": null
					},
					"DynamoDB": {
						"msg": null
					},
					"Amazon Web Services (AWS)": {
						"msg": null
					},
					"Google Cloud Platform (GCP)": {
						"msg": null
					},
					"Cloud Services": {
						"msg": null
					},
					"Compute Engine": {
						"msg": null
					},
					"CMake": {
						"msg": null
					},
					"Authentication": {
						"msg": null
					},
					"Cognito": {
						"msg": null
					},
					"Web Application": {
						"msg": null
					},
					"Parallel Processing": {
						"msg": null
					},
					"Back End": {
						"msg": null
					},
					"REST": {
						"msg": null
					}
				}
			}
		]
	},
	{
		"label": "2017",
		"img": `./imgs/plane.jpg`,
		"elms": [
			{
				"category": ElmCategories.work,
				"endDate": `AUG 2017`,
				"startDate": `JUNE 2017`,
				"title": `Northrop Internship 1`,
				"description": `Built a <b>Node.js</b> application to stream real-time data from a command & control program to an <b>Angular.js</b>
					display.
					Also enabled <b>analytics</b> with Kibana by integrating a Ruby data collector.
					<br />
					At the end of the summer, I presented the work to a company <b>Vice President</b> and others in upper management.`,
				"tech": {
					"JavaScript": {
						"msg": null
					},
					"Node.js": {
						"msg": null
					},
					"ELK Stack": {
						"msg": null
					},
					"Elasticsearch": {
						"msg": null
					},
					"Kibana": {
						"msg": null
					},
					"FluentD": {
						"msg": null
					},
					"WebSocket Secure (WSS)": {
						"msg": null
					},
					"Angular.js": {
						"msg": null
					},
					"Public Key Infrastructure (PKI)": {
						"msg": null
					},
					"Authentication": {
						"msg": null
					},
					"Analytics": {
						"msg": null
					},
					"Collaboration": {
						"msg": null
					},
					"Web Application": {
						"msg": null
					},
					"Front End": {
						"msg": null
					},
					"Back End": {
						"msg": null
					}
				}
			},
			{
				"category": ElmCategories.project,
				"endDate": `MAY 2017`,
				"startDate": `NOV 2016`,
				"img": `./imgs/ngcp.png`,
				"title": `NG Collaboration Project`,
				"description": `Worked with other students to create a <b>C++</b> and <b>C#</b> library for communication between drones and ground
					stations.
					I added a one-way pinging system, a message generator, and communication over HAM radio`,
				"more": () => {
					window.location.href = "https://github.com/MichaelWallace30/CommProtocol/blob/master/README.md"
				},
				"tech": {
					"C++": {
						"msg": null
					},
					"User Datagram Protocol (UDP)": {
						"msg": null
					},
					"Transmission Control Protocol (TCP)": {
						"msg": null
					},
					"Serial Communication": {
						"msg": null
					},
					"Collaboration": {
						"msg": null
					},
					"CMake": {
						"msg": null
					},
					"C#": {
						"msg": null
					},
					"Back End": {
						"msg": null
					}
				}
			}
		]
	},
	{
		"label": "2016",
		"img": "./imgs/caladventure.jpg",
		"elms": [
			{
				"category": ElmCategories.project,
				"endDate": `NOV 2016`,
				"startDate": `OCT 2016`,
				"img": `./imgs/alien.png`,
				"title": `Alien Game`,
				"description": `Going beyond class project requirements, I built a graphical interface for my group's text-based game.
					This <b>Java</b> project (with no dependencies) is still shown to subsequent classes as a challenge for students
					to surpass it.`,
				"more": () => {
					window.location.href = "https://github.com/Jester565/SpyNinjaGame/blob/master/README.md"
				},
				"tech": {
					"Java": {
						"msg": null
					},
					"Leadership": {
						"msg": null
					},
					"Collaboration": {
						"msg": null
					},
					"Low Dependencies": {
						"msg": null
					},
					"Front End": {
						"msg": null
					},
					"Desktop Application": {
						"msg": null
					}
				}
			},
			{
				"category": ElmCategories.project,
				"endDate": `OCT 2016`,
				"startDate": `JAN 2016`,
				"img": `./imgs/beachbevs.png`,
				"title": `BeachBevs`,
				"description": `Customers order through a web app, sending their location and request to employees in real-time.<br /><br />
					The front end is powered by a <b>C++ WSS</b> server with a custom login and menu system.  It was my first project to 
					utilize databases and cloud services.`,
				"more": () => {
					window.location.href = "https://github.com/Jester565/BeachBevs/blob/master/README.md"
				},
				"tech": {
					"Cloud Services": {
						"msg": null
					},
					"WebSocket Secure (WSS)": {
						"msg": null
					},
					"Back End": {
						"msg": null
					},
					"Front End": {
						"msg": null
					},
					"Google Protocol Buffers": {
						"msg": null
					},
					"MySQL": {
						"msg": null
					},
					"Elastic Compute Cloud (EC2)": {
						"msg": null
					},
					"C++": {
						"msg": null
					},
					"Asynchronous": {
						"msg": null
					},
					"Simple Storage Service (S3)": {
						"msg": null
					},
					"Authentication": {
						"msg": null
					},
					"JavaScript": {
						"msg": null
					},
					"Web Application": {
						"msg": null
					},
					"Parallel Processing": {
						"msg": null
					}
				}
			},
			{
				"category": ElmCategories.education,
				"endDate": `AUG 2016`,
				"startDate": `AUG 2015`,
				"title": `Community College`,
				"description": `Completed five community college computer science courses while attending high school.`
			},
			{
				"category": ElmCategories.project,
				"endDate": `AUG 2016`,
				"startDate": `JUNE 2015`,
				"img": `./imgs/tropadom2.png`,
				"title": `Tropadom 2`,
				"description": `A <b>C++</b> game featuring a multiplayer 2D world with caves and hills generated with Perlin noise. The game
					utilizes <b>Google Protocol Buffers</b> and <b>Boost.Asio</b> to share world and player information.  A
					self-made, <b>multithreaded</b> lighting system makes exploring caves much more atmospheric than previous
					entries.`,
				"more": () => {
					window.location.href = "https://github.com/Jester565/Tropadom2/blob/master/README.md"
				},
				"tech": {
					"C++": {
						"msg": null
					},
					"Front End": {
						"msg": null
					},
					"Back End": {
						"msg": null
					},
					"Transmission Control Protocol (TCP)": {
						"msg": null
					},
					"User Datagram Protocol (UDP)": {
						"msg": null
					},
					"Desktop Application": {
						"msg": null
					},
					"CMake": {
						"msg": null
					},
					"Parallel Processing": {
						"msg": null
					}
				}
			}
		]
	},
	{
		"label": "2015",
		"img": "./imgs/starwars.jpg",
		"elms": [
			{
				"category": ElmCategories.education,
				"endDate": `APRIL 2015`,
				"title": `Computer Science AP Exam`,
				"description": `<b>Self-studied</b> and scored a 5 on the Computer Science AP Exam in junior year of high school.`,
			},
			{
				"category": ElmCategories.project,
				"endDate": `JUNE 2015`,
				"startDate": `JAN 2015`,
				"img": `./imgs/battleship.png`,
				"title": `Battleship`,
				"description": `Clients join a <b>TCP</b> and <b>UDP</b> server and invite each other to duel in a modified game of Battleship designed to teach trigonometry concepts.
					Players can communicate via VOIP or text. Both the server and client have no dependencies.`,
				"more": () => {
					window.location.href = "https://github.com/Jester565/Battleship/blob/master/README.md"
				},
				"tech": {
					"Low Dependencies": {
						"msg": null
					},
					"Java": {
						"msg": null
					},
					"Front End": {
						"msg": null
					},
					"Back End": {
						"msg": null
					},
					"Transmission Control Protocol": {
						"msg": null
					},
					"User Datagram Protcol": {
						"msg": null
					},
					"Desktop Application": {
						"msg": null
					}
				}
			},
			{
				"category": ElmCategories.project,
				"endDate": `APRIL 2015`,
				"startDate": `AUG 2014`,
				"img": `./imgs/tropadom.png`,
				"title": `Tropadom`,
				"description": ` Go from eating your hunted chicken around a campfire to creating a house filled with pistons, doors, and ladders
					while your industrial machinery refines your ore. Craft, conquer, and explore this
					Minecraft-inspired world with 4 biomes and 3 weather modes.`,
				"more": () => {
					window.location.href = "https://github.com/Jester565/Tropadom/blob/master/README.md"
				},
				"tech": {
					"Java": {
						"msg": null
					},
					"Front End": {
						"msg": null
					},
					"Desktop Application": {
						"msg": null
					},
					"Gradle": {
						"msg": null
					}
				}
			}
		]
	},
	{
		"extras": true,
		"label": "More Projects",
		"elms": [
			{
				"category": ElmCategories.project,
				"endDate": `NOV 2017`,
				"img": `./imgs/stock.png`,
				"title": `Stock Stuff`,
				"description": `A <b>serverless</b>, material web application that evaluates and displays the performance of user-specified rules against a stock's history.`,
				"more": () => {
					window.location.href = "https://github.com/Jester565/StockStuff/blob/master/README.md"
				},
				"tech": {
					"JavaScript": {
						"msg": null
					},
					"Serverless": {
						"msg": null
					},
					"MySQL": {
						"msg": null
					},
					"Lambda": {
						"msg": null
					},
					"API Gateway": {
						"msg": null
					},
					"Front End": {
						"msg": null
					},
					"Back End": {
						"msg": null
					},
					"Web Application": {
						"msg": null
					},
					"Cognito": {
						"msg": null
					},
					"Authentication": {
						"msg": null
					},
					"Node.js": {
						"msg": null
					},
					"Amazon Web Services (AWS)": {
						"msg": null
					},
					"Cloud Services": {
						"msg": null
					},
					"REST": {
						"msg": null
					}
				}
			},
			{
				"category": ElmCategories.project,
				"endDate": `OCT 2016`,
				"img": `./imgs/farmer.png`,
				"title": `Farmer Game`,
				"description": `A small <b>C++</b> platformer where users must neutralize evil potatoes to reach an elevator going to the surface.  This project, developed over a weekend, showcases the flexibility of my graphics, sound, and lighting libraries.`,
				"more": () => {
					window.location.href = "https://github.com/Jester565/FarmerGame/blob/master/README.md"
				},
				"tech": {
					"C++": {
						"msg": null
					},
					"Desktop Application": {
						"msg": null
					},
					"CMake": {
						"msg": null
					},
					"Parallel Processing": {
						"msg": null
					},
					"Asynchronous": {
						"msg": null
					},
					"Front End": {
						"msg": null
					}
				}
			},
			{
				"category": ElmCategories.project,
				"endDate": `APRIL 2015`,
				"img": `./imgs/ani.png`,
				"title": `AniCreate`,
				"description": `Uses <b>Java</b> with <b>FFMPEG</b> to position and rotate images to match capture colored points as they move between frames.`,
				"more": () => {
					window.location.href = "https://github.com/Jester565/AniCreate/blob/master/README.md"
				},
				"tech": {
					"Java": {
						"msg": null
					},
					"Desktop Application": {
						"msg": null
					},
					"Media": {
						"msg": null
					},
					"Maven": {
						"msg": null
					},
					"Front End": {
						"msg": null
					}
				}
			},
			{
				"category": ElmCategories.project,
				"endDate": `JUNE 2014`,
				"startDate": `AUG 2013`,
				"img": `./imgs/conkagar.png`,
				"title": "Conkagar",
				"description": `This was my first personal project.  It featured crafting, fighting, and some building.  Most importantly, it served as an introduction to object-oriented programming and data structures.`,
				"more": () => {
					window.location.href = "https://github.com/Jester565/Conkagar/blob/master/README.md"
				}
			}
		]
	}
];

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

function toCards(elms, cardWidth) {
	var cardsHtml = `<div class="row">`;
	cardX = 12;
	for (var elm of elms) {
		cardX += cardWidth;
		if (cardX > 12) {
			cardsHtml += `</div><div class="row">`;
			cardX = cardWidth;
		}
		var actionHtml = ``;
		for (var action of elm.actions) {
			console.log("ID: ", `${elm.title.toLowerCase().replace(/ /g,'')}${action.text}Button`);
			actionHtml += `<a id="${elm.title.toLowerCase().replace(/ /g,'')}${action.text}Button" class="cardButton">${action.text}</a>`;
		}
		var imgHtml = ``;
		if (elm.img != null) {
			imgHtml = `<img class="cardImage" src="${elm.img}">
				<span class="cardImageTitle card-title">${elm.title}</span>`;
		} else {
			imgHtml = `<br /><div class="cardNoImage"></div>
				<span class="cardNoImageTitle card-title">${elm.title}</span>`;
		}
		cardsHtml += `
		<div class="col m${cardWidth}">
			<div class="card">
				<div class="card-image">
					${imgHtml}
					<div class="endDate" style="font-size: 14px">${elm.endDate}</div>
				</div>
				<div class="card-content">
					<p>${elm.description}</p>
				</div>
				<div class="card-action">
					${actionHtml}
				</div>
			</div>
		</div>`;
	}
	return cardsHtml;
}

function updateSearch(techs, elms) {
	$('#searchResults').empty();
	var cardInfos = [];
	var evt = inputState.searchText;
	var searchElms = [];
	if (evt.length > 0) {
		for (var elmTitle of techs[evt]) {
			searchElms.push(elms[elmTitle]);
		}
	} else {
		for (var elmTitle in elms) {
			searchElms.push(elms[elmTitle]);
		}
	}
	for (var elm of searchElms) {
		if (inputState[elm["category"]]) {
			var msg = elm["description"];
			if (evt.length > 0 && elm["tech"][evt].msg != null) {
				msg = elm["tech"][evt].msg;
			}
			var actions = [];
			if (elm.more != null) {
				actions.push({
					"text": "More",
					"handler": elm.more
				});
			}
			if (!elm.extra) {
				actions.push({
					"text": "Timeline",
					"handler": (function(title) {
						$([document.documentElement, document.body]).animate({
							scrollTop: $(`#${title.toLowerCase().replace(/ /g,'')}Timeline`).offset().top
						}, 1000);
					}).bind(this, elm.title)
				});	
			}
			
			cardInfos.push({
				"img": elm.img,
				"title": elm.title,
				"description": msg,
				"actions": actions,
				"endDate": elm.endDate
			});
		}
	}
	var resultHtml = toCards(cardInfos, 3);
	$('#searchResults').append(resultHtml);
	for (var cardInfo of cardInfos) {
		for (var action of cardInfo.actions) {
			$(`#${cardInfo.title.toLowerCase().replace(/ /g,'')}${action.text}Button`).click(action.handler);
		}
	}
	//Paralax position are updated when height changes
	$(window).trigger('resize.px.parallax');
}

$(function() {
	var extraHtml = "";
	var timelineHtml = "";
	for (var section of sections) {
		if (!section.extras) {
			var sectionID = section.label;
			$(`#${sectionID}`).ready((function(id, img) {
				$(`#${id}`).parallax({imageSrc: img});
			}).bind(this, sectionID, section.img));

			timelineHtml += `
			<div>
				<h1 class="yearHeader">${section.label}</h1>
			</div>`;
			timelineHtml += `
				<div id="${sectionID}" class="parallax-window" data-parallax="scroll" androidFix="false" iosFix="false" class="tinted">
					<div class="container">`;
			
			var j = 0;
			for (var elm of section.elms) {
				var header = ``;
				var contentClasses = `timeline-content `;
				var startDate = ``;
				if (j % 2 == 0) {
					contentClasses += `js--fadeInRight `;
				} else {
					contentClasses += `js--fadeInLeft `;
				}
				if (elm.img != null) {
					header = `
						<div class="timeline-img-header" style="background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url(${elm.img}) center center no-repeat;">
							<h2 class="cardImageTitle">${elm.title}</h2>
						</div>
					`;
					contentClasses += `timeline-card`;
				} else {
					header = `<h2>${elm.title}</h2>`;
				}
				if (elm.startDate != null) {
					startDate = `<div class="startDate">${elm.startDate}</div>`;
				}
				var button = `<br /><br />`;
				if (elm.more != null) {
					button = `<a id="${elm.title.toLowerCase().replace(/ /g,'')}More" class="bnt-more" href="javascript:void(0)">More</a>`;
				}

				timelineHtml += `
						<div id="${elm.title.toLowerCase().replace(/ /g,'')}Timeline" class="timeline-item">
							<div class="timeline-img"></div>
							<div class="${contentClasses}">
								${header}
								<div class="endDate">${elm.endDate}</div>
								<p>${elm.description}</p>
								${button}
								${startDate}
							</div>
						</div>`;
				j++;
			}
			timelineHtml += `
					</div>
				</div>`;
		} else {
			extraHtml += `
			<div>
				<h1 class="yearHeader">${section.label}</h1>
			</div>`;
			var cardInfos = [];
			for (var elm of section.elms) {
				cardInfos.push({
					"title": elm.title,
					"img": elm.img,
					"description": elm.description,
					"actions": [
						{
							"text": "More",
							"action": elm.more
						}
					],
					"endDate": elm.endDate
				});
			}
			extraHtml += toCards(cardInfos, 3);
		}
	}

	$('.timeline').append(timelineHtml);
	$('body').append(extraHtml);

	var elms = {};
	var techs = {};
	for (var section of sections) {
		for (var elm of section.elms) {
			elms[elm.title] = elm;
			elms[elm.title].extra = section.extras;
			for (var tech in elm.tech) {
				if (techs[tech] == null) {
					techs[tech] = [];
				}
				techs[tech].push(elm.title);
			}
			if (elm.more != null) {
				$(`#${elm.title.toLowerCase().replace(/ /g,'')}More`).click(elm.more);
				console.log("HANDLER: ", `#${elm.title.toLowerCase().replace(/ /g,'')}MoreButton`);
				$(`#${elm.title.toLowerCase().replace(/ /g,'')}MoreButton`).click(elm.more);
			}
		}
	}

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

	$('#autocomplete-input').on('input', (e) => {
		var numChecked = $('.categoryCheck:checked').size();
		if (e.currentTarget.value != null && e.currentTarget.value.length > 0) {
			if (numChecked == 0)
			{
				for (var category in ElmCategories) {
					inputState[category] = true;
				}
				$('.categoryCheck').prop('checked', true);
			}
			inputState.searchText = e.currentTarget.value;
		} else {
			if (numChecked > 1) {
				for (var category in ElmCategories) {
					inputState[category] = false;
				}
				$('.categoryCheck').prop('checked', false);
			}
			inputState.searchText = "";
		}
		if ($('#searchResults').children().length > 0) {
			$('#searchResults').empty();
			$(window).trigger('resize.px.parallax');
		}
	});

	$(".categoryCheck").change(function() {
		inputState[this.id] = this.checked;
		if (this.checked) {
			if (inputState.searchText.length == 0) {
				for (var category in ElmCategories) {
					if (category != this.id) {
						inputState[category] = false;
						$('#' + category).prop('checked', false);
					}
				}
			}
		}
		updateSearch(techs, elms);
	});

	var techKeys = {};
	for (var tech in techs) {
		techKeys[tech] = null;
	}

	$('input.autocomplete').autocomplete({
		/*
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
		*/
		data: techKeys,
		onAutocomplete: (evt) => {
			inputState.searchText = evt;
			updateSearch(techs, elms);
		}
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
	$('.yearHeader').addClass('bigMargin');

  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  } else {
	$('.yearHeader').removeClass('bigMargin');
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

	//Handle querystring
	var timelineElm = getQueryVariable("elm");
	if (timelineElm != null) {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(`#${timelineElm}` + `Timeline`).offset().top
		}, 800);
	}


	//Update search bar from page reload
	inputState.searchText = $('#autocomplete-input').val();
	for (var category in ElmCategories) {
		inputState[category] = $('#' + category).prop('checked');
	}
	updateSearch(techs, elms);

	$(window).on('resize', function(){
		var win = $(this); //this = window
		if (win.width() < 768) {
			$('.yearHeader').addClass('bigMargin');
		} else {
			$('.yearHeader').removeClass('bigMargin');
		}
  });
});
