$(document).ready(function(){
  $(".accordion-wrap").on("click", function(){  
    $(this).children().eq(1).slideToggle(300);  
    $(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300);  
  })


/* Add the tooltips */

/* Another solution from StackOverflow

$(document).ready(function(){
  $(".accordion-item").click(function(){
    $(".accordion-text").slideUp(400);
    if(!$(this).next().is(":visible")){
       $(this).next().slideToggle(400)
       }    
  })  
})

*/
/***********
  TOOLTIPS
 ***********/
$('.tooltip').tooltipster({
    theme: 'tooltipster-noir'
});//doc ready end
});

var index = 1;

function plusIndex(n){
index = index + 1;
showImage(index);
}

showImage(1);

function showImage(n){
var i;
var x = document.getElementsByClassName("slides");
if(n > x.length){ index = 1};
if(n < 1){ index = x.length};
for(i=0;i<x.length;i++)
{
x[i].style.display = "none";
}
x[index-1].style.display = "block";
}
autoSlide();
function autoSlide(){
var i;
var x = document.getElementsByClassName("slides");
for(i=0;i<x.length;i++){
x[i].style.display = "none";
}
index++;
if(index > x.length){index = 1}
x[index-1].style.display = "block";
setTimeout(autoSlide,2000);

}