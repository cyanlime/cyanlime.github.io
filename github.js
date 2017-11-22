$(document).ready(function(){
    var ph = $('.placeholder');
    var dv = $('.nav-top'), st;
    dv.attr('otop', dv.offset().top);
    $(window).scroll(function(){
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (st > parseInt(dv.attr('otop'))){
            if (dv.css('position') == 'static') {
                dv.css({'position': 'fixed', 'top': 0});
                ph.css('display', 'inline-block');
            }
        }
        else {
            if (dv.css('position') == 'fixed'){
                dv.css({'position': 'static', 'top': 90});
                ph.css('display', 'none');
            }
        }
    })
})


$(document).ready(function(){
    var d_info = $('.v-card'), st;
    var dm = $('.mini-userimg');
    d_info.attr('otop', d_info.offset().top);
    $(window).scroll(function(){
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (st > parseInt(d_info.attr('otop'))){
            if (dm.css('display') == 'none') {
                dm.css({'display':'inline-block', 'position':'fixed', 'top':0, 'background-color':'#fff'});
                $('.nav-top').css('width', 980);
            }
        }
        else {
            dm.css('display', 'none');
            $('.nav-top').css('width', 745);
        }
    })
})

$(document).ready(function(){
    var dt = $('.contribute-year');
    var dl = $('.timeline-year-list');
    var df = $('.fake-timeline-year-list');
    var ft = $('.footer').offset().top;
    $(window).scroll(function(){
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (st+73 >= parseInt(dt.offset().top)){
            if (st+dl.height()+73<ft){
                dt.css('display', 'inline-block');
                dt.css('position','fixed');
                df.css('display', 'none');
            }
            else {
                dt.css('display', 'none');
                df.css('display', 'inline-block');
            }
        }
        if (dt.css('position','fixed') && st+73 < dl.offset().top){
            dt.css('position','static');
        }
    })
})

$(document).ready(function(){
    $(".unfold").click(function(){
        $(this).siblings('ul').toggle();
    })
})

$(document).ready(function(){
    $(".jump").click(function(){
        $(this).children('.dropdown-menu').toggle();
    })
})

$(document).ready(function(){
    $(".contribute-year li").click(function(){
        var other = $(this).siblings();
        $(this).css({'background-color':'#0366d6', 'color':'#fff'});
        other.css({'background-color':'#fff', 'color':'#24292e'});
        var i = $(this).index();
        $(".fake-contribute-year li").eq(i).css({'background-color':'#0366d6', 'color':'#fff'});
        $(".fake-contribute-year li").eq(i).siblings().css({'background-color':'#fff', 'color':'#24292e'});
        $(".dropdown-menu").css('display', 'none');
    })
})
$(document).ready(function(){
    $(".fake-contribute-year li").click(function(){
        var other = $(this).siblings();
        $(this).css({'background-color':'#0366d6', 'color':'#fff'});
        other.css({'background-color':'#fff', 'color':'#24292e'});
        var i = $(this).index();
        $(".contribute-year li").eq(i).css({'background-color':'#0366d6', 'color':'#fff'});
        $(".contribute-year li").eq(i).siblings().css({'background-color':'#fff', 'color':'#24292e'});
        $(".dropdown-menu").css('display', 'none');
    })
})