$(document).ready(function(){
	$("nav a").on('click', function(){
		//Assignign current class
		$("nav li.current").removeClass("current");
		$(this).parent().addClass("current");

		// set heading text
         $("h1#heading").text($(this).text());


         // get & filter link text

         var category = $(this).text().toLowerCase().replace(" ", "-");

         // remove hidden class if all projects are selected
         if(category == "all-projects"){
         	$("ul#gallery li:hidden").fadeIn("slow").removeClass("hidden");
         }else {
         	$("ul#gallery li").each(function(){
         		if(!$(this).hasClass(category)){
         			$(this).hide().addClass("hidden");
         		} else{
         			$(this).fadeIn("slow").removeClass("hidden");
         		}
         	});
         }
         //stop the link behavior
    return false;
	});
// mouse enter overlay
	$("ul#gallery li").on("mouseenter", function(){
		//get data attriube value
		var title = $(this).children().data("title");
		var desc = $(this).children().data("desc");
  // valaditon

  if(desc == null){
  	desc = "Click To Enlarge";
  }

  if(title == null){
  	title = " ";
  }
  // making the overlay div

  $(this).append("<div class=overlay></div>");

  // get the overlay div 
  var overlay = $(this).children(".overlay");

  // adding html to overlay

  overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

  // fade in overlay
  overlay.fadeIn(800);

	});

	// mouse leave overlay
$("ul#gallery li").on("mouseleave", function(){


$(this).append("<div class=overlay></div>");

  
  var overlay = $(this).children(".overlay");

  //fade out the overlay we made with the mouseenter 
  overlay.fadeOut(500);

});
});