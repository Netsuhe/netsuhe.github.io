var offset = $(window).scrollTop() - actualBlock.offset().top,
	windowHeight = $(window).height();

if( offset >= -windowHeight && offset <= 0 ) {
	translateY = (-offset)*100/windowHeight;
    scale = 1;
	opacity = 1;
} else if( offset > 0 && offset <= windowHeight ) {
    scale = (1 - ( offset * 0.3/windowHeight));
	opacity = ( 1 - ( offset/windowHeight) );
	translateY = 0;
	boxShadowBlur = 40*(offset/windowHeight);
}
