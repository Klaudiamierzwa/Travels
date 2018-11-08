//sticky menu

$(document).ready(function() 
{
	var NavY = $('nav').offset().top;
 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
	  
	if (ScrollY > NavY) 
	{ 
		$('nav').addClass('sticky');
	} 
	else 
	{
		$('nav').removeClass('sticky'); 
	}
	};
 
	stickyNav();
 
	$(window).scroll(function() 
	{
	stickyNav();
	});
});

//button scroll up

window.onload = function() 
{
	var button = document.getElementById("button");
	
	window.onscroll = function()
	{
		var button = document.getElementById("button");
		
		var yScrollAxis = window.pageYOffset;
		
		if (yScrollAxis > 200)
			button.style.display = "block";
		else
			button.style.display = "none";
	};
	
	button.onclick = function () 
	{
		window.scrollBy(0, -1 * window.pageYOffset);
	};
};

