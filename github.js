$(document).ready(function(){
var ph = $('.placeholder')
var dv = $('.nav-top'), st;
dv.attr('otop', dv.offset().top);
$(window).scroll(function(){
    st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
    if (st > parseInt(dv.attr('otop'))){
        if (dv.css('position') == 'static') {
            dv.css({'position': 'fixed', 'top': 0});
            ph.css('display', 'inline-block')
            // $('.mini-userimg').css({'display':'inline-block', 'position':'fixed', 'top':0, 'background-color':'#fff'});
        }
    }
})
})
$(document).ready(function(){
    var ph = $('.placeholder')
    var dv = $('.nav-top'), st;
    dv.attr('otop', dv.offset().top);
    $(window).scroll(function(){
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (st < parseInt(dv.attr('otop'))){
            if (dv.css('position') == 'fixed'){
                dv.css({'position': 'static', 'top': 90});
                ph.css('display', 'none')
                // $('.mini-userimg').css('display','none');
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
    })
})
$(document).ready(function(){
    var d_info = $('.v-card'), st;
    var dm = $('.mini-userimg');
    d_info.attr('otop', d_info.offset().top);
    $(window).scroll(function(){
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (st < parseInt(d_info.attr('otop'))){
            dm.css('display', 'none');
            $('.nav-top').css('width', 745);
        }
    })
})

$(document).ready(function(){
    var dt = $('.contribute-year')
    dt.attr('otop', dt.offset().top);
    $(window).scroll(function(){
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (st >= parseInt(dt.attr('otop'))){
            dt.css('position','fixed');
        }
    })
})
$(document).ready(function(){
    var dl = $('.timeline-year-list')
    var dt = $('.contribute-year')
    dl.attr('otop', dl.offset().top)
    dt.attr('otop', dt.offset().top);
    $(window).scroll(function(){
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (dt.css('position','fix') && st < dl.attr('otop')){
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
        if (other.css('background-color')!='#0366d6'){
            $(this).css({'background-color':'#0366d6', 'color':'#fff'});
            other.css({'background-color':'#fff', 'color':'#24292e'});
        }
    })
})
