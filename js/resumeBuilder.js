var bio = {
	"name": "Julie Bennett",
	"role": "Business Solution Manager",
	"contacts": {
		"mobile": "770-329-0686",
		"email": "jr3717@att.com",
		"github": "bennja224",
		"twitter": "@richarja",
		"location": "Monticello, GA"
	},
	"welcomeMessage": "Hi I am learning about Front-end Web Development on my path to 2020.",
	"skills": ["energetic team builder", "global customer service", "network operations", "service assurance", "process management", "finance", "human resources"],
	"biopic": "images/jab.jpg"
};
bio.display = function() {	
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBiopic);
	$("#header").append(formattedWelcome);
	
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		var formattedSkills = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkills);
	});
}

};
bio.display();

var work = {
	"jobs": [
	{
		"employer": "AT&T",
		"title": "Principal Network Support",
		"location": "Atlanta, GA",
		"dates": "02/2016 - Current",
		"description": "Support the GO&P BizOps team as part of the Transformation Enablement (TE) team.  Partner with BizOps leadership and development teams to promote and deploy the tools created by the BizOps organization.  Create marketing and communication support for the teams by creating videos, user guides, and assisting training efforts as Subject Matter Experts (SME) of the BizOps tools."
	},
	{
		"employer": "AT&T",
		"title": "Area Manager Network Support",
		"location": "Atlanta, GA",
		"dates": "01/2015 - 02/2016",
		"description": "Created the GBA LTCoOP team in Atlanta supporting the Universal Agent (UA) and Long duration Customer Advocate Manager (LD-CAM) teams.  Interviewed and hired 85 LTCoOPs to support the UA and LDCAM teams.  Defined, documented, and trained the process for the LDCAM Team.  Trained all UA agents on SASHA workflows and provide technical support to all UA agents.  Participated in SASHA UAT releases and enhancements to the Carrier Management workflows."
	},
	{
		"employer": "AT&T",
		"title": "Area Manager Network Support",
		"location": "Conyers, GA",
		"dates": "04/2009 - 01/2015",
		"description": "Supported the Integrated Transport Management Services (ITMS) Organization.  Significant projects included: responsible for defining and deploying a single chronic management process and tool set to all ITMS chronic teams. Lead the work center migration project, managing and assisting each center with their transition from current to future state. Defined and delivered chronic metrics and results as well as ongoing automation and efficiency improvements to the ITMS chronic tool set. Identified business-critical automation solutions for AT&T Voice and Data networks. Support the Planning and Process teams in developing requirements for automation."
	},
	{
		"employer": "AT&T",
		"title": "Area Manager Network Support",
		"location": "Conyers, GA",
		"dates": "01/2003 - 04/2009",
		"description": "Support the Customer & Emerging Network Technical Assistance Center (CENTAC). Provide Tier 3 support to the Global CMC Tier 1 centers for Data, Voice, Frame Relay, ATM and IP services. Partner with Process organization and Automation Prototype to create and implement new initiatives for the customer maintenance teams. Created and delivered Customer T3 training package to all Customer Maintenance Centers."
	},
	{
		"employer": "AT&T",
		"title": "Associate Manager Process Engineer",
		"location": "Conyers, GA",
		"dates": "05/1998 - 12/2002",
		"description": "Support the Enterprise, Signature Client Platform and Service Assurance organizations. Created and maintained process website for Data related services including Private Line analog and digital, Frame Relay, ATM and IP services. Partner with IT and AT&T Labs on new initiatives and enhancements to our systems. Supervised 15 communication technicians supporting the Data maintenance center. "
	}
	]
};
work.display = function() {
	$("#workExperience").append(HTMLworkStart);
	if (work.jobs.length > 0) {
		work.jobs.forEach(function(jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", jobs.title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", jobs.location);
            $(".work-entry:last").append(formattedWorkLocation);
			var formattedDates = HTMLworkDates.replace("%data%", jobs.dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", jobs.description);
			$(".work-entry:last").append(formattedDescription);
		});
	}
};
work.display();


var projects = {
	"projects": [
	{
		"title": "JIRA",
		"dates": "2017",
		"description": "Create a JIRA project for the BizOps Transformation Enablement team.",
		"images": ["images/JIRA.png"]
	},
	{
		"title": "WAM",
		"dates": "2016",
		"description": "Migrate Service Assurance teams from AutoQM to Work Assignment Manager (WAM).",
		"images": ["images/WAM.png"]
	},
	{
		"title": "UA",
		"dates": "2015",
		"description": "Open a new Universal Agent center in Atlanta, GA.",
		"images": ["images/Atl.jpg"]
	}
	]
};

projects.display = function () {
	$("#projects").append(HTMLprojectStart);
	if (projects.projects.length > 0) {
		projects.projects.forEach(function(projects) {
	    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.description);
        $(".project-entry:last").append(formattedProjectDescription);
			
		projects.images.forEach(function(images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.images);
        $(".project-entry:last").append(formattedProjectImage);
		});
	});
}
};

projects.display();


var education = {
	"schools": [
	{
		"name": "University of Phoenix",
		"location": "Atlanta, GA",
		"degree": "BA",
		"majors": ["Business Management", "Human Resources"],
		"dates": "2008 - 2011"
	},
	{
		"name": "University of Phoenix",
		"location": "Atlanta, GA",
		"degree": "Masters",
		"majors": ["Business Management"],
		"dates": "2014 - 2015"
	}
	],
	"onlineClasses": [
	{
		"title": "Front End Web Developer",
		"school": "Udacity",
		"dates": "2017",
		"url": "https://www.udacity.com/"
	},
	{
		"title": "AT&T Network Transformation",
		"school": "tUniversity",
		"dates": "2016",
		"url": "https://www.att.com/"
	}
	]
};

education.display = function () {
	$("#education").append(HTMLschoolStart);
	if (education.schools.length > 0) {
		education.schools.forEach(function(school) {
		var formattedName = HTMLschoolName.replace("%data%", school.name);
		$(".education-entry:last").append(formattedName);
		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
		$(".education-entry:last").append(formattedMajor);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		$(".education-entry:last").append(formattedDegree);
	});
	}
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	if (education.onlineClasses.length > 0) {
		education.onlineClasses.forEach(function(onlineClasses) {
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineClasses.title);
		$(".education-entry:last").append(formattedonlineTitle);
		var formattedonlineSchool = HTMLonlineSchool.replace ("%data%", onlineClasses.school);
		$(".education-entry:last").append(formattedonlineSchool);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineClasses.dates);
		$(".education-entry:last").append(formattedonlineDates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", onlineClasses.url);
		$(".education-entry:last").append(formattedonlineURL);
	});
	}
};

education.display();

$("#mapDiv").append(googleMap);





