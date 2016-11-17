//<![CDATA[
//this is the script that handles the visuals of this demo

$(document).ready(function() {

  jOWL.load('data/wine.owl', function() {
    //once loaded, remove the loading display
    $('.loader').hide();
    $('#demo').show();
    //initialize UI components
    var tree = $('#treeview').owl_treeview({
      rootThing: true
    });
    //tooltip requires jquery.tooltip.js script
    var tooltip = $('#thingtooltip').owl_propertyLens({
      tooltip: true,
      "sparql-dl:PropertyValue(owl:Thing, ?y, ?z)": {
        sort: "?y"
      }
    });
    var individuals = $('#individuals').owl_propertyLens({
      chewsize: 100,
      onChange: {
        "owl:Thing": function(source, target, resourcebox) {
          tooltip.display(target, this);
        }
      }
    });
    var navbar = $('#navbar').owl_navbar();
    var autocomplete = $('#owlauto').owl_autocomplete({
      focus: true,
      chars: 2,
      filter: 'Class'
    });
    //making sure components respond to each others input:
    navbar.addListener([individuals, tree]);
    autocomplete.addListener([navbar, individuals, tree]);
    tree.addListener([individuals, navbar]);
    //set focus on the text input for user.
    $('#owlauto').focus();
    //fire up the components, on the owl Class wine
    var wine = jOWL("whitewine");

    navbar.propertyChange(wine);
    navbar.broadcast(wine);

  }, {
    reason: true
  });

});
//]]>