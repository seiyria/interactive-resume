$(function() {

  $(window).resize(resizeColumns);
  resizeColumns();

  $("#formatButton").click(function() {
    parseAndPlaceStarReport($("#starField").val());
    $('#starDialog').modal('hide');
  });
});

function parseAndPlaceStarReport(star) {
    addStarToPage(getStarWrapper(star));
    makeSortable();
}

function makeSortable() {

  $( ".column" ).sortable({});

  $(".portlet").each(function() {
    var text = $(this).children(".portlet-header").text();
    $(this).children(".portlet-header").empty();
    $(this).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
    $(this).find( ".portlet-header" )
      .addClass( "ui-widget-header ui-corner-all" )
      .prepend( "<span class='ui-icon'></span>")
      .end()
    .find( ".portlet-content" ).hide();
    $(this).children(".portlet-header").append(text);
  });

  $( ".portlet-header .ui-icon" ).click(function() {
    $( this ).toggleClass( "ui-icon-minus" ).toggleClass( "ui-icon-plusthick" );
    $( this ).parents( ".portlet:first" ).find( ".portlet-content" ).toggle();
    $(".column-container").css('overflow-y', 'hidden');
  });

  $( ".column" ).disableSelection();

  $("#userInfo .portlet-content").show(); 

  $(".column-container").niceScroll({horizrailenabled: false});
}

function resizeColumns() {
  $("#content").height($(window).height()-120);
}

