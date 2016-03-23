console.log("Bureau.js");
$( ".selector" ).accordion({
  heightStyle: "fill"
});

function init() {
	//Accordéon
	console.log("Init");
	$(function() {
		$( "#accordion" ).accordion();
	});
	///////////////////////////////////

	//Onglets
	$(function() {
		var tabs = $( "#tabs" ).tabs();
		
		tabs.delegate( "span.ui-icon-close", "click", function() {
			var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
			$( "#" + panelId ).remove();
			tabs.tabs( "refresh" );
		});
	});


}
