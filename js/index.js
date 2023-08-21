// $(".d-flex img").click((e) => {
// let targetImgSrc = $(e.target).attr("src")
// $(".master").fadeOut(100, () => {
//     $(".master").attr("src",targetImgSrc).fadeIn(100)
// })
// })



$(".openNav").click(() =>{
    $("#Menu").animate({ width:'20rem'},50)
   $("#home-content").animate({marginLeft :'20rem'},50)
})

$(".closebtn").click(() =>{
    $("#Menu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})



$("#Menu a").click(() =>{
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},1000);
    
})





$('#Duration .singer').click(function(){
    $('.about').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});





window.onload = () => {
   
    countDownToTime("01 January 2024 12:00:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(() => {  countDownToTime(countTo); }, 1000);
  }




var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});



