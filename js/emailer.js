$(document).ready(function(){
 
  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("app-key", "parse-js-key");
 
  // Setup the form to watch for the submit event
  $('.pp-form').submit(function(e){
    e.preventDefault();
 
    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = { 
      yourName: ((document.getElementById("yourName")||{}).value)||"",
      yourEmail: ((document.getElementById("yourEmail")||{}).value)||"",
      yourNumber: ((document.getElementById("yourNumber")||{}).value)||"",
      yourLocate: ((document.getElementById("yourLocate")||{}).value)||"",
      yourMessage: ((document.getElementById("yourMessage")||{}).value)||""
    }
    
    // Run our Parse Cloud Code and 
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('Email sent!').addClass('success').fadeIn('fast');
      },
 
      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
      }
    });
  });
 
});