$(function(){
      $('[data-toggle="tooltip"]').tooltip();
	var items=$(".carousel-inner .item");
	$(window).on("resize",function(){
		var width = $(window).width();
		if(width >= 768){
			 $(items).each(function(index,value){
                var item=$(this);
                /*当前自定义属性中 存储的图片路径*/
                var imgSrc=item.data("largeImage");
                /*添加非移动端的子元素*/
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
            });
		}else{
			 $(items).each(function(index,value){
                var item=$(this);
                var imgSrc=item.data("smallImage");
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>');
            });
		}
	}).trigger('resize');
	 /*添加移动端的滑动操作*/
    var startX,endX;
    var carousel_inner=$(".carousel-inner")[0];

    /*获取当前轮播图*/
    var carousel=$(".carousel");

    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            /*上一张*/
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            /*下一张*/
            carousel.carousel('next');
        }
    });
    var ul = $(".wjs_product .nav-tabs");
    var lis = ul.find("li");
    var totalWidth=0;
    lis.each(function(index,value){
        totalWidth= totalWidth+$(value).innerWidth();
    });
    ul.width(totalWidth);
    var oScroll = new BScroll(".wrapper", {
       scrollX:true,
       bounce: {
        top: false,
        bottom: false,
        left: true,
        right: true
        },
        click: true,
    });
});