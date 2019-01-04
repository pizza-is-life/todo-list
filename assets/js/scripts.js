$(document).ready(function() {

  // Check off specific todos by clicking li
  $("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
  });

  // Delete todos by clicking X
  $("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
      $(this).remove();
    });
    event.stopPropagation();
  });

  // Add new todo through input
  $("input[type='text']").on("keypress", function(event){
    if(event.which === 13) {
      let todoText = ($(this).val());
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
      $(this).val("");
    }
  });

  // Toggle between showing and hiding the input field
  $("input").hide();

  $("h1").on("click", "i", function(){
    $("input[type='text']").fadeToggle(300, "swing");
    $("h1 i").toggleClass("fa-plus");
  });

});
