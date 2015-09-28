/**
 * Created by Leon Naldo on 9/24/15.
 */

$(document).ready(function(){
  $(".flip").click(function(){
    $($(this).nextAll(".panel")[0]).slideToggle("slow");
  });
  /**
   * Credit to Stack Overflow for that one.
   * What it does is search for the exact panel after and toggles it.
   * */

  $("#testr1").dblclick(function(){
    $(this).hide();
  });

  var form = $('#myForm');
  var formMessage = $('formMessage');

  /**
   * Incomplete code, otherwise troublesome to the other working codes from Part 1.
  $.ajax({
    type: GET,
    url: $(form).attr('inputURL'),
    data: formData
    success: getNumLinks()
  });
   */
});


/**
function getNumLinks() {
  var x = document.links.length;
  document.getElementById("demo").innerHTML = "The number of links of the specified site is " + x;
}
 */