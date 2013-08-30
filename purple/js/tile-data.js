$(".live-tile").not('.static').not('#textcontent').click(function() {
	if(animating) return;
	if(typeof this._canClick === 'undefined') this._canClick = true;
	if(!this._canClick) return;

	var newContent = $(this).attr('id').split("-");
	if(curPage == newContent[1]) return;
	curPage = newContent[1];
	var div = this;
	var $tile = $(this).liveTile({repeatCount:1, delay:750, initDelay:750, frontIsBackgroundImage: true, animationComplete: function(tileData, $front, $back) {
		div._canClick = (tileData.loopCount % 2 == 0);
	}});
	if($(this).hasClass('no-content') || $("#"+newContent[1]).length == 0) return;
	loadContent(newContent[1], true, $(this).attr('data-direction'));
});

var animating = false;
var current = "#innercontent";
var alternate = "#nextcontent";
var curPage = 'about';

function loadContent(page, doAnimate, animDirection) {
	if(animating) return;
	var newContent = $("#"+page).html();
	
	var forDirection = animDirection == 'horizontal' ? 'right' : 'down';
	var oppDirection = animDirection == 'horizontal' ? 'left' : 'up';
	
	if(doAnimate) {
		animating = true;
		
		$(current).hide("slide", {direction:forDirection, easing:'easeInOutExpo'}, 750, function() {
			$(alternate).hide();
			$(alternate).html(newContent);
			$(alternate).css({
					position:   'absolute',
					visibility: 'hidden',
					display:    'block'
				});

			var height = $(alternate).height();

			$(alternate).css({
					position:   'static',
					visibility: 'visible',
					display:    'none'
				});
				
			$("#contentcontainer").animate({height: height+50});
			$(alternate).show("slide", {direction:oppDirection, easing: 'easeInOutExpo'}, 750);
			
			animating = false;
			
			alternate = alternate == "#innercontent" ? "#nextcontent" : "#innercontent";
			current = current == "#innercontent" ? "#nextcontent" : "#innercontent";
		});
		
	} else {
		$("#innercontent").html(newContent);
		$("#contentcontainer").height($("#innercontent").height()+50);
	}
	
	$("#innercontent").css('background-color', $("#tile-"+page).css('background-color'));
}
