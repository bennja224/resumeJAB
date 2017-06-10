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
	"bioPic": "images/jab.jpg"
};
bio.display = function() {	
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLmobile.replace("%data%",bio.contacts.mobile));
	formattedContactInfo.push(HTMLemail.replace("%data%",bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%",bio.contacts.github));
	formattedContactInfo.push(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	formattedContactInfo.push(HTMLlocation.replace("%data%",bio.contacts.location));

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBiopic);
	$("#header").append(formattedWelcome);
	
for(i in formattedContactInfo){
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

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
	"recent": [
	{
		"title": "JIRA",
		"dates": "2017",
		"description": "Create a JIRA project for the BizOps Transformation Enablement team.",
		"images": "images/JIRA.png"
	},
	{
		"title": "WAM",
		"dates": "2016",
		"description": "Migrate Service Assurance teams from AutoQM to Work Assignment Manager (WAM).",
		"images": "images/WAM.png"
	},
	{
		"title": "UA",
		"dates": "2015",
		"description": "Open a new Universal Agent center in Atlanta, GA.",
		"images": "images/Atl.jpg"
	}
	]
};

    for(project in projects.recent) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.recent[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.recent[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.recent[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.recent[project].images);
        $(".project-entry:last").append(formattedProjectImage);
        }



var education = {
	"schools": [
	{
		"name": "University of Phoenix",
		"city": "Atlanta, GA",
		"degree": "BA",
		"major": ["Business Management", "Human Resources"],
		"years": "2008 - 2011"
	},
	{
		"name": "University of Phoenix",
		"city": "Atlanta, GA",
		"degree": "Masters",
		"major": ["Business Management"],
		"years": "2014 - 2015"
	}
	],
	"onlineCourses": [
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
}

function displayEducation () {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedDegree);
	}
	$("#education").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			$(".education-entry:last").append(formattedonlineTitle);
			var formattedonlineSchool = HTMLonlineSchool.replace ("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedonlineSchool);
			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedonlineDates);
			var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedonlineURL);
	}
}
displayEducation();

$("#mapDiv").append(googleMap);





