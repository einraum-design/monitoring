$( document ).ready( function () {
	var headerEl = $( '#header' );
	var clockEl = $( '<div class="clock"></div>' );

	headerEl.append( clockEl );

	setInterval( updateClock, 1000 );

	updateClock();

	function updateClock () {
		requestAnimationFrame( function () {
			clockEl.text( moment().format( 'ddd MMM D HH:mm' ) );
		} );
	}
} );