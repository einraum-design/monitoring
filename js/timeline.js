/*global $, moment*/

// moment.js wird benutzt für alle datums variablen: http://momentjs.com/docs/#/displaying/format/


var startWeek = 42;
var endWeek = 47;

$(document).ready( function () {
	var timelineEl = $( '#timeline' );
	var scaleEl = $( '.timeline-scale', timelineEl );
	var popupEl = $( '#timeline-popup' );
	var optionsEl = $( '#timeline-timespan-options', timelineEl );
	var timelineData = getTimelineData();

	hiddenEvents.init();

	var currentTimelineSpanId = Object.keys( timelineData.timespans )[0];

	popupEl.find( '.timeline-popup-close-button' ).on( 'click', closePopup );
	timelineEl.find( '#timeline-timespan-selected' ).on( 'click', toggleSelection );

	function render () {
		requestAnimationFrame( function () {
			var now = getCurrentMoment();

			var currentTimelineSpan = timelineData.timespans[currentTimelineSpanId];
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
				eventEl.attr( 'data-event-id', event.id );
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

			// update scale
			scaleEl.find( '.scale-item' ).remove();
			
			var scaleItemDurationInSeconds = moment.duration( 1, 'hour' ).asMilliseconds();
			var scaleFormat = 'HH:mm';

			if ( currentTimelineSpanId.toLowerCase() === 'week' ) {
				scaleItemDurationInSeconds = moment.duration( 1, 'day' ).asMilliseconds();
				scaleFormat = 'ddd, MMM Do';
			}

			if ( currentTimelineSpanId.toLowerCase() === 'month' ) {
				scaleItemDurationInSeconds = moment.duration( 1, 'day' ).asMilliseconds();
				scaleFormat = 'M/D';
			}

			if ( currentTimelineSpanId.toLowerCase() === 'hour' ) {
				scaleItemDurationInSeconds = moment.duration( 5, 'minutes' ).asMilliseconds();
				scaleFormat = 'HH:mm';
			}

			var times = ~~( timelineSpanStartTimestamp / scaleItemDurationInSeconds ) + 1;
			var scaleStartSec = ( scaleItemDurationInSeconds * times );
			var scaleItemWidth = scaleItemDurationInSeconds / ( timelineSpanEndTimestamp - timelineSpanStartTimestamp );

			for ( var secondsInTimeline = scaleStartSec; secondsInTimeline < timelineSpanEndTimestamp; secondsInTimeline += scaleItemDurationInSeconds ) {
				var scaleItemX = ( secondsInTimeline - timelineSpanStartTimestamp ) / ( timelineSpanEndTimestamp - timelineSpanStartTimestamp );
				var scaleItemText = moment( secondsInTimeline, 'x' ).format( scaleFormat );
				var scaleItemEl = $( '<div class="scale-item">' + scaleItemText + '</div>' );
				
				scaleItemEl.css( {
					width: ( scaleItemWidth * 100 ) + '%',
					left: ( scaleItemX * 100 ) + '%'
				} );

				scaleEl.append( scaleItemEl );
			}
		} );
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
		closePopup();
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

	var startDate = moment().week( startWeek ).isoWeekday( 1 ).hour( 0 ).minute( 0 ).second( 0 );
	var endDate = moment().week( endWeek ).isoWeekday( 1 ).hour( 0 ).minute( 0 ).second( 0 );

	var startDateTimestamp = parseInt( startDate.format( 'x' ), 10 );
	var endDateTimestamp = parseInt( endDate.format( 'x' ), 10 );

	var eventCount = 200;

	var eventTypes = [
		'maintenance',
		'error',
		'setup'
	];

	var timelineSpans = {
		'Week': moment.duration( 1, 'weeks' ),
		'Day': moment.duration( 1, 'days' ),
		'Hour': moment.duration( 1, 'hours' ),
		'Month': moment.duration( 1, 'month' ),
	};

	var events = [ ];

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

	var events = [
		{
			id:'event-1',
			date: moment( startDate ).hours( 9 ).minutes( 30 ).seconds( 26 ),
			type: 'maintenance',
			title: 'Maintenance: ZXD',
			description: 'Bearings and Sealings on ZXD- rotary valve below XXXX have been replaced during Inspection after 8.000 operating hours.',
			image: 'img/events/2016-09-28-event.png'
		},

		{
			id:'event-2',
			date: moment( startDate ).add( 1, 'day' ).hours( 9 ).minutes( 30 ).seconds( 26 ),
			type: 'error',
			title: 'Error #0246',
			description: 'Analysis revealed: Suction conveying line was blocked. Conveying pressure = - 500 mbar.',
			image: 'img/events/2016-09-27-event.png'
		},
		{
			id:'event-3',
			date: moment( startDate ).add( 2, 'days' ).hours( 15 ).minutes( 30 ).seconds( 26 ),// moment( '2016-09-30 15:30:26' ),
			type: 'setup',
			title: 'Leakage in Conveying System / Wear in Rotary Valve',
			description: 'Conveying pressure constantly increasing for 5 hours. Solution: Performance was increased.',
			image: 'img/events/2016-09-29-event.png'
		},
		{
			id:'event-121312',
			date: moment( startDate ).add( 3, 'days' ).hours( 14 ).minutes( 30 ).seconds( 26 ),//moment( '2016-09-26 14:30:26' ),
			type: 'error',
			title: 'Störmeldung #0248: Zu geringer Drehmoment',
			description: 'Analyse ergab: Geringer Druck aufgrund niedriger Drehzahl.',
			image: 'img/events/placeholder-event.jpg'
		},
		{
			id:'event-121312',
			date: moment( startDate ).add( 4, 'days' ).hours( 15 ).minutes( 30 ).seconds( 26 ),//moment( '2016-09-26 19:30:26' ),
			type: 'error',
			title: 'Störmeldung #0249: Maschine XY schaltet sich bei laufender Dosierung ab',
			description: 'Analyse ergab: Leerlaufmoment war zu hoch eingestellt.',
			image: 'img/events/placeholder-event.jpg'
		},
		{
			id:'event-121312',
			date: moment( startDate ).add( 5, 'days' ).hours( 15 ).minutes( 30 ).seconds( 26 ),//moment( '2016-09-26 19:30:26' ),
			type: 'error',
			title: 'Störmeldung #0249: Maschine XY schaltet sich bei laufender Dosierung ab',
			description: 'Analyse ergab: Leerlaufmoment war zu hoch eingestellt.',
			image: 'img/events/placeholder-event.jpg'
		}
	];

	data.events = events;
	data.startDate = startDate;
	data.endDate = endDate;
	data.timespans = timelineSpans;
	data.eventTypes = eventTypes;

	return data;
}

function getCurrentMoment () {
	var now = moment();

	// den jetzigen zeitpunkt faken, so dass wir events angezeigt bekommen
	if ( now.week() < startWeek ) {
		now = moment().week( startWeek );
	}
	return now;
}

function randomNumber ( min, max, round ) {
	return round ?
		Math.round( min + Math.random() * ( max - min ) ) :
		min + Math.random() * ( max - min );
}


var hiddenEvents = {

	data: "",

	init: function() {

		hiddenEvents.loadData();
		$(".hiddenEvents .hiddenMaintenance").on('click', function() {
			hiddenEvents.maintenance();
		});

		$(".hiddenEvents .hiddenError").on('click', function() {
			hiddenEvents.error();
		});

		$(".hiddenError-Forwarding .knob").removeClass("loaded");

	},

	loadData: function() {

		$.ajax({
			dataType: "json",
			url : "daten/_hiddenEvents/events.json",
			success : function (data) {
					hiddenEvents.data = data;
					// console.log(hiddenEvents.data);
			}
		});

	},

	maintenance: function() {

		if (hiddenEvents.data.maintenance) {
			if (hiddenEvents.data.maintenance.length > 0) {

				var size = hiddenEvents.data.maintenance.length;
				var rand = Math.random() * (size - 1) + 1;
				var data = hiddenEvents.data.maintenance[parseInt(rand)];

				$(".hiddenEventPopups .hiddenMaintenance-Message .text").html(data.alertText);
				$(".hiddenEventPopups .hiddenMaintenance-Response .text").html(data.alertResponse);

				$(".hiddenMaintenance-Message").addClass("active");


					$(".hiddenMaintenance-Message .decline").on('click', function() {
						$(".hiddenMaintenance-Message").removeClass("active");
					});

					$(".hiddenMaintenance-Message .accept").on('click', function() {
						$(".hiddenMaintenance-Message").removeClass("active");
						$(".hiddenMaintenance-Response").addClass("active");

						// var tempDate = moment().format("YYYY-MM-DD hh:mm:ss");
						// console.log(data.eventDate);
						// console.log(moment( data.eventDate ));

						// EIN EVENT AUF DER TIMELINE HINZUFÜGEN:
						addTimelineEvent( {
							id: data.eventTitle,
							date: moment( data.eventDate ),
							type: "maintenance",
							title: data.eventTitle,
							description: data.eventDescription,
							image: data.eventImage
						},
						// nach 3 sekunden wieder runternehmen von der timeline
						1200000 );

						setTimeout(function(){
						  $(".hiddenMaintenance-Response").removeClass("active");
						}, 2000);

					});

			}
		}

	},

	error: function() {

		if (hiddenEvents.data.errors) {
			if (hiddenEvents.data.errors.length > 0) {

				var size = hiddenEvents.data.errors.length;
				var rand = Math.random() * (size - 1) + 1;
				var data = hiddenEvents.data.errors[parseInt(rand)];

				$(".hiddenEventPopups .hiddenError-Message .title").html(data.title);
				$('.hiddenEventPopups .hiddenError-Message .hiddenErrorHeader').css("background-image", "url("+data.image+")");
				$('.hiddenEventPopups .hiddenError-Response .hiddenErrorHeader').css("background-image", "url("+data.image+")");
				$('.hiddenEventPopups .hiddenError-Forwarding .hiddenErrorHeader').css("background-image", "url("+data.image+")");
				$(".hiddenEventPopups .hiddenError-Message .text").html(data.error);
				$(".hiddenEventPopups .hiddenError-Forwarding .title").html(data.title);
				$(".hiddenEventPopups .hiddenError-Response .title").html(data.title);
				$(".hiddenError-Message").addClass("active");


				// Forwarding

				$(".hiddenError-Message .buttons .intern").on('click', function() {
					$(".hiddenError-Message").removeClass("active");
					$(".hiddenEventPopups .hiddenError-Forwarding .text").html(data.intern);
					$(".hiddenError-Forwarding").addClass("active");
					setTimeout(function(){
						$(".hiddenError-Forwarding .knob").addClass("loaded");
					}, 500);
					setTimeout(function(){
						$(".hiddenError-Forwarding").removeClass("active");
						$(".hiddenError-Forwarding .knob").removeClass("loaded");

						$(".hiddenEventPopups .hiddenError-Response .text").html(data.response_intern);
						$(".hiddenError-Response").addClass("active");

						setTimeout(function(){
							$(".hiddenError-Response").removeClass("active");
						}, 7000);

						hiddenEvents.sendError(data);

					}, 3000);
				});

				$(".hiddenError-Message .buttons .coperion").on('click', function() {
					$(".hiddenError-Message").removeClass("active");
					$(".hiddenEventPopups .hiddenError-Forwarding .text").html(data.coperion);
					$(".hiddenError-Forwarding").addClass("active");
					setTimeout(function(){
						$(".hiddenError-Forwarding .knob").addClass("loaded");
					}, 500);
					setTimeout(function(){
						$(".hiddenError-Forwarding").removeClass("active");
						$(".hiddenError-Forwarding .knob").removeClass("loaded");

						$(".hiddenEventPopups .hiddenError-Response .text").html(data.response_coperion);
						$(".hiddenError-Response").addClass("active");

						setTimeout(function(){
							$(".hiddenError-Response").removeClass("active");
						}, 7000);

						hiddenEvents.sendError(data);

					}, 3000);
				});





					// $(".hiddenMaintenance-Message .decline").on('click', function() {
					// 	$(".hiddenMaintenance-Message").removeClass("active");
					// });



			}
		}

	},

	sendError: function(data) {

		// EIN EVENT AUF DER TIMELINE HINZUFÜGEN:
		addTimelineEvent( {
			id: data.title,
			date: moment(),
			type: "error",
			title: data.eventTitle,
			description: data.eventError,
			image: data.eventImage
		},
		// nach 3 sekunden wieder runternehmen von der timeline
		1200000 );

	}

}
