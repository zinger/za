'use strict';
  
(function($){
  var MenuTabs = function() {

    var $tabs = $('<div id="tabs"></div>');
    var $ul = $('<ul></ul>');
    var $panelcontainer = $('<div></div>');
    
    $.each(za.menus, function(idx, menu) {
      var menuid = '"' + idx + '"';
      var menuidhref = '"#'  + idx + '"';
      $ul.append('<li><a href='+menuidhref+' class="menutab"><span>'+menu.display+'</span></li>');
      $panelcontainer.append('<div id='+menuid+' class="panels"></div>');
    });

    $tabs.append($ul);
    $tabs.append($panelcontainer);

    $("#content").append($tabs);
    $("#tabs").tabs();
  
    $("#tabs" ).bind( "tabsselect", function(event, ui) {
      var selected = $("#tabs").tabs( "option", "selected" );
      $(".panels").empty();
      za.showPanel(ui.panel.id);
    });
    
    $("#tabs").tabs( "option", "selected", 0 );
  };
  za.MenuTabs = MenuTabs;
}(jQuery));
