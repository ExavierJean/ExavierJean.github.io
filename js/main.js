$(document).ready(function(){

	$( ".fade-box" )
  .mouseenter(function() {
    $( this ).find( ".unhidden" ).css('display', 'none');
    $( this ).find( ".hidden" ).css('display', 'block');
  })
  .mouseleave(function() {
    $( this ).find( ".unhidden" ).css('display', 'block');
    $( this ).find( ".hidden" ).css('display', 'none');
  });

});