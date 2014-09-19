$(document).ready(function(){
// hide misc items
	$("#tweet-submit").hide();
	$(".stats").hide();
	$(".time").hide();
	$(".reply").hide();
	

	
	$("#char-count").hide();
	
	//form show
	$("#from_box").on('click', function(){
		$("#tweet-submit").show();
		$("#char-count").show();
		$(".tweet-compose").height(76);
	});
	
	//form controls
	$("#from_box").bind("keyup", function(){
		var max_characters = 140;
		var total_used = $("#from_box").val().length;
		var remaining = max_characters - total_used;
		$("#remaining").text(remaining);
		if(remaining <= 10){
			$("#remaining").css({color: "red"});
		} else {
			$("#remaining").css({color: "#999"});
		};

		if(remaining <= -1) {
			$("#tweet-submit").prop("disabled", true);
			
		}
		else {
			$("#tweet-submit").prop("disabled", false);
		}

		console.log(remaining);
	});

//add tweet
//when the user "submits" tweet but click the submit button, the tweet will be added to the main stream by
// prepending the tweet template with the current users information.

	$("#tweet-submit").on('click', function(){
		var currentName = $("#myName").text();
		console.log(currentName);
		var myPic = "img/alagoon.jpg";
		var getUserName = currentName.split(' ').join('');
		var userName = "@"+ getUserName;
		var tweetText = $("#from_box").val();
		var tweetTemplate = '<div class="tweet">'+
								'<div class="content">'+
								'<img class="avatar" src="' + myPic + '"/>'+
								'<strong class="fullname">' + currentName + '</strong>'+
								'<span class="username"> ' + userName + '</span>'+
								'<p class="tweet-text">' + tweetText + '</p></div>'+
								'<div class="tweet-actions"><ul><li><span class="icon action-reply">'+
								'</span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li>'+
								'<li><span class="icon action-favorite"></span> Favorite</li><li>'+
								'<span class="icon action-more"></span> More</li></ul></div><div class="stats">'+
								'<div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div>'+
								'<div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div>'+
								'<div class="users-interact"><div><img src="img/jennyshen.jpg" />'+
								'<img src="img/damenleeturks.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div>'+
								'</div><div class="reply"><img class="avatar" src="img/alagoon.jpg" />'+
								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div>'
		$('#stream').prepend(tweetTemplate);

		$("#from_box").val('');
		$("#tweet-submit").hide();
		$("#char-count").hide();
		$(".tweet-compose").height(38);
		$(".stats").hide();
		$(".time").hide();
		$(".reply").hide();
		// $("#char-count").text(140);


//For FIRST TWEET - stats, date and reply bar should be hidden by default and only reveal once the tweet is clicked on/off.

		$(".tweet:first").on('click', function(){
		if($(this).find(".stats").is(":hidden") && $(this).find(".reply").is(":hidden") 
		&& $(this).find(".time").is(":hidden")){
			$(this).find(".stats").slideDown("fast");
			$(this).find(".reply").slideDown("fast");
			$(this).find(".time").slideDown("fast");
		}
			else {
			$(this).find(".stats").slideUp("fast");
			$(this).find(".reply").slideUp("fast");
			$(this).find(".time").slideUp("fast");
		};
	

	});


			

	});

//Stats, date and reply bar should be hidden by default and only reveal once the tweet is clicked on/off.
	$(".tweet").on('click', function(){
		if($(this).find(".stats").is(":hidden") && $(this).find(".reply").is(":hidden") 
		&& $(this).find(".time").is(":hidden")){
			$(this).find(".stats").slideDown("fast");
			$(this).find(".reply").slideDown("fast");
			$(this).find(".time").slideDown("fast");
		}
			else {
			$(this).find(".stats").slideUp("fast");
			$(this).find(".reply").slideUp("fast");
			$(this).find(".time").slideUp("fast");
		};
	

	});
});



     