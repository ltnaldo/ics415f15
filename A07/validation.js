/**
 * Created by Leon Naldo on 9/20/15.
 */

/** An addClass for IDs instead of Elements, for part three */
function addClassId(id,className) {
  var d = document.getElementById(id);
  d.className += className;
}

function validateForm(){
  var fields = ["username","email","password","confirm"];
  var i;
  var j = 0; // j is error counter
  var l = fields.length;
  var fieldname;
  var errorString = [];

  for(i = 0; i < l; i++) {
    fieldname = fields[i];
    var x = document.forms["myForm"][fieldname].value;
    if(x == null || x == "") {
      addClassId(fieldname,"form_error");
      errorString.push("The " + fieldname + " field is required.");
      j++;
    }
  }

  var y = document.forms["myForm"]["password"].value;
  var z = document.forms["myForm"]["confirm"].value;
  if(y !== z) {
    addClassId("confirm","form_error");
    errorString.push("Characters do not match.");
    j++;
  }

  if (j > 0) {
    document.getElementById("form_alert").innerHTML = string.join(" <br> ");
    return false;
  }
  else { return true; }
}