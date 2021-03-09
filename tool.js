$(document).ready(function(){
var counter=0;
	var msg = new SpeechSynthesisUtterance("X Box Select");
	window.speechSynthesis.speak(msg);
			
			
	/*		
	$("#goSearch").click(function(){
		//var typedWords = $("#searchBox").val();
		//var msg = new SpeechSynthesisUtterance(typedWords);
			//speechSynthesis.speak(msg);
		var quotes = new Array("X box, un snap");
		
			randno = quotes[Math.floor( Math.random() * quotes.length )];
			var msg = new SpeechSynthesisUtterance(randno);
			$("p").text(randno);
			speechSynthesis.speak(msg);
		
	});
	*/
	$('#home').click(function(){
  var msg = new SpeechSynthesisUtterance("X Box, Sign In");
		speechSynthesis.speak(msg);
});
	
	$(".cmdBtns").click(function(){
		var name = $(this).attr('id');
		
		if(name == "home"){
		var msg = new SpeechSynthesisUtterance("X Box, Go home");
		speechSynthesis.speak(msg);
		}
		
		if(name == "on"){
		var msg = new SpeechSynthesisUtterance("X Box, On");
		speechSynthesis.speak(msg);
		}
		if(name == "off"){
			var msg = new SpeechSynthesisUtterance("X Box, Turn off.");
			speechSynthesis.speak(msg);
			setTimeout(function(){
				var msg2 = new SpeechSynthesisUtterance("Yes.");
				speechSynthesis.speak(msg2)}, 3000);
		}
		
		if(name == "signIn"){
		var msg = new SpeechSynthesisUtterance("X Box, Sign In");
		speechSynthesis.speak(msg);
		}
		
		if(name == "person1"){
		var msg = new SpeechSynthesisUtterance("Person One");
		speechSynthesis.speak(msg);
		}
		
		if(name == "person2"){
		var msg = new SpeechSynthesisUtterance("Person 2");
		speechSynthesis.speak(msg);
		}
		
		if(name == "person3"){
		var msg = new SpeechSynthesisUtterance("Person 3");
		speechSynthesis.speak(msg);
		}
		
		if(name == "ctp"){
		var msg = new SpeechSynthesisUtterance("Choose this person");
		speechSynthesis.speak(msg);
		}
		
		if(name == "pr1"){
		var msg = new SpeechSynthesisUtterance("pro file 1");
		speechSynthesis.speak(msg);
		}
		
		if(name == "pr2"){
		var msg = new SpeechSynthesisUtterance("pro file 2");
		speechSynthesis.speak(msg);
		}
		
		if(name == "pr3"){
		var msg = new SpeechSynthesisUtterance("pro file 3");
		speechSynthesis.speak(msg);
		}
		
		if(name == "signOut"){
		var msg = new SpeechSynthesisUtterance("X Box, sign out");
		speechSynthesis.speak(msg);
		}
		
		if(name == "volUp"){
		var msg = new SpeechSynthesisUtterance("X Box, volume up");
		speechSynthesis.speak(msg);
		}
		
		if(name == "volDown"){
		var msg = new SpeechSynthesisUtterance("X Box, Volume down");
		speechSynthesis.speak(msg);
		}
		
		if(name == "mute"){
		var msg = new SpeechSynthesisUtterance("X Box, Mute");
		speechSynthesis.speak(msg);
		}
		
		if(name == "search"){
		var msg = new SpeechSynthesisUtterance("Search");
		speechSynthesis.speak(msg);
		}
		
		if(name == "muteMic"){
		var msg = new SpeechSynthesisUtterance("X Box, stop listening");
		speechSynthesis.speak(msg);
		}
		
		if(name == "netflix"){
		var msg = new SpeechSynthesisUtterance("X Box, go to net flix");
		speechSynthesis.speak(msg);
		}
		
		if(name == "huluPlus"){
		var msg = new SpeechSynthesisUtterance("X Box, go to who lou plus");
		speechSynthesis.speak(msg);
		}
		
		if(name == "skype"){
		var msg = new SpeechSynthesisUtterance("X Box, go to skype");
		speechSynthesis.speak(msg);
		}
		
		if(name == "settings"){
		var msg = new SpeechSynthesisUtterance("X Box, go to settings");
		speechSynthesis.speak(msg);
		}
		
		if(name == "goBack"){
		var msg = new SpeechSynthesisUtterance("X Box, go back");
		speechSynthesis.speak(msg);
		}
		
		if(name == "snap"){
		var msg = new SpeechSynthesisUtterance("X Box, snap");
		speechSynthesis.speak(msg);
		
		
		}
		
		if(name == "unsnap"){
		var msg = new SpeechSynthesisUtterance("X Box, un snap");
		speechSynthesis.speak(msg);
		}
		
		if(name == "down"){
		var msg = new SpeechSynthesisUtterance("down");
		speechSynthesis.speak(msg);
		}
		
		if(name == "yes"){
		var msg = new SpeechSynthesisUtterance("Yes");
		speechSynthesis.speak(msg);
		}
		
		if(name == "no"){
		var msg = new SpeechSynthesisUtterance("No");
		speechSynthesis.speak(msg);
		}
		
		if(name == "select"){
		var msg = new SpeechSynthesisUtterance("X Box, select");
		speechSynthesis.speak(msg);
		}
		
		if(name == "addMore"){
		alert("Want more commands? Leave a review suggesting commands you want to see in the app!");
		}
		
	});
	
	$(".cmdBtns").bind('mousedown', function() {
        $(this).css('border','2px solid green');
       
	});

	$(".cmdBtns").bind('mouseup', function() {
			$(this).css('border','2px solid white');
	});
		
	
	$(".cmdBtns").sortable();
	
	
	/*
	if(typedWords == "hello"){
		var msg = new SpeechSynthesisUtterance("Hello yourself");
		speechSynthesis.speak(msg);
	}
	
	if(typedWords == "yes"){
		var msg = new SpeechSynthesisUtterance("Great. I'm new here. Who should I get to know here?");
		speechSynthesis.speak(msg);
	}
	
	if(typedWords == "weather"){
		var msg = new SpeechSynthesisUtterance("Im not sure where you live so I wouldn't know what the weather is like there, sorry.");
		speechSynthesis.speak(msg);
	}
	
	if(typedWords == " "){
		var msg = new SpeechSynthesisUtterance("Don't rush. Take your time.");
		speechSynthesis.speak(msg);
	}
	
	if(typedWords == ""){
		var msg = new SpeechSynthesisUtterance("I'm sorry, did you say something?");
		speechSynthesis.speak(msg);
	}
	
	if(typedWords == "..."){
		var msg = new SpeechSynthesisUtterance("Lost for words, are we?");
		speechSynthesis.speak(msg);
	}
	
	if(typedWords == "jamii"){
		prompt = 2
		var msg = new SpeechSynthesisUtterance("jamie, is she your wife?");
		speechSynthesis.speak(msg);
		
	}
	
	if(prompt == 2) {
		if (typedWords == "yes she is"){
			var msg = new SpeechSynthesisUtterance("ah, congrats. When did you marry?");
			speechSynthesis.speak(msg);
			prompt = 3;
		}
	}
	
		if(prompt == 3) {
		if (typedWords == "recently"){
			var msg = new SpeechSynthesisUtterance("very nice. Have a happy marriage");
			speechSynthesis.speak(msg);
			prompt = 0;
		}
	}
	
	if(typedWords == "kyle"){
		var msg = new SpeechSynthesisUtterance("How do you know him");
		speechSynthesis.speak(msg);
		prompt = "a";
	}
	
	if(prompt == "a") {
		if (typedWords == "he is my husband"){
			var msg = new SpeechSynthesisUtterance("I'm sure he is a great one at that. How many years have you known each other?");
			speechSynthesis.speak(msg);
			prompt = "b";
		}
	}
	
	if(prompt == "b") {
		if (typedWords == "a year"){
			var msg = new SpeechSynthesisUtterance("Great, a long and happy marriage to you both!");
			speechSynthesis.speak(msg);
			prompt = 0;
		}
	}
	*/
	//});
	

//end of script
});