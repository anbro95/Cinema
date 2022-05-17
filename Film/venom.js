// Шапка
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.querySelector('.cinema-list > img').classList.toggle("rotate");
  }
 
// 

// Меню
function mySecondFunction() {
  document.querySelector('.dropoverlay').style.cssText = 'left: 0';
  document.querySelector('.dropleft').style.cssText = 'left: 0';
}
 
 
function deleteDropLeft() {
  document.querySelector('.dropoverlay').style.cssText = 'left: -100vw';
  document.querySelector('.dropleft').style.cssText = 'left: -1000px';
}

// 


// $(document).ready(function() {
//   $("time-drop").click(function() {
//     $("dates").show();
//   });
// });

$(document).ready(function(){
  $("time-drop").click(function(){
    $("dates").show(300);
  });
});


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});