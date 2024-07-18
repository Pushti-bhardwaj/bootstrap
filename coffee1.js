var check = document.querySelector('#hy')
check.addEventListener("click",function(){
    check.style.color = 'blue';
})

$('input').eq(0).val("");

$('input').eq(0).on("click",function(){
  $(".container").fadeOut(3000) ;
})


$('input').eq(3).on("click",function(){
    $(".container").slideUp(1000) ;
  })