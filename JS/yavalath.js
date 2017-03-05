

// (function($){

// 	$.fn.ChangPostionSpan = function(){

// 		$("span").hover(function(){

// 	 	var MarginTop = parseInt($(this).css("margin-top"),10);
// 	 	var MarginLeft = parseInt($(this).css("margin-left"),10);
// 	 	var ElementId = "#" + $(this).attr("id");

	 	 
// 		 //$("piecesHover").addClass({"background-color": "yellow"});
// 		 MarginTop = MarginTop- 5;
// 		 MarginLeft = MarginLeft + 5;

// 		// alert(MarginTop);
// 		// alert(MarginLeft);
// 		// alert(ElementId);
// 		 $(ElementId).css({"margin-top" : MarginTop + "px"});
// 		// alert($(this.id).css("margin-top"));
// 		 $(ElementId).css({"margin-left" : MarginLeft + "px" });       //fix the position 
// 	 	 $(this).addClass("piecesHover");

// 	};

// })(jQuery);






$(document).ready(function(){

        var i = 0;
		
		if(i == 0)
		{
		
			$("span").on("hover",function(){

	 		var MarginTop = parseInt($(this).css("margin-top"),10);
	 		var MarginLeft = parseInt($(this).css("margin-left"),10);
	 		var ElementId = "#" + $(this).attr("id");

	 	 
		 //$("piecesHover").addClass({"background-color": "yellow"});
			 MarginTop = MarginTop- 5;
		 	 MarginLeft = MarginLeft + 5;

		 //   alert(MarginTop);
		 //   alert(MarginLeft);
		 //   alert(ElementId);
		  	$(ElementId).css({"margin-top" : MarginTop + "px"});
		 // alert($(this.id).css("margin-top"));
		 	$(ElementId).css({"margin-left" : MarginLeft + "px" });       //fix the position 
	 	 	$(this).addClass("piecesHover");		
		});
		   $(this).off(event);
		   i ++;
		  // alert(i);
		}

		else
		{
			$("span").hover(function(){

			$(this).addClass("piecesHover");	

			});

		}

			var Cout = 0;
			$("span").on("click",function(){

				

				if(Cout == 0)
				{
				
				$(this).addClass("pieces").css("background-color","white");
			      Cout = 1; 
			    }

			    else if(Cout == 1)
			    {
				
				$(this).addClass("pieces").css("background-color","black");
			      Cout = 0; 
			    }

			})


   });

