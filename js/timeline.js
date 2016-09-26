/*global $, moment*/

// moment.js wird benutzt für alle datums variablen: http://momentjs.com/docs/#/displaying/format/

$(document).ready( function () {
	var timelineEl = $( '#timeline' );
	var popupEl = $( '#timeline-popup' );
	var optionsEl = $( '#timeline-timespan-options', timelineEl );
	var timelineData = getTimelineData();
	
	var currentTimelineSpanId = Object.keys( timelineData.timespans )[0];

	popupEl.find( '.timeline-popup-close-button' ).on( 'click', closePopup );
	timelineEl.find( '#timeline-timespan-selected' ).on( 'click', toggleSelection );

	function render () {
		requestAnimationFrame( function () {
			// var now = moment();
			
			var currentTimelineSpan = timelineData.timespans[currentTimelineSpanId];

			// den jetzigen zeitpunkt faken, so dass wir events angezeigt bekommen
			var now = moment().week( 42 );
			var halfTimeSpanSeconds = ~~( currentTimelineSpan.asSeconds() / 2 );

			var timelineSpanStart = moment( now ).subtract( halfTimeSpanSeconds, 'seconds' );
			var timelineSpanEnd = moment( now ).add( halfTimeSpanSeconds, 'seconds' );

			var allEventsInTimespan = timelineData.events.filter( function ( event ) {
				return event.date.isAfter( timelineSpanStart ) && event.date.isBefore( timelineSpanEnd );
			} );

			// remove all events that were displayed before
			timelineEl.find( '.event-button' ).remove();

			// show all current events
			var timelineSpanStartTimestamp = parseInt( timelineSpanStart.format( 'x' ), 10 );
			var timelineSpanEndTimestamp = parseInt( timelineSpanEnd.format( 'x' ), 10 );
			var nowTimestamp = parseInt( now.format( 'x' ), 10 );

			allEventsInTimespan.forEach( function ( event, eventIndex ) {
				var eventTimestamp = parseInt( event.date.format( 'x' ), 10 );
				var eventPositionInTimeline = ( eventTimestamp - timelineSpanStartTimestamp ) / ( timelineSpanEndTimestamp - timelineSpanStartTimestamp );
				var eventX = eventPositionInTimeline * 100;

				var eventIsInPast = eventTimestamp <= nowTimestamp;

				var eventEl = $( '<button class="event-button type-' + event.type + '" id="button-' + event.id + '">' + event.title + '</button>' );
				eventEl.css( 'left', eventX + '%' );
				eventEl.on( 'click', function () {
					openDetailPopup( event, eventX, eventIsInPast );
				} );

				timelineEl.append( eventEl );
			} );

			Object.keys( timelineData.timespans ).forEach( function ( timespan, index ) {
				var optionEl = timelineEl.find( '[data-timespan="' + timespan + '"]' );

				if ( ! optionEl.length ) {
					optionEl = $( '<button class="timeline-option" data-timespan="' + timespan + '">' + timespan + '</button>' );
					
					optionEl.on( 'click', function () {
						selectTimespan( timespan );
					} );
					
					optionsEl.append( optionEl );
				}

				if ( timespan === currentTimelineSpanId ) {
					optionEl.addClass( 'is-selected' );
				} else {
					optionEl.removeClass( 'is-selected' );
				}
			} );

			var selectedEl = $( '#timeline-timespan-selected', timelineEl );
			selectedEl.text( currentTimelineSpanId );
		} );
	}

	render();

	setInterval( render, 800 );

	function openDetailPopup ( eventData, eventX, isEventInPast ) {
		popupEl[isEventInPast ? 'addClass' : 'removeClass']( 'is-in-past' );

		var headlineEl = $( '#timeline-popup-title', popupEl );
		headlineEl.text( eventData.title );

		var descriptionEl = $( '#timeline-popup-description', popupEl );
		descriptionEl.text( eventData.description );
		
		popupEl.attr( 'data-type', eventData.type );
		popupEl.addClass( 'is-active' );
		popupEl.find( '.timeline-popup-arrow' ).css( 'left', eventX + '%' );

		var timeEl = popupEl.find( '#timeline-popup-time' );
		timeEl.attr( 'datetime', eventData.date.format( 'YYYY-MM-DDTHH:mm:ssZ') );
		timeEl.text( eventData.date.format( 'dddd, MMMM Do YYYY, h:mm:ss a') );
	}

	function closePopup () {
		popupEl.removeClass( 'is-active' );
	}

	function selectTimespan ( timespan ) {
		currentTimelineSpanId = timespan;
		closeSelection();
		render();
	}

	function closeSelection () {
		optionsEl.removeClass( 'is-active' );
	}

	function toggleSelection () {
		optionsEl.toggleClass( 'is-active' );
	}
} );

function getTimelineData () {
	var data =  { };

	var startDate = moment().week( 42 ).isoWeekday( 1 ).hour( 0 ).minute( 0 ).second( 0 );
	var endDate = moment().week( 45 ).isoWeekday( 1 ).hour( 0 ).minute( 0 ).second( 0 );

	var startDateTimestamp = parseInt( startDate.format( 'x' ), 10 );
	var endDateTimestamp = parseInt( endDate.format( 'x' ), 10 );

	var eventCount = 200;

	var eventTypes = [
		'maintenance',
		'error',
		'setup'
	];

	var timelineSpans = {
		'week': moment.duration( 1, 'weeks' ),
		'day': moment.duration( 1, 'days' ),
		'hour': moment.duration( 1, 'hours' )
	};
	
	var events = [ ];

	// beispiel für die 'echten Daten'
	// var events = [
	// 	{
	// 		// event datum
	// 		date: moment( '2016-10-14 09:30:26' ),
	// 		
	// 		// event typ: setup, maintenance oder was auch immer
	// 		type: 'setup',
	// 		
	// 		title: 'Event Title blabla',
	// 		description: 'hello 123',
	//		
	//		// event id, kann eindeutige zahlen kombination sein
	// 		id: 'event-121312'
	// 	}
	// ]

	// generate a few random events. we should probably use actual data instead of random items
	for ( var eventIndex = 0; eventIndex < eventCount; ++eventIndex ) {
		var eventPosition = Math.random();

		// event date, calculated by using linux timestamps as reference
		var eventTimestamp = startDateTimestamp + ~~( endDateTimestamp - startDateTimestamp * eventPosition );
		var eventDate = moment( eventTimestamp, 'x' );

		events[eventIndex] = {
			date: eventDate,
			type: eventTypes[randomNumber(0, eventTypes.length - 1, true)],
			title: 'EVENT ' + ( eventIndex + 1 ),
			description: 'lorem ipsum dolor',
			id: 'event-' + eventIndex
		};
	}

	data.events = events;
	data.startDate = startDate;
	data.endDate = endDate;
	data.timespans = timelineSpans;
	data.eventTypes = eventTypes;

	return data;
}

function randomNumber ( min, max, round ) {
	return round ?
		Math.round( min + Math.random() * ( max - min ) ) :
		min + Math.random() * ( max - min );
}