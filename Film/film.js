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




$(document).ready(function(){
  $(".time-drop").click(function(){
    $(".dates").toggle();
    document.querySelector('.time-arrow').classList.toggle("rotate");
  });
});


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


$(document).ready(function() {
  $(".like").click(function() {
    $(".like").attr('src', '../img/like-active.png');
  });
});

$(document).ready(function() {
  $(".dislike").click(function() {
    $(".dislike").attr('src', '../img/dislike-active.png');
  });
});


$(document).ready(function() {
  $(".time-button").click(function() {
    $(".timetable-xs").css('display', 'block');
  });

  $(".time-cross").click(function() {
    $(".timetable-xs").css('display', 'none');
  });
});

