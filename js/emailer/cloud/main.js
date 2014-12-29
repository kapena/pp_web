// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("sendEmail", function(request, response) {
	var sendgrid = require('sendgrid');
	sendgrid.initialize("kapena96712", "BuyADonkey59");

	var yourName = request.params.yourName;
	var yourEmail = request.params.yourEmail;
	var yourNumber = request.params.yourNumber;
	var yourLocate = request.params.yourLocate;
	var yourMessage = request.params.yourMessage;

	sendgrid.sendEmail({
		to: "brentw.white@gmail.com",
		from: yourEmail,
		fromname: yourName,
		subjuct:"Email enquiry from the Point Plumbing website",
		text: "Name: "+yourName+"\nEmail: "+yourEmail+"\nNumber: "+yourNumber+"\nLocation: "+yourLocate+"\nMessage:\n\n\n"+yourMessage
	}, { 
		success: function(httpResponse) {
		console.log(httpResponse);
		response.success('You have sent us an email and we will be in contact with you shortly. Thank you for your time!');
		},

		error: function(httpResponse) {
			console.error(httpResponse);
			response.error('Oh oh...Something went wrong! Please try again.')
 	 	}

	});
});
