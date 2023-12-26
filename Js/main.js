var myh1 = document.getElementById("myh1");
var number = 0;
function incNumber() {
  number += 1;
  myh1.innerHTML = number;
  if (number == 10728) {
    clearInterval(x);
  }
}

var x = setInterval(incNumber, 0.001);

var myh2 = document.getElementById("myh2");
var num = 0;
function incNum() {
  num += 1;
  myh2.innerHTML = number;
  if (num == 2000) {
    clearInterval(y);
  }
}

var y = setInterval(incNum, 0.01);

var myh3 = document.getElementById("myh3");
var numm = 0;
function incNumb() {
  numm += 1;
  myh3.innerHTML = numm;
  if (numm == 3750) {
    clearInterval(b);
  }
}
var b = setInterval(incNumb, 0.1);

var myh4 = document.getElementById("myh4");
var nummb = 0;
function incNumbe() {
  nummb += 1;
  myh4.innerHTML = nummb;
  if (nummb == 2009) {
    clearInterval(v);
  }
}

var v = setInterval(incNumbe, 1);

var myh5 = document.getElementById("myh5");
var nummbb = 0;
function incNumberr() {
  nummbb += 1;
  myh5.innerHTML = nummbb;
  if (nummbb == 1949) {
    clearInterval(z);
  }
}

var z = setInterval(incNumberr, 1);

$(".input_text").focus(function(){
  $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
  $(this).prev('.fa').removeclass('glowIcon')
})
document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}
