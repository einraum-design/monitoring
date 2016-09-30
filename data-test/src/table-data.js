/*global Papa, Promise*/

var data;
var loadedCallbacks = [ ];

var parseOptions = {
	download: true,
	dynamicTyping: true
};

var filePath = 'data';
var fileNames = [ 'materialRegister', 'contentMaterialsByHour', 'contentAmountsPerHour', 'contentMaxAmounts' ];
var fileUrls = fileNames.map( function ( fileName ) {
	return filePath + '/' + fileName + '.csv';
} );

var fileParseOptions = {
	materialRegister: {
		header: true
	}
};

var transformFunctions = {
	beforeStore: {
		contentMaterialsByHour: contentMaterialsBeforeStoreTransformFn,
		contentAmountsPerHour: contentAmountsBeforeStoreTransformFn,
		contentMaxAmounts: contentMaxAmountsBeforeStoreTransformFn
	},
	afterStore: {
		contentMaterialsByHour: contentMaterialsAfterStoreTransformFn	
	}
};

function loadTableData () {
	return parseCSVFiles( fileUrls )
		.then( function ( csvs ) {
			return csvs.map( transformBeforeStore );
		} )
		.then( function( csvs ) {

			if ( ! data ) {
				data = { };
			}

			csvs.forEach( function ( csv, index ) {
				data[fileNames[index]] = csv.data;
			} );

			return data;
		} )
		.then( function () {
			for ( var fileName in data ) {
				data[fileName] = transformAfterStore( fileName, data[fileName] );
			}

			return;
		} )
		.then( function () {
			loadedCallbacks.forEach( function ( cb ) {
				cb();
			} );

			loadedCallbacks = [ ];
		} );
}

function init () {
	console.log( 'LOADED AND READY TO GO!' );
}

// initial Data Transforms

function transformBeforeStore ( csv ) {
	if ( csv.data && typeof transformFunctions.beforeStore[csv.fileName] === 'function' ) {
		csv.data = transformFunctions.beforeStore[csv.fileName]( csv.data );
	}

	return csv;
}

function transformAfterStore ( fileName, csvData ) {
	if ( csvData && typeof transformFunctions.afterStore[fileName] === 'function' ) {
		csvData = transformFunctions.afterStore[fileName]( csvData );
	}

	return csvData;
}

function contentMaterialsBeforeStoreTransformFn ( csvData ) {
	var hourOfProductionRow = 0;
	var hourOfDayRow = 1;
	var dayOfProductionRow = 2;

	var componentIdCol = 0;
	var componentNameCol = 1;
	
	var ignoreRowIndices = [ hourOfProductionRow, hourOfDayRow, dayOfProductionRow ];
	var ignoreColIndices = [ componentIdCol, componentNameCol ];

	var result = csvData
		.map( function ( row, rowIndex ) {
			return row.map( function ( cell, colIndex ) {
				var chargeStr = '' + cell ? '' + cell : false;

				if ( ignoreColIndices.indexOf( colIndex ) === -1 ) {					
					return {
						chargeStr: chargeStr,
						hourOfProduction: csvData[hourOfProductionRow][colIndex],
						hourOfDay: csvData[hourOfDayRow][colIndex],
						dayOfProduction: csvData[dayOfProductionRow][colIndex],
						componentId: csvData[rowIndex][componentIdCol],
						componentTitle: csvData[rowIndex][componentNameCol]
					};

				} else {
					return cell;
				}
			} )
			.filter( function ( cell, colIndex ) {
				return ignoreColIndices.indexOf( colIndex ) === -1;
			} );
		} )
		.filter( function ( row, rowIndex ) {
			return ignoreRowIndices.indexOf( rowIndex ) === -1;
		} );

	return result;
}

function contentMaterialsAfterStoreTransformFn ( csvData ) {
	return csvData.map( function ( row, rowIndex ) {
		return row.map( function( cell, colIndex ) {
			if ( cell && cell.chargeStr ) {
				var layers = getMaterialByStr( cell.chargeStr );
				cell.layers = layers.length ? layers : [ ];
			}
			
			return cell;
		} );
	} );
}

function contentAmountsBeforeStoreTransformFn ( csvData ) {
	var hourOfProductionRow = 0;
	var hourOfDayRow = 1;
	var dayOfProductionRow = 2;

	var componentIdCol = 0;
	var componentNameCol = 1;
	
	var ignoreRowIndices = [ hourOfProductionRow, hourOfDayRow, dayOfProductionRow ];
	var ignoreColIndices = [ componentIdCol, componentNameCol ];

	var result = csvData
		.map( function ( row, rowIndex ) {
			return row.map( function ( cell, colIndex ) {
				if ( ignoreColIndices.indexOf( colIndex ) === -1 ) {					
					return {
						amount: {
							value: ( '' + cell ).length ? parseInt( cell, 10 ) : 0,
							unit: 'kg'
						},
						hourOfProduction: csvData[hourOfProductionRow][colIndex],
						hourOfDay: csvData[hourOfDayRow][colIndex],
						dayOfProduction: csvData[dayOfProductionRow][colIndex],
						componentId: csvData[rowIndex][componentIdCol],
						componentTitle: csvData[rowIndex][componentNameCol]
					};

				} else {
					return cell;
				}
			} )
			.filter( function ( cell, colIndex ) {
				return ignoreColIndices.indexOf( colIndex ) === -1;
			} );
		} )
		.filter( function ( row, rowIndex ) {
			return ignoreRowIndices.indexOf( rowIndex ) === -1;
		} );

	return result;
}

function contentMaxAmountsBeforeStoreTransformFn ( csvData ) {
	var headerRow = 0;

	var componentIdCol = 0;
	var componentNameCol = 1;
	var maxAmountCol = 4;
	
	var ignoreRowIndices = [ headerRow ];
	var ignoreColIndices = [ componentIdCol, componentNameCol ];

	var result = csvData
		.map( function ( row, rowIndex ) {
			var maxAmount = row[maxAmountCol];
			
			return {
				maxAmount: {
					value: ( '' + maxAmount ).length ? parseInt( maxAmount, 10 ) : 0,
					unit: 'kg'
				},						
				componentId: csvData[rowIndex][componentIdCol],
				componentTitle: csvData[rowIndex][componentNameCol]
			};
		} )
		.filter( function ( row, rowIndex ) {
			return ignoreRowIndices.indexOf( rowIndex ) === -1;
		} );

	return result;
}

function getMaterialByStr ( chargeStr ) {
	// layer
	// material
	// chargeID
	return chargeStr.split( '|' ).map( function ( layerId ) {
		return layerId.split( '#' ).map( getMaterialById ); // material Ids;
	} );
}

function getMaterialById ( id ) {
	var result;
		
	if ( data && data.materialRegister ) {
		var materialNr = parseInt( id, 10 );
		
		var material = data.materialRegister.filter( function ( material, index ) {
			return materialNr >= material.chargeIdMin && materialNr <= material.chargeIdMax;
		} )[0];

		if ( material ) {
			result = {
				id: material.id,
				title: material.title,
				chargeSize: material.chargeSize,
				chargeIndex: materialNr - material.chargeIdMin
			};
		}
	}

	return result;
}

// LOADING

function parseCSVFiles ( urls ) {
	return Promise.all( urls.map( parseCSV ) );
}

function parseCSV ( url ) {
	return new Promise ( function ( resolve, reject ) {
		var fileName = url
				.replace( filePath + '/', '' )
				.replace( '.csv', '' );
		
		var opts = copyObj( parseOptions );

		if ( fileParseOptions[fileName] ) {
			for ( var key in fileParseOptions[fileName] ) {
				opts[key] = fileParseOptions[fileName][key];
			}
		}

		opts.complete = function ( csv ) {
			csv.file = url;
			csv.fileName = fileName;

			if ( csv.data ) {
				resolve( csv );
			} else {
				reject( csv.errors );
			}
		};

		Papa.parse( url, opts );
	} );
}

// HELPERS

function copyObj ( obj ) {
	return JSON.parse( JSON.stringify( obj ) );
}

function removeNestingInArray ( arr ) {
	if ( arr.length === 1 ) {
		return removeNestingInArray( arr[0] );
	} else {
		return arr;
	}
}

// public API

function getProduction () {
	var me = this;
	var args = arguments;
	
	return new Promise ( function ( resolve, reject ) {
		if ( data ) {
			resolve( _getProduction.apply( me, args ) );
		} else {
			loadedCallbacks.push( function () {
				resolve( _getProduction.apply( me, args ) );
			} );
		}
	} );
}

function _getProduction ( filters, removeNesting ) {
	filters = filters || { };

	var filterKeys = Object.keys( filters );

	var result = data.contentMaterialsByHour.map( function ( row, rowIndex ) {
		return row.filter( function ( cell, colIndex ) {
			var matchesFilter = true;

			filterKeys.forEach( function ( filterKey ) {
				if ( cell[filterKey] !== filters[filterKey] ) {
					matchesFilter = false;
				}
			} );

			return matchesFilter;
		} );
	} );

	result.map( function ( row, rowIndex ) {
		return row.map( function ( cell, colIndex ) {
			if ( 
				data.contentAmountsPerHour &&
				data.contentAmountsPerHour[rowIndex] &&
				data.contentAmountsPerHour[rowIndex][colIndex] &&
				data.contentAmountsPerHour[rowIndex][colIndex].amount
			) {
				cell.amount = copyObj( data.contentAmountsPerHour[rowIndex][colIndex].amount );
			}

			if (
				data.contentMaxAmounts &&
				data.contentMaxAmounts[rowIndex] &&
				data.contentMaxAmounts[rowIndex].maxAmount
			) {
				cell.maxAmount = copyObj( data.contentMaxAmounts[rowIndex].maxAmount );

				if ( cell.amount && typeof cell.amount.value === 'number' ) {
					cell.fillLevel = cell.amount.value / cell.maxAmount.value;
				}
			}

			return cell;
		} );
	} );

	if ( removeNesting ) {
		result = result.map( removeNestingInArray );
	}

	return {
		filters: filters,
		data: result
	};
}

function getProductionAtHour ( hourOfProduction, removeNesting ) {
	return getProduction( { hourOfProduction: hourOfProduction }, !! removeNesting );
}

function getComponents () {
	return getProduction( { dayOfProduction: 0, hourOfProduction: 0 }, true ).then( function ( res ) {
		return res.data.map( function ( cell ) {
			return {
				id: cell.componentId,
				title: cell.componentTitle
			};
		} );
	} );
}

function getComponentById ( componentId ) {
	return getComponents().then( function ( components ) {
		return components.filter( function ( component ) {
			return component.id === componentId;
		} )[0];
	} );
}

function getComponentTitle ( componentId ) {
	return getComponentById( componentId ).then ( function ( component ) {
		return component.title;
	} );
}

function getHours () {
	return getProduction( { componentId: 0 }, true ).then( function ( productionData ) {
		return productionData.data.filter( function ( row ) {
			return !! row.length;
		} )[0].map( function ( productionDataHour ) {
			return productionDataHour.hourOfDay;
		} );
	} );
}

// getProductionAtHour( 2, true ).then( function ( res ) {
// 	console.log( 'production at hour:', 2, res );
// } );

// getComponents().then( function ( components ) {
// 	console.log( 'components:', components );
// } );

// getComponentTitle( 3 ).then( function ( componentTitle ) {
// 	console.log( 'component title:', 3, componentTitle );
// } );

// getHours().then( function ( hours ) {
// 	console.log( 'hours: ', hours );
// } );

// loadTableData().then( addUI );