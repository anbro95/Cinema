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
  $('[data-toggle="tooltip"]').tooltip();
  $("")
});





$(document).ready(function() {
  
   $(".place-box").one('click', (function() {
     $(this).toggleClass('chosen');
     let num = $('.chosen').length;
     let res = num * 90;
     $(".pay-sum").html(parseInt(res) + " грн");

     let place = Number($(this).attr('start'));
        
        let row = Number($(this).attr('id'));
        
        

         
          $(".here").append($(`<div class="place-pay" id="${row}" start="${place}">` + '<p class="row">' + row + " ряд" + '</p>' + '<p class="place">'+ place + " місце" + '</p>' + '<p class="place-price">90 грн</p>' + '<img src="../img/ticket-cross.png" alt="close" class="ticket-cross">' + '/div'));
   }));

   $("body").on('click', '.ticket-cross', function() {
            
            let id = Number($(this).closest('div').attr('id'));
            let start = Number($(this).closest('div').attr('start'));
            
            $(`[start = ${start}][id = ${id}]`).toggleClass('chosen');
            $(this).closest('div').remove();
            let num = $('.chosen').length;
            let res = num * 90;
            
            
            $(".pay-sum").html(parseInt(res) + " грн");
   });
});








$(document).ready(function() {
  $(".place-box").hover(function() {
    
    let row = Number($(this).attr('id'));
    let place = Number($(this).attr('start'));
    
    let str = new String("Ряд: " + row + " місце: " + place);
    $(this).attr('title', str);

    
  });
});



