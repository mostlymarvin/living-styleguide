 $(function() {
     $("#menu").slicknav({
         allowParentLinks: !0,
         prependTo: "#nav"
     })
 }), $('a[href^="#"]').on("click", function(t) {
     var e = $(this.getAttribute("href"));
     e.length && (t.preventDefault(), $("html, body").stop().animate({
         scrollTop: e.offset().top
     }, 500))
 }), $(function() {
     var t = $(this.getAttribute("href"));
     t.length && (event.preventDefault(), $("html, body").stop().animate({
         scrollTop: t.offset().top
     }, 500))
 });
 var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

 function rgb2hex(t) {
     return "#" + hex((t = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1]) + hex(t[2]) + hex(t[3])
 }

 function hex(t) {
     return isNaN(t) ? "00" : hexDigits[(t - t % 16) / 16] + hexDigits[t % 16]
 }

 function hexToCMYK(t) {
     var e = 0,
         n = 0,
         i = 0,
         r = 0;
     if (6 == (t = "#" == t.charAt(0) ? t.substring(1, 7) : t).length) {
         if (1 == /[0-9a-f]{6}/i.test(t)) {
             var o = parseInt(t.substring(0, 2), 16),
                 a = parseInt(t.substring(2, 4), 16),
                 h = parseInt(t.substring(4, 6), 16);
             if (0 == o && 0 == a && 0 == h) return r = 1, [0, 0, 0, 1];
             e = 1 - o / 255, n = 1 - a / 255, i = 1 - h / 255;
             var s = Math.min(e, Math.min(n, i));
             return e = (e - s) / (1 - s), n = (n - s) / (1 - s), i = (i - s) / (1 - s), r = s, e *= 100, n *= 100, i *= 100, r *= 100, [e = parseFloat(e).toFixed(0) + "%", n = parseFloat(n).toFixed(0) + "%", i = parseFloat(i).toFixed(0) + "%", r = parseFloat(r).toFixed(0) + "%"]
         }
         alert("Invalid digits in the input hex value!")
     } else alert("Invalid length of the input hex value!")
 }
 $("#colors .alt > span").each(function() {
         var t = $(this).css("background-color"),
             e = rgb2hex(t);
         $(".hex label", this).text(e), $(".rgb label", this).text(t)
     }), $("#colors .color-box").each(function() {
         var t = $(this).css("background-color"),
             e = rgb2hex(t),
             n = hexToCMYK(e);
         $(".labels .hex label", this).text(e), $(".labels .rgb label", this).text(t), $(".labels .cmyk label", this).text("cmyk:(" + n + ")")
     }),
     function(t) {
         eqht = function(e) {
             var n, i = 0,
                 r = 0,
                 o = new Array;
             t(e).each(function() {
                 if (n = t(this), t(n).height("auto"), topPostion = n.position().top, r != topPostion) {
                     for (currentDiv = 0; currentDiv < o.length; currentDiv++) o[currentDiv].height(i);
                     o.length = 0, r = topPostion, i = n.height(), o.push(n)
                 } else o.push(n), i = i < n.height() ? n.height() : i;
                 for (currentDiv = 0; currentDiv < o.length; currentDiv++) o[currentDiv].height(i)
             })
         }, t(window).load(function() {
             eqht(".logo-alt");
              h = $('#typography h1').css('font-family');
              p = $('#typography p').css('font-family');
              $("#typography .headings span").text( h );
              $("#typography .body span").text( p ); 


         }), t(window).resize(function() {
             eqht(".logo-alt")
         })
     }(jQuery);

     
