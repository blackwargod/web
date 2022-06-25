var  navUl = document.getElementById("navUl");
    var  li = navUl.children ;   //通过一级导航ul的子标签navUl.children找li
    for( var i=0 ; i <= li.length-1 ; i++){
        li[i].addEventListener("mouseenter",function(event){
            var  nowLi = event.currentTarget;  //当前的li（一级导航的li）
            var ul = nowLi.children[1] ;   //一级导航的li下二级导航ul的索引为1
            if( !ul ){            // 判断标签是否存在，不存在
                return false;   // 终止函数运行
            }
            // 显示标签
            ul.style.display = "block" ;
        });
        li[i].addEventListener("mouseleave",function(event){
            var  nowLi = event.currentTarget;
            var ul = nowLi.children[1] ;
            if( !ul ){        // 判断标签是否存在，不存在
                return false;  // 终止函数运行
            }
            // 隐藏
            ul.style.display = "none" ;
        });
    }
	

$(".fullSlide").hover(function(){
    $(this).find(".prev,.next").stop(true, true).fadeTo("show", 1)
},
function(){
    $(this).find(".prev,.next").fadeOut()
});
$(".fullSlide").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "fold",
    autoPlay: true,
    autoPage: true,
    trigger: "click",
    startFun: function(i) {
        var curLi = jQuery(".fullSlide .bd li").eq(i);
        if ( !! curLi.attr("_src")) {
            curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
        }
    }
});

    


