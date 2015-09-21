/**
 * Created by Leon Naldo on 9/19/15.
 */

function getClasses(elem) {
  var x = document.getElementsByTagName(elem)[0].className;
  var res = x.split(" ");
  document.getElementById("demo").innerHTML = res;
}

function addClass(elem,className) {
  var d = document.getElementsByTagName(elem)[0];
  d.className += className;
}