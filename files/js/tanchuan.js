// JavaScript Document
function showImg(that) { 
  var bodyWidth = document.documentElement.offsetWidth;
  var bodyheight = document.documentElement.clientHeight;
  var ListHeight = bodyheight-bodyWidth*0.3;
  $(".imgShowList").css("height",bodyheight);
  $(".imgShowListCont").css("height",bodyheight);
  $(".imgShowWin").css("display","block");
  var cla = $(that).attr("_date_class");
  var i =  parseInt($(that).attr("_data_num"));
  var length = $("."+cla).length;
  if(length==1){
    imgSingle(cla,bodyWidth,bodyheight);
  }else{
    $("body").append("<div class='imgShowWin' onclick='showClose();'><div class='imgShowList'><div class='swiper-container imgShowListCont'><div class='swiper-wrapper'></div><div class='swiper-pagination imgShowListPagination'></div></div></div></div>")
    imgWin(i,cla,length,bodyWidth,bodyheight);
  }
}
 function imgWin(i,cla,length,bodyWidth,bodyheight){
  for(a=0;a<length;a++){
    var imgSrc = $("."+cla).eq(a).attr("src");
    $(".imgShowListCont .swiper-wrapper").append("<div class='swiper-slide'><img src="+imgSrc+"></div>");
    var img = new Image();
    img.src = imgSrc;
    var imgWidth = img.width;
    var imgHeight = img.height;
    var sure = imgHeight/imgWidth*bodyWidth;
    if(sure>=bodyheight){
      $(".imgShowListCont .swiper-wrapper .swiper-slide").css("overflow","scroll");
      $(".imgShowListCont .swiper-wrapper .swiper-slide").css("overflow-x","inherit");
      $(".imgShowListCont .swiper-wrapper .swiper-slide").css("overflow-y","auto");
    }else{
      var marTop = (bodyheight-sure)/2;
      $(".imgShowListCont .swiper-wrapper img").eq(a).css("margin-top",marTop);
    }
  }
  $(".imgShowListCont .swiper-wrapper").css("height",bodyheight);
  var swiper = new Swiper('.imgShowListCont', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
  var late3d = "translate3d(-"+bodyWidth*i+"px,0px,0px)";
  $(".swiper-wrapper").css("transform",late3d);
  $(".imgShowListCont .swiper-wrapper .swiper-slide").removeClass("swiper-slide-active")
  $(".imgShowListCont .swiper-wrapper .swiper-slide").removeClass("swiper-slide-next");
  $(".imgShowListCont .swiper-wrapper .swiper-slide").removeClass("swiper-slide-prev");
  $(".imgShowListPagination .swiper-pagination-bullet").removeClass("swiper-pagination-bullet-active");
  $(".imgShowListCont .swiper-wrapper .swiper-slide").eq(i).addClass("swiper-slide-active");
  $(".imgShowListPagination .swiper-pagination-bullet").eq(i).addClass("swiper-pagination-bullet-active");
  if(i==0){
    j=i+1;
    $(".imgShowListCont .swiper-wrapper .swiper-slide").eq(j).addClass("swiper-slide-next");
  }else if(i+1==length){
    s=i-1;
    $(".imgShowListCont .swiper-wrapper .swiper-slide").eq(s).addClass("swiper-slide-prev");
    
  }else{
    j=i+1;
    s=i-1;
    $(".imgShowListCont .swiper-wrapper .swiper-slide").eq(s).addClass("swiper-slide-prev");
    $(".imgShowListCont .swiper-wrapper .swiper-slide").eq(j).addClass("swiper-slide-next");
  }
}
function imgSingle(cla,bodyWidth,bodyheight) { 
  var imgSrc = $("."+cla).attr("src");
  $("body").append("<div class='imgShowWin' onclick='showClose();'><img src="+imgSrc+"></div>")
  var img = new Image();
  img.src = imgSrc;
  var imgWidth = img.width;
  var imgHeight = img.height;
  var sure = imgHeight/imgWidth*bodyWidth;
  if(sure>=bodyheight){
    $(".imgShowWin").css("overflow","scroll");
    $(".imgShowWin").css("overflow-x","inherit");
    $(".imgShowWin").css("overflow-y","auto");
  }else{
    var marTop = (bodyheight-sure)/2;
    $(".imgShowWin img").css("margin-top",marTop);
  }
 }
function showClose() { 
  $(".imgShowWin").remove();
 }