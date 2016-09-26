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
		// requestAnimationFrame( function () {
		// 	var now = getCurrentMoment();
						
		// 	var currentTimelineSpan = timelineData.timespans[currentTimelineSpanId];
		// 	var halfTimeSpanSeconds = ~~( currentTimelineSpan.asSeconds() / 2 );

		// 	var timelineSpanStart = moment( now ).subtract( halfTimeSpanSeconds, 'seconds' );
		// 	var timelineSpanEnd = moment( now ).add( halfTimeSpanSeconds, 'seconds' );

		// 	var allEventsInTimespan = timelineData.events.filter( function ( event ) {
		// 		return event.date.isAfter( timelineSpanStart ) && event.date.isBefore( timelineSpanEnd );
		// 	} );

		// 	// remove all events that were displayed before
		// 	timelineEl.find( '.event-button' ).remove();

		// 	// show all current events
		// 	var timelineSpanStartTimestamp = parseInt( timelineSpanStart.format( 'x' ), 10 );
		// 	var timelineSpanEndTimestamp = parseInt( timelineSpanEnd.format( 'x' ), 10 );
		// 	var nowTimestamp = parseInt( now.format( 'x' ), 10 );

		// 	allEventsInTimespan.forEach( function ( event, eventIndex ) {
		// 		var eventTimestamp = parseInt( event.date.format( 'x' ), 10 );
		// 		var eventPositionInTimeline = ( eventTimestamp - timelineSpanStartTimestamp ) / ( timelineSpanEndTimestamp - timelineSpanStartTimestamp );
		// 		var eventX = eventPositionInTimeline * 100;

		// 		var eventIsInPast = eventTimestamp <= nowTimestamp;

		// 		var eventEl = $( '<button class="event-button type-' + event.type + '" id="button-' + event.id + '">' + event.title + '</button>' );
		// 		eventEl.css( 'left', eventX + '%' );
		// 		eventEl.attr( 'data-event-id', event.id );
		// 		eventEl.on( 'click', function () {
		// 			openDetailPopup( event, eventX, eventIsInPast );
		// 		} );

		// 		timelineEl.append( eventEl );
		// 	} );

		// 	Object.keys( timelineData.timespans ).forEach( function ( timespan, index ) {
		// 		var optionEl = timelineEl.find( '[data-timespan="' + timespan + '"]' );

		// 		if ( ! optionEl.length ) {
		// 			optionEl = $( '<button class="timeline-option" data-timespan="' + timespan + '">' + timespan + '</button>' );
					
		// 			optionEl.on( 'click', function () {
		// 				selectTimespan( timespan );
		// 			} );
					
		// 			optionsEl.append( optionEl );
		// 		}

		// 		if ( timespan === currentTimelineSpanId ) {
		// 			optionEl.addClass( 'is-selected' );
		// 		} else {
		// 			optionEl.removeClass( 'is-selected' );
		// 		}
		// 	} );

		// 	var selectedEl = $( '#timeline-timespan-selected', timelineEl );
		// 	selectedEl.text( currentTimelineSpanId );
		// } );
	}

	

	function openDetailPopup ( eventData, eventX, isEventInPast ) {
		popupEl[isEventInPast ? 'addClass' : 'removeClass']( 'is-in-past' );

		var headlineEl = $( '#timeline-popup-title', popupEl );
		headlineEl.text( eventData.title );

		var descriptionEl = $( '#timeline-popup-description', popupEl );
		descriptionEl.text( eventData.description );

		var imageEl = $( '#timeline-popup-image', popupEl );
		imageEl.attr( 'src', eventData.image );
		
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

	// EIN EVENT AUF DER TIMELINE HINZUFÜGEN:
	// addTimelineEvent( {
	// 	id: 'meine-id',
	// 	date: moment( '2016-10-14 09:30:26' ),
	// 	type: 'setup',
	// 	title: 'mein titel',
	// 	description: 'my description yo',
	// 	image: 'images/test/img.svg'
	// },
	// nach 3 sekunden wieder runternehmen von der timeline
	// 3000 );
	function addTimelineEvent ( eventData, deleteAfter ) {
		if (
			eventData &&
			eventData.id &&
			eventData.date &&
			eventData.date.isValid &&
			eventData.date.isValid() &&
			eventData.type &&
			eventData.title &&
			eventData.description &&
			eventData.image
		) {
			timelineData.events.push( eventData );

			if ( deleteAfter ) {
				setTimeout( function () {
					removeTimelineEvent( eventData.id );
				}, deleteAfter );
			}

			render();
		} else {
			console.log( 'YO. DEIN EVENT IS FALSCH FORMATIERT. BITTE DIESES FORMAT NUTZEN:', JSON.stringify( timelineData.events[0], null, '  ' ) );
		}
	}

	function removeTimelineEvent ( removeId ) {
		var eventIndex = -1;

		timelineData.events
			.forEach( function ( event, index ) {
				if ( event.id === removeId ) {
					eventIndex = index;
				}
			} );

		if ( eventIndex !== -1 ) {
			timelineData.events.splice( eventIndex, 1 );
		}

		render();
	}

	render();
	setInterval( render, 5000 );

	window.removeTimelineEvent = removeTimelineEvent;
	window.addTimelineEvent = addTimelineEvent;
} );

function getTimelineData () {
	var data =  { };

	var startDate = moment().week( 42 ).isoWeekday( 1 ).hour( 0 ).minute( 0 ).second( 0 );
	var endDate = moment().week( 45 ).isoWeekday( 1 ).hour( 0 ).minute( 0 ).second( 0 );

	var startDateTimestamp = parseInt( startDate.format( 'x' ), 10 );
	var endDateTimestamp = parseInt( endDate.format( 'x' ), 10 );
	var completeDuration = endDateTimestamp - startDateTimestamp;

	var allocationCount = 40;

	var allocationTypes = [
		'setup',
		'maintenance',
		'recipe-1',
		'recipe-2',
		'recipe-3',
		'recipe-4'
	];

	var timelineSpans = {
		'week': moment.duration( 1, 'weeks' ),
		'day': moment.duration( 1, 'days' ),
		'hour': moment.duration( 1, 'hours' )
	};
	
	var allocations = [ ];

	// beispiel für die 'echten Daten'
	// var events = [
	// 	{
	// 		// event id, kann eindeutige zahlen kombination sein
	// 		id: 'event-121312',
	// 		
	// 		// event datum
	// 		date: moment( '2016-10-14 09:30:26' ),
	// 		
	// 		// event typ: setup, maintenance oder was auch immer
	// 		type: 'setup',
	// 		
	// 		title: 'Event Title blabla',
	// 		description: 'hello 123',
	// 		
	// 		image: 'img/events/testImage.svg'
	// 	}
	// ]

	// generate a few random events. we should probably use actual data instead of random items
	
	var lastAllocationEndDate = moment( startDate );

	for ( var allocationIndex = 0; allocationIndex < allocationCount; ++allocationIndex ) {
		var allocationStartDate = lastAllocationEndDate;
		var allocationDuration = ~~( completeDuration / allocationCount );
		var allocationEndDate = moment( allocationStartDate ).add( allocationDuration, 'milliseconds' );

		allocations.push( {
			start: allocationStartDate,
			end: allocationEndDate,
			type: allocationTypes[randomNumber(0, allocationTypes.length - 1, true)]
		} );
	}

	data.allocations = allocations;
	data.startDate = startDate;
	data.endDate = endDate;
	data.timespans = timelineSpans;
	data.allocationTypes = allocationTypes;



	return data;
}

function getCurrentMoment () {
	var now = moment();

	// den jetzigen zeitpunkt faken, so dass wir events angezeigt bekommen
	if ( now.week() < 42 ) {
		now = moment().week( 42 );
	}
	return now;
}

function randomNumber ( min, max, round ) {
	return round ?
		Math.round( min + Math.random() * ( max - min ) ) :
		min + Math.random() * ( max - min );
}