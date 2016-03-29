console.log("Bureau.js");
$( ".selector" ).accordion({
  heightStyle: "fill"
});

function init() {
	console.log("Init");

	/////////////////////
	//		Accordéon		/////////////////
	$(function() {
		$( "#accordion" ).accordion();
	});
	///////////////////////////////////

	///////////////////
	//		Onglets		///////////////////////////////////////////////////////////////////
	$(function() {
		var tabs = $( "#tabs" ).tabs();
		tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>";
		tabCounter = 4;
		tabtextCounter = 0;

		//Methode pour pouvoir fermer les onglets
		tabs.delegate( "span.ui-icon-close", "click", function() {
			var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
			$( "#" + panelId ).remove();
			tabs.tabs( "refresh" );
		});

		//Création d'un bouton ajouter fichier texte
		$("#body").append("<button id=\"add_tab\">Add Tab</button>");
		$("#add_tab").button().click(function() {addTab();});

		//Méthode executé lors du clique sur créer fichier texte
		function addTab() {
			var label = "Tab " + tabCounter,
			id = "tabs-" + tabCounter,
			li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) );

			tabs.find( ".ui-tabs-nav" ).append( li );
			tabs.append( "<div id='" + id + "' contenteditable=\"true\"><p>" + /*DOC TEXT*/ + "</p></div>" );
			tabs.tabs( "refresh" );
			tabCounter++;
		}
	});
	///////////////////////////////////////////////////////////////////////////////////

}

function DocText() {

}
