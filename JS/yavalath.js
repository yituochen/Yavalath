

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
		 	$(ElementId).css({"margin-left" : MarginLeft + "px" });       //fix the position by change the id's poperty
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


			var CoutTwo = 0;

			$("#TwoPlayer").click(function(){



			$("span").one("click",function(){

				

				if(CoutTwo == 0)
				{
				
				$(this).append("<span class='piecesWhite'></span");
				  // use appent to fix the position
			      CoutTwo = 1; 
			    }

			    else if(CoutTwo == 1)
			    {
				
				$(this).append("<span class='piecesBlack'></span");
			      CoutTwo = 0; 
			    }

			})

			});


			$("#ThreePlayer").click(function(){

				$("span").one("click",function(){

				if(CoutTwo == 0)
				{
				
				$(this).append("<span class='piecesWhite'></span");
				  // use appent to fix the position
			      CoutTwo = 1; 
			    }

			    else if(CoutTwo == 1)
			    {
				
				$(this).append("<span class='piecesBlack'></span");
			      CoutTwo = 2; 
			    }

			    else if (CoutTwo == 2)
			    {
				
				$(this).append("<span class='piecesGrey'></span");
			      CoutTwo = 0; 

			    }

			});

			});


			$("#reset").click(function(){

				location.reload();

			});


   });

