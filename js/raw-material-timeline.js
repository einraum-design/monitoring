/*global $, moment*/

// moment.js wird benutzt für alle datums variablen: http://momentjs.com/docs/#/displaying/format/

$(document).ready( function () {
	var timelineEl = $( '#raw-material-timeline' );
	var popupEl = $( '#timeline-popup' );
	var optionsEl = $( '#timeline-timespan-options', timelineEl );
	var timelineData = getTimelineData();

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

			var timelineSpanStartTimestamp = parseInt( timelineSpanStart.format( 'x' ), 10 );
			var timelineSpanEndTimestamp = parseInt( timelineSpanEnd.format( 'x' ), 10 );

			var allocationsInTimespan = timelineData.allocations.filter( function ( allocation ) {
				return (
					( allocation.start.isBefore( timelineSpanStart ) && allocation.end.isAfter( timelineSpanStart ) ) ||
					( allocation.start.isAfter( timelineSpanStart ) && allocation.end.isBefore( timelineSpanEnd ) ) ||
					( allocation.start.isBefore( timelineSpanEnd ) && allocation.end.isAfter( timelineSpanEnd ) )
				);
			} );

			// remove all allocations that were displayed before
			timelineEl.find( '.allocation' ).remove();

			allocationsInTimespan.forEach( function ( allocation, allocationIndex ) {
				var allocationEl = document.createElement( 'div' );
				allocationEl.classList.add( 'allocation' );

				allocationEl.addEventListener( 'click', function () {
					showAllocation( allocation );
				} );

				var startX = 0;
				var endX = 1;

				var allocationStartTimestamp = parseInt( allocation.start.format( 'x' ), 10 );
				var allocationEndTimestamp = parseInt( allocation.end.format( 'x' ), 10 );

				if ( allocation.start.isAfter( timelineSpanStart ) ) {
					startX = ( allocationStartTimestamp - timelineSpanStartTimestamp ) / ( timelineSpanEndTimestamp - timelineSpanStartTimestamp );
				}

				if ( allocation.end.isBefore( timelineSpanEnd ) ) {
					endX = ( allocationEndTimestamp - timelineSpanStartTimestamp ) / ( timelineSpanEndTimestamp - timelineSpanStartTimestamp );
				}

				allocationEl.setAttribute( 'data-type', allocation.type );
				allocationEl.textContent = allocation.type.replace( 'recipe-', '' );
				allocationEl.style.left = ( startX * 100 ) + '%';
				allocationEl.style.width = ( ( endX - startX ) * 100 ) + '%';

				if ( allocation.start.isBefore( now ) && allocation.end.isAfter( now ) ) {
					allocationEl.classList.add( 'is-current' );
				}

				if ( allocation.start.isAfter( now ) ) {
					allocationEl.classList.add( 'is-in-future' );
				}

				if ( allocation.end.isBefore( now ) ) {
					allocationEl.classList.add( 'is-in-past' );
				}

				timelineEl[0].appendChild( allocationEl );
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

	function showAllocation ( allocation ) {
		console.log( 'SHOW ALLOCATION DETAILS', allocation );

		var infoEl = $( '#first-row-rohstoffe > .ui-tabs-panel[aria-hidden="false"]' );

		if ( infoEl.length ){
			var wrapperEl = $( '#rohstoffe-recipe', infoEl );

			if ( allocation.recipe && allocation.recipe.number ) {
				wrapperEl.addClass( 'is-showing-recipe' );
				$( '.recipe-number', infoEl ).text( allocation.recipe.number );
			} else {
				wrapperEl.removeClass( 'is-showing-recipe' );
				$( '.recipe-number', infoEl ).text( allocation.type );
			}

			var nextEl = $( '.recipe-next', infoEl );
			nextEl.text( allocation.nextId );
		}

		var tableEl = $( '.ui-tabs-panel[aria-hidden="false"]' );

		if ( tableEl.length && allocation.recipe ) {
			var amountEl = $( '[data-content="amount"] .value', tableEl );
			amountEl.text( allocation.recipe.amount );

			var materialEl = $( '[data-content="material"] .value', tableEl );
			materialEl.text( allocation.recipe.material );

			var chargeEl = $( '[data-content="losnummer"] .value', tableEl );
			chargeEl.text( allocation.recipe.charge );

			var vendorEl = $( '[data-content="lieferant"] .value', tableEl );
			vendorEl.text( allocation.recipe.vendor );
		}
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

	render();
	setInterval( render, 5000 );
} );

function getTimelineData () {
	var data =  { };

	var startDate = moment().week( 42 ).isoWeekday( 1 ).hour( 0 ).minute( 0 ).second( 0 );
	var endDate = moment().week( 45 ).isoWeekday( 1 ).hour( 0 ).minute( 0 ).second( 0 );

	var startDateTimestamp = parseInt( startDate.format( 'x' ), 10 );
	var endDateTimestamp = parseInt( endDate.format( 'x' ), 10 );
	var completeDuration = endDateTimestamp - startDateTimestamp;

	var allocationCount = 60;

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

	var recipeData = {
		'recipe-1': {
			number: 1,
			amount: { min: 3023, max: 30232 },
			material: { min: 2490, max: 23022 },
			charge: { min: 39203, max: 934230 },
			vendor: { min: 290, max: 1022 }
		},
		'recipe-2': {
			number: 2,
			amount: { min: 3023, max: 30232 },
			material: { min: 2490, max: 23022 },
			charge: { min: 39203, max: 934230 },
			vendor: { min: 290, max: 1022 }
		},
		'recipe-3': {
			number: 3,
			amount: { min: 3023, max: 30232 },
			material: { min: 2490, max: 23022 },
			charge: { min: 39203, max: 934230 },
			vendor: { min: 290, max: 1022 }
		},
		'recipe-4': {
			number: 4,
			amount: { min: 3023, max: 30232 },
			material: { min: 2490, max: 23022 },
			charge: { min: 39203, max: 934230 },
			vendor: { min: 290, max: 1022 }
		}
	};

	var allocations = [ ];

	var lastAllocationEndDate = moment( startDate );
	var nextType = allocationTypes[randomNumber( 0, allocationTypes.length - 1, true )];

	for ( var allocationIndex = 0; allocationIndex < allocationCount; ++allocationIndex ) {
		var allocationStartDate = moment( lastAllocationEndDate );
		var allocationDuration = ~~( completeDuration / allocationCount );
		var allocationEndDate = moment( allocationStartDate ).add( allocationDuration, 'milliseconds' );

		var type = nextType;
		nextType = allocationTypes[randomNumber( 0, allocationTypes.length - 1, true )];

		var allocation = {
			start: allocationStartDate,
			end: allocationEndDate,
			type: type,
			next: nextType,
			id: 'allocation-' + allocationIndex,
			nextId: 'allocation-' + ( allocationIndex + 1 )
		};

		if ( recipeData[allocation.type] ) {
			allocation.recipe = { };

			Object.keys( recipeData[allocation.type] ).forEach( function ( key ) {
				if ( recipeData[allocation.type][key].min && recipeData[allocation.type][key].max ) {
					allocation.recipe[key] = randomNumber( recipeData[allocation.type][key].min, recipeData[allocation.type][key].max, true );
				}
			} );

			allocation.recipe.number = recipeData[allocation.type].number;
		}

		allocations.push( allocation );

		lastAllocationEndDate = allocationEndDate;
	}

	data.allocations = allocations;
	data.startDate = startDate;
	data.endDate = endDate;
	data.timespans = timelineSpans;
	data.allocationTypes = allocationTypes;
	data.recipeData = recipeData;

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
